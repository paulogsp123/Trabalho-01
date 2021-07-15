import { data } from './data.js'

function listadomenu(id, nome, preco, imagem) {
  return `
  <li>
     <a class="list" data-id="${id}">
      <div class="menu-img">
       <img src="${imagem}" alt="" width="65px" height="60px">
        </div>
         <span class="menu-name">${nome}</span>
         <span class="menu-price">R$ ${preco}</span>
         </a>
              </li>
    
  `
}

function Cardapiomontado(categoriaSelected = null) {
  const cardapio = document.querySelector('.menu-list')

  const listaProdutosMenu = data.reduce(function (accumulator, { id, nome, preco, imagem, categoria }) {
    if (!categoriaSelected) {
      accumulator += listadomenu(id, nome, preco, imagem)
    }
    if (categoriaSelected === categoria) {
      accumulator += listadomenu(id, nome, preco, imagem)
    }
    return accumulator
  }, '')

  cardapio.innerHTML = listaProdutosMenu

}
Cardapiomontado()

const categorias = document.querySelectorAll('.menu_card')

categorias.forEach(categoria => {
  categoria.addEventListener('click', (event) => {

    const categoriaSelected = event.currentTarget.dataset.categoria
    Cardapiomontado(categoriaSelected)

  })
})





