const editPrompt = document.querySelector(".edit-prompt")
const wishlistBag = document.querySelector('#bag')

var wishlist = []

function userType(role, deleteBtn, editBtn, indice) {
    if(role == "Manager" || role == "Supervisor") {
        if(role == "Manager") {
            deleteBtn.addEventListener("click", () => {
                if(confirm('Você deseja deletar o item?') == true){
                    dados.itens.splice(indice, 1)
                    cards()
                    // let itemId = Number(item.getAttribute('item-id'))
                    // wishlist.forEach((item, index) => {
                    //     if (item.id == itemId) {
                    //         wishlist.splice(index, 1)
                    //     }
                    // })
                    // listAdd()
                }
            })
        }
        editBtn.addEventListener("click", () => {
            
            editPrompt.classList.remove("hidden")

            editPrompt.querySelector('#edit-name').value = dados.itens[indice].name
            editPrompt.querySelector('#edit-description').value = dados.itens[indice].description
            editPrompt.querySelector('#edit-price').value = dados.itens[indice].price
            editPrompt.querySelector('#edit-discount').value = dados.itens[indice].discount
            editPrompt.querySelector('#edit-stars').value = dados.itens[indice].stars
            editPrompt.querySelector('#edit-stock').value = dados.itens[indice].stock

            editPrompt.querySelector('#edit-form').addEventListener("submit", (e) => {
                e.preventDefault()
                dados.itens[indice].name = editPrompt.querySelector('#edit-name').value
                dados.itens[indice].description = editPrompt.querySelector('#edit-description').value
                dados.itens[indice].price = editPrompt.querySelector('#edit-price').value.replace(',', '.')
                dados.itens[indice].discount = editPrompt.querySelector('#edit-discount').value.replace(',', '.')
                dados.itens[indice].stars = editPrompt.querySelector('#edit-stars').value
                dados.itens[indice].stock = editPrompt.querySelector('#edit-stock').value
                editPrompt.classList.add("hidden")
                indice = null
                cards()
            })
            
            editPrompt.querySelector('#edit-form').addEventListener("reset", () => {
                indice = null
                editPrompt.classList.add("hidden")
            })
        })
    }
}

wishlistBag.addEventListener('click', () => {
    document.querySelector('.wishlist').classList.toggle('active')
})

function wishlistQty(){
    const dashIcon = document.querySelectorAll('.dash-icon')
    const plusIcon = document.querySelectorAll('.plus-icon')

    dashIcon.forEach((dash) => {
        if(dash.parentElement.querySelector('.product-quantity').innerHTML == 1) {
            dash.style.cursor = "not-allowed"
        } else {
            dash.addEventListener('click', (e) => {
                e.target.parentElement.querySelector('.plus-icon').style.cursor = "pointer"
                if(e.target.parentElement.querySelector('.product-quantity').innerHTML > 1){
                    dash.style.cursor = "pointer"
                    e.target.parentElement.querySelector('.product-quantity').innerHTML = Number(e.target.parentElement.querySelector('.product-quantity').innerHTML) - 1
                    if(e.target.parentElement.querySelector('.product-quantity').innerHTML == 1){
                        dash.style.cursor = "not-allowed"
                    }
                }
                calculate(e.target.parentElement)
            })
        }
        
    })

    plusIcon.forEach((plus) => {
        if(plus.parentElement.querySelector('.product-quantity').innerHTML == 10) {
            plus.style.cursor = "not-allowed"
        } else {
            plus.addEventListener('click', (e) => {
                e.target.parentElement.querySelector('.dash-icon').style.cursor = "pointer"
                if(e.target.parentElement.querySelector('.product-quantity').innerHTML < 10) {
                    plus.style.cursor = "pointer"
                    e.target.parentElement.querySelector('.product-quantity').innerHTML = Number(e.target.parentElement.querySelector('.product-quantity').innerHTML) + 1
                    if(e.target.parentElement.querySelector('.product-quantity').innerHTML == 10){
                        plus.style.cursor = "not-allowed"
                    }
                }
                calculate(e.target.parentElement)
            })
        } 
    })
}

function calculate(target){
    wishlist.forEach((item, index) => {
        if(target.parentElement.parentElement.getAttribute('item-id') == item.id){
            console.log(target.parentElement.parentElement.getAttribute('item-id'))
            item.quantity = Number(target.querySelector('.product-quantity').innerHTML)
            listAdd()
        }
    })
}