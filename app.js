const elemProducts = document.querySelector("#products-mobile");
const elemProductsDesk = document.querySelector("#products-desktop");

const buttonsSelection = document.querySelector(".btns-selection");
let quantitySel = 0;
const cart =[];

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
              <input id = "${producto.id}" class ="quantity-products" type="number" value= 0 min=0>
              <button class="btn-plusminus" onclick = "increaseProduct(${producto.id})">+</button>
            </div>
            <button class="btn-action" onclick ="addInfo(${producto.id})">Añadir al carrito</button>
            <p id = "txt-msg-usuario">mensaje</p>
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
              <p id = "txt-msg-usuario">mensaje</p>
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
      document.getElementById(indexProduct).value = 0
    }
}

function addInfo(productId){
  let value = document.getElementById(productId).value;
  //Guardar en localstorage
  const productSel = productos.find((producto)=> producto.id === productId );
  cart.push({
    ...productSel,
    unidades: value,
  })
  localStorage.setItem("data",JSON.stringify(cart));
  console.log(cart);
}

function isInCart(indexProduct){
  let result = cart.some(productoSel => productoSel.id === indexProduct);
 return result
}

function addToCart(){
  let carrito = localStorage.getItem("data");
  console.log(carrito);
}

function renderCart(cart){
}

renderProducts();
