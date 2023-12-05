const eyes = document.querySelectorAll('.eye')
const loginBtn = document.getElementById('login')
const registerBtn = document.getElementById('register')
const logo = document.getElementById('logo')
const loginArrow = document.querySelector('#login-arrow')
const wishlistModel = document.querySelector('.wishlist')


function listAdd(){
    wishlistModel.innerHTML = ''
    wishlist.forEach(item => {
        wishlistModel.innerHTML += `
            <div class="wishlist-item" item-id="${item.id}">
                <img src="${item.image}" draggable="false">
                <div class="wishlist-item-desc">
                    <p class="produt-name">${item.name}</p>
                    <p class="product-price">R$${(item.price * item.quantity).toFixed(2)}</p>
                    <p class="product-unity">R$${item.price.toFixed(2)}</p>
                </div>
                <div class="wishlist-item-actions-container">
                    <div class="wishlist-item-actions">
                        <i class="bi bi-dash-square wishlist-icon dash-icon"></i>
                        <p class="product-quantity">${item.quantity}</p>
                        <i class="bi bi-plus-square wishlist-icon plus-icon"></i>
                    </div>
                </div>
            </div>
        `
    })
    wishlistQty()
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
    document.querySelector('body').scrollTo(0, 0)
    document.querySelector('.container').classList.add('hidden')
    document.querySelector('.login').classList.remove('hidden')
    document.querySelector('.register').classList.add('hidden')
    document.querySelector('.login-animation').classList.remove('hidden')
}

registerBtn.onclick = () => {
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