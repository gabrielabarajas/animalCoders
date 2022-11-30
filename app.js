const elemProducts = document.querySelector("#products-mobile");
const elemProductsDesk = document.querySelector("#products-desktop");

const buttonsSelection = document.querySelector(".btns-selection");
let quantitySel = 0;
let cart = [];

function renderProducts(){
    productos.forEach((producto) => {
      // Renderiza productos MOBILE  
      elemProducts.innerHTML += `
        <div class="crd-product-mobile">
          <img class="img-product-mobile" src="${producto.image}" alt="${producto.title}">
          <p class="txt-name-mobile">${producto.title}</p>
          <p class="txt-price-mobile">${producto.price}<span> €</span></p>
          <div class="btns-selection">
            <div class="ctn-selection">
              <button class="btn-plusminus">-</button>
              <input class ="quantity-products" type="number" value= 1 size="1px">
              <button class="btn-plusminus">+</button>
            </div>
            <img class="btn-trash"src="./assets/imgs/papelera-de-reciclaje.png" alt="papelera de reciclaje">
            <button class="btn-action" onclick ="addToCart("${producto.id}")">Añadir al carrito</button>
          </div>
      </div>
        `
        // Renderiza productos DESKTOP 
      elemProductsDesk.innerHTML += `
      <div class="crd-product-desktop">
            <img id="img-product" src="${producto.image}" alt="${producto.title}">
            <p id="txt-product-name">${producto.title}</p>
          <p id="txt-price-mobile">${producto.price}<span> euros</span></p>
          <p id="txt-price"></p>
            <div id="btns-add">
              <button class="btn-plusminus">-</button>
              <input type="text">
              <button class="btn-plusminus">+</button>
              <button class="btn-plusminus">x</button>
              <button class="btn-action">Añadir al carrito</button>
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

/*function isInCart(indiceElemento){
  let result = carritoCompra.some(pizzaSel => pizzaSel.idPizza === indiceElemento);
 return result
}

function sumaPizza(indiceElemento){
  if (isInCart(indiceElemento)){
    cambiaUnidades("mas",indiceElemento);
  return;
  }
  const pizzaSel = arrayPizzas.find((pizza)=> pizza.idPizza === indiceElemento );
  carritoCompra.push({
    ...pizzaSel,
    unidades: 1
  })
  renderizaCarritoCompra();
}

function renderizaCarritoCompra(){
  posicionCarrito.innerHTML = "";
  carritoCompra.forEach((pizzaSel) => {
    posicionCarrito.innerHTML +=
    `
    <div class = "item-selec-info" id ="${pizzaSel.idPizza}">
      <div class = "img-precio-nombre">
        <img src="${pizzaSel.imgPizza}" class = "item-img-pizza" alt="Pizza seleccionada">
        <p class = "item-selec-info-precio"><span>$</span>${pizzaSel.precioPizza}</p>
        <p class = "item-selec-info-nombre">${pizzaSel.nomPizza}</p>
      </div>
      <div class = "item-selec-cantidad">
        <button class ="buttn-item-selec-suma" onclick = "cambiaUnidades('mas',${pizzaSel.idPizza})">+</button>
        <p class ="item-selec-info-cantidad">${pizzaSel.unidades}</p>
        <button class ="buttn-item-selec-resta" onclick = "cambiaUnidades('menos',${pizzaSel.idPizza})">-</button>
      </div>
    </div> `
  })
  renderizaUnidades(carritoCompra); 
  despliegaTotal();
}

function renderizaUnidades(carritoCompra){
  let items = carritoCompra.length;
  let cuentaItems = 0;
  if (items > 0){
    carritoCompra.forEach((item) => {
      cuentaItems = cuentaItems + item.unidades;
    })
    document.querySelector(".suma-items").innerHTML = cuentaItems;
  }
}

function removeItemFromCart(id){
  carritoCompra = carritoCompra.filter((pizzaSel) => pizzaSel.idPizza !== id);
  renderizaCarritoCompra();
}

function cambiaUnidades(accion,id){
  let idCambio = id;

  carritoCompra = carritoCompra.map((pizzaSel) =>{
  let unidadesPrevias = pizzaSel.unidades;

  if (pizzaSel.idPizza === idCambio){
    if (accion ==="menos" && unidadesPrevias > 0) {
      unidadesPrevias --;
      if (unidadesPrevias === 0){
        const pizzaRemove = document.getElementById(idCambio);
        console.log(pizzaRemove);
        pizzaRemove.remove();
        removeItemFromCart(idCambio);
        console.log(carritoCompra);
      }
    } else if (accion === "mas"){
      unidadesPrevias ++;
    }
  }
  return{
    ...pizzaSel,
    unidades: unidadesPrevias,
  };
  });
  // renderizaCarritoCompra()
  renderizaUnidades(carritoCompra);
}

function sumaItemTotal(carrito){
  let suma = 0;

  carrito.forEach((pizzaSel)=>{
    suma = suma + (pizzaSel.precioPizza * pizzaSel.unidades) 
    })
  return suma;
}

function calculaTax(subtotal){
  return (subtotal * 0.27);
}

function calculaTotal(subtotal, tax, delivery){
  let total = Number(subtotal) + Number(tax) + Number(delivery);
  return total;
}

function despliegaTotal(){
  let itemTotal = sumaItemTotal(carritoCompra);
  itemTotal = itemTotal.toFixed(2);
  let delCharge= 2.50;
  let tax = calculaTax(itemTotal);
  tax = tax.toFixed(2);
  let total =  calculaTotal(itemTotal, tax, delCharge);
  //total = total.toFixed(2);

  document.querySelector(".resComItemTotalEuros").innerHTML = itemTotal;
  document.querySelector(".resComDeliveryChargeEuros").innerHTML = delCharge;
  document.querySelector(".resComTaxEuros").innerHTML = tax;
  document.querySelector(".resComTotalEuros").innerHTML = total
}

function main(){
  //document.querySelector(".paginaPrincipal").style.display = "block";
  //document.querySelector(".paginaCarrito").style.display = "block";
  renderizaPizzas()
}*/

