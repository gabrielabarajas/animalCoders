const elemProducts = document.querySelector("#products-mobile");
const buttonsSelection = document.querySelector(".btns-selection");
let quantitySel = 0;
let cart = [];

function renderProducts(){
    productos.forEach((producto) => {
        elemProducts.innerHTML += `
        <div class="crd-product-mobile">
          <img id="img-product-mobile" src="${producto.image}" alt="${producto.title}">
          <p id="txt-name-mobile">${producto.title}</p>
          <p id="txt-price-mobile">${producto.price}<span> euros</span></p>
          <div class="btns-selection">
            <div class="ctn-selection">
              <button class="btn-plusminus">-</button>
              <input type="text">
              <button class="btn-plusminus">+</button>
            </div>
            <img src="./assets/imgs/papelera-de-reciclaje.png" alt="papelera de reciclaje" width="30px">
            <button class="btn-action" onclick ="addToCart("${producto.id}")">Añadir al carrito</button>
          </div>
      </div>
        `
    });
}
function selectProduct(id){
  console.log();
  //document.querySelector(".btns-selection").style.display = "block";
  let cantidad = prompt("¿Cuántas unidades desea añadir?", "1");
  console.log(id);
  console.log(cantidad);
}

function increaseProduct(){

}

function decreaseProduct(){
  
}

function addToCart(id){
  const articulo = productos.find((producto)=> producto.id === id);
  console.log(articulo);
}

renderProducts();