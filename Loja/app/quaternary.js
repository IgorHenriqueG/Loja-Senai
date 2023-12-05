const dropdowns = document.querySelectorAll('.dropdown')
function dropdown(){
    const cardsFilter = document.querySelectorAll('.card')
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if(e.target.innerHTML == "Todos"){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                })
            }else if(e.target.innerHTML == "Desconto") { 
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(!card.classList.contains('item-discount')){
                        card.classList.add('hidden')
                    }
                })
            }else if(e.target.innerHTML == "Consoles"){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(!card.classList.contains('console')){
                        card.classList.add('hidden')
                    }
                })
            }else if(e.target.innerHTML == "PlayStation" && !e.target.classList.contains('games')){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(card.querySelector('h1').innerHTML.split(' ')[0] != "PlayStation"){
                        card.classList.add('hidden')
                    }
                })
            }else if(e.target.innerHTML == "Xbox" && !e.target.classList.contains('games')){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(card.querySelector('h1').innerHTML.split(' ')[0] != "Xbox"){
                        card.classList.add('hidden')
                    }
                })
            }else if(e.target.innerHTML == "Nintendo" && !e.target.classList.contains('games')){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(card.querySelector('h1').innerHTML.split(' ')[0] != "Nintendo"){
                        card.classList.add('hidden')
                    }
                })
            }else if(e.target.innerHTML == "Jogos"){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(!card.classList.contains('game')){
                        card.classList.add('hidden')
                    }
                })
            }else if (e.target.innerHTML == "PlayStation"){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(card.querySelector('p').innerHTML.split(' ')[0] != "PlayStation"){
                        card.classList.add('hidden')
                    }
                })
            }else if (e.target.innerHTML == "Xbox"){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(card.querySelector('p').innerHTML.split(' ')[0] != "Xbox"){
                        card.classList.add('hidden')
                    }
                })
            }else if (e.target.innerHTML == "Nintendo"){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(card.querySelector('p').innerHTML.split(' ')[0] != "Nintendo"){
                        card.classList.add('hidden')
                    }
                })
            }else if(e.target.innerHTML == "Acessórios"){
                cardsFilter.forEach(card => {
                    card.classList.remove('hidden')
                    if(!card.classList.contains('Acessórios')){
                        card.classList.add('hidden')
                    }
                })
            }else if (e.target.innerHTML == "Controles"){
                cardsFilter.forEach(card => {
                    if(card.querySelector('p').innerHTML.split(' ')[0] != "Controles"){
                        card.classList.add('hidden')
                    }
                })
            }else if (e.target.innerHTML == "Headset"){
                cardsFilter.forEach(card => {
                    if(card.querySelector('p').innerHTML.split(' ')[0] != "Headset"){
                        card.classList.add('hidden')
                    }
                })
            }else if (e.target.innerHTML == "Microfone"){
                cardsFilter.forEach(card => {
                    if(card.querySelector('p').innerHTML.split(' ')[0] != "Microfone"){
                        card.classList.add('hidden')
                    }
                })
            }else if (e.target.innerHTML == "Mouse"){
                cardsFilter.forEach(card => {
                    if(card.querySelector('p').innerHTML.split(' ')[0] != "Mouse"){
                        card.classList.add('hidden')
                    }
                })
            }else if (e.target.innerHTML == "Teclado"){
                cardsFilter.forEach(card => {
                    if(card.querySelector('p').innerHTML.split(' ')[0] != "Teclado"){
                        card.classList.add('hidden')
                    }
                })
            }
        })
    })
}

