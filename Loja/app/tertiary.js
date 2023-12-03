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
                    if(!card.classList.contains('item-discount')){
                        card.classList.add('hidden')
                    }
                })
            }
        })
    })
}

// card.classList.contains('item-discount')