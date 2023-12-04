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
            <div class="wishlist-item">
                <img src="${item.image}" draggable="false">
                <div class="wishlist-item-desc">
                    <p class="produt-name">${item.name}</p>
                    <p class="product-price">${item.price}</p>
                    <p class="product-unity">${item.price}</p>
                </div>
                <div class="wishlist-item-actions-container">
                    <div class="wishlist-item-actions">
                        <i class="bi bi-dash-square wishlist-icon"></i>
                        <p class="product-quantity">1</p>
                        <i class="bi bi-plus-square wishlist-icon"></i>
                    </div>
                </div>
            </div>
        `
    })
}

// Adicionando interação aos corações
function heart(logged) {
    const hearts = document.querySelectorAll('.heart')
    hearts.forEach((heart, i) => {
        heart.onclick = () => {
            if(logged){
                heart.classList.toggle('liked')
                if (heart.classList.contains('liked')) {
                    heart.src = '../assets/heartfill.png'

                    let item = heart.parentElement.parentElement.parentElement
                    wishlist.push({
                        name: item.querySelector('.info h1').innerHTML,
                        price: item.querySelector('.price-value').innerHTML,
                        image: item.querySelector('.main-img').src
                    })
                    listAdd()
                } else {
                    heart.src = '../assets/heart.png'
                    wishlist.splice(i, 1)
                    console.log(wishlist)
                    listAdd()
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

logo.onclick = function(){
    if(document.querySelector('#username').innerHTML != ''){
        menu(true)
    }else{
        menu(false)
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