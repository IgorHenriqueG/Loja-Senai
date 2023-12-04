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