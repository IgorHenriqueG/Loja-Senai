const eyes = document.querySelectorAll('.eye')
const loginBtn = document.getElementById('login')
const registerBtn = document.getElementById('register')
const logo = document.getElementById('logo')
const loginArrow = document.querySelector('#login-arrow')

// Adicionando interação aos corações
function heart(logged) {
    const hearts = document.querySelectorAll('.heart')
    hearts.forEach(heart => {
        heart.onclick = () => {
            if(logged){
                heart.classList.toggle('liked')
                if (heart.classList.contains('liked')) {
                    heart.src = '../assets/heartfill.png'
                } else {
                    heart.src = '../assets/heart.png'
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
            user = username
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