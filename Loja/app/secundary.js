const eyes = document.querySelectorAll('.eye')
const loginBtn = document.getElementById('login')
const registerBtn = document.getElementById('register')
const logo = document.getElementById('logo')
const loginArrow = document.querySelector('#login-arrow')
const wishlistModel = document.querySelector('.wishlist-item-container')
const wishlistRecicleBtn = document.querySelector('.bi-recycle')

function listAdd(){
    let total = 0
    wishlistModel.innerHTML = ''
    if(wishlist.length == 0){
        document.querySelector('.wishlist-itens-number').classList.add('hidden')
        wishlistModel.innerHTML = '<p class="wishlist-empty">Sua Lista de Desejos parece vazia<br>que tal adicionar alguns itens?</p>'
    }
    
    wishlist.forEach(item => {
        total += item.quantity
        wishlistModel.innerHTML += `
            <div class="wishlist-item" item-id="${item.id}">
                <img src="${item.image}" draggable="false">
                <div class="wishlist-item-desc">
                    <p class="produt-name">${item.name}</p>
                    <p class="product-price">R$${(item.price * item.quantity).toFixed(2)}</p>
                    <p class="product-unity">R$${item.price.toFixed(2)}</p>
                </div>
                <div class="wishlist-item-actions-container">
                    <i class="bi bi-trash3-fill del-wishlist"></i>
                    <div class="wishlist-item-actions">
                        <i class="bi bi-dash-square wishlist-icon dash-icon"></i>
                        <p class="product-quantity">${item.quantity}</p>
                        <i class="bi bi-plus-square wishlist-icon plus-icon"></i>
                    </div>
                </div>
            </div>
        `
    })

    if(total > 0 && total < 100){
        document.querySelector('.wishlist-itens-number').innerHTML = total
        document.querySelector('.wishlist-itens-number').classList.remove('hidden')
    }else if(total > 99){
        document.querySelector('.wishlist-itens-number').innerHTML = '99+'
        document.querySelector('.wishlist-itens-number').classList.remove('hidden')
    }
    
    wishlistQty()
    listRemove()
    wishlistCalc()
}

function wishlistRecicle(){
    wishlistRecicleBtn.onclick = () => {
        wishlist = []
        listAdd()
        dados.itens.forEach((item) => {
            document.querySelectorAll('.card')[item.id - 1].querySelector('.heart').classList.remove('liked')
            document.querySelectorAll('.card')[item.id - 1].querySelector('.heart').src = '../assets/heart.png'
        })
    }
}

function wishlistCalc(){
    let total = 0
    wishlist.forEach(item => {
        total += item.price * item.quantity
    })
    document.querySelector('.wishlist-total span').innerHTML = total.toFixed(2)
}

function listRemove() {
    var delList = document.querySelectorAll('.del-wishlist')
    if(delList.length > 0){
        delList.forEach((del) => {
            del.addEventListener("click", (e) => {  
                wishlist.forEach((item, index) => {
                    if(item.id == Number(e.target.parentElement.parentElement.getAttribute('item-id'))){
                        wishlist.splice(index, 1)
                    }
                })
                listAdd()
                dados.itens.forEach((item, index) => {
                    if(item.id == Number(e.target.parentElement.parentElement.getAttribute('item-id'))){
                        document.querySelectorAll('.card')[index].querySelector('.heart').classList.remove('liked')
                        document.querySelectorAll('.card')[index].querySelector('.heart').src = '../assets/heart.png'
                    }
                })
            })
        })
    }
}


// Adicionando interação aos corações
function heart(logged) {
    const hearts = document.querySelectorAll('.heart')
    hearts.forEach((heart) => {
        heart.onclick = () => {
            var item = heart.parentElement.parentElement.parentElement
            var itemId = Number(item.getAttribute('item-id'))
            if(logged){
                if(item.querySelector('.stock-value').querySelector('span').innerHTML != 0){
                        heart.classList.toggle('liked')
                    if (heart.classList.contains('liked')) {
                        heart.src = '../assets/heartfill.png'
                        let itemPrice = item.querySelector('.price-value').querySelector('span').innerHTML.replace(',', '.')
                        wishlist.push({
                            id: itemId,
                            image: item.querySelector('.main-img').src,
                            name: item.querySelector('h1').innerHTML,
                            price: Number(itemPrice),
                            quantity: 1
                        })
                        listAdd()
                    } else {
                        heart.src = '../assets/heart.png'
                        wishlist.forEach((item, index) => {
                            if (item.id == itemId) {
                                wishlist.splice(index, 1)
                            }
                        })
                        listAdd()
                    }
                    
                }
            }else{
                heart.parentNode.querySelector('.heart-text').classList.remove('hidden')
                setTimeout(() => {
                    heart.parentNode.querySelector('.heart-text').classList.add('hidden')
                }, 1500)
            }
        }
    })
}

// Função para mostrar as senhas na tela de login

loginArrow.onclick = () => {
    document.querySelector('.logins-view').classList.toggle('active')
}

// Funções para abrir as telas de Login e Register

function menuLogo(){
    logo.onclick = function(){
        document.documentElement.scrollTop = 0
        if(document.querySelector('#username').innerHTML != ''){
            menu(true)
        }else{
            menu(false)
        }
    }
}

function menu(logged, username){
    if(logged){
        if(username != null){
            user = username.split(' ')[0]
        }
        document.querySelector('.buttons').classList.add('hidden')
        document.querySelector('.user').classList.remove('hidden')
        
        document.querySelector('#username').innerHTML = `Bem vindo(a), ${user}`
    }else{
        document.querySelector('.buttons').classList.remove('hidden')
        document.querySelector('.user').classList.add('hidden')
        document.querySelector('#username').innerHTML = ''
    }
    document.querySelector('.container').classList.remove('hidden')
    document.querySelector('.login').classList.add('hidden')
    document.querySelector('.register').classList.add('hidden')
}
loginBtn.onclick = () => {
    document.documentElement.scrollTop = 0
    document.querySelector('.container').classList.add('hidden')
    document.querySelector('.login').classList.remove('hidden')
    document.querySelector('.register').classList.add('hidden')
    document.querySelector('.login-animation').classList.remove('hidden')
}

registerBtn.onclick = () => {
    document.documentElement.scrollTop = 0
    document.querySelector('body').style = 'overflow: hidden'
    document.querySelector('.container').classList.add('hidden')
    document.querySelector('.login').classList.add('hidden')
    document.querySelector('.register').classList.remove('hidden')
    document.querySelector('.login-animation').classList.remove('hidden')
}

// Mostrar e esconder senha

eyes.forEach(eye => {
    eye.onclick = () => {
        if (eye.classList.contains('view')) {
            eye.classList.remove('view')
            eye.previousElementSibling.type = 'password'
            eye.src = '../assets/view.png'
        } else {
            eye.classList.add('view')
            eye.previousElementSibling.type = 'text'
            eye.src = '../assets/hide.png'
        }
    }
})