const elemProducts = document.querySelector("#products-mobile");
const elemProductsDesk = document.querySelector("#products-desktop");

const buttonsSelection = document.querySelector(".btns-selection");
let quantitySel = 0;
let cart = [];

function renderProducts(){
    productos.forEach((producto) => {
      // ------------ Renderiza productos MOBILE ------------------  
      elemProducts.innerHTML += `
        <div class="crd-product-mobile">
          <img class="img-product-mobile" src="${producto.image}" alt="${producto.title}">
          <p class="txt-name-mobile">${producto.title}</p>
          <p class="txt-price-mobile">${producto.price}<span> €</span></p>
          <div class="btns-selection">
            <div class="ctn-selection">
              <button class="btn-plusminus" onclick = "decreaseProduct(${producto.id})">-</button>
              <input id = "${producto.id}" class ="quantity-products" type="number" value= 1 min=1>
              <button class="btn-plusminus" onclick = "increaseProduct(${producto.id})">+</button>
            </div>
            <button class="btn-action" onclick ="addInfo(${producto.id})">Añadir al carrito</button>
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

function increaseProduct(indexProduct){
  document.getElementById(indexProduct).value = parseInt (document.getElementById(indexProduct).value) + 1 ;
}

function decreaseProduct(indexProduct){
    document.getElementById(indexProduct).value = parseInt (document.getElementById(indexProduct).value) - 1 ;
    if (document.getElementById(indexProduct).value <= 0){
      document.getElementById(indexProduct).value = 1
    }
}

function addInfo(indexProduct){
  let index = indexProduct;
  let value = document.getElementById(indexProduct).value;
  //Guardar en array
  cart.push(index,value)
  console.log(cart);
  //Guardar en cookie
  document.cookie = "indexProduct=" + encodeURIComponent(index);
  document.cookie = "valueProduct=" + encodeURIComponent(value);
  console.log(document.cookie);
  //Guardar en localstoragetwopages
  localStorage.setItem("data",cart);
  }

function isInCart(indexProduct){
  let result = cart.some(productoSel => productoSel.id === indexProduct);
 return result
}

function addToCart(cart){
  //window.open("./cart.html");
  //console.log(document.cookie)
}

renderProducts();
