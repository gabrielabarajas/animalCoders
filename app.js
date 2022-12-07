const elemProducts = document.querySelector("#products-mobile");
const elemProductsDesk = document.querySelector("#products-desktop");
const buttonsSelection = document.querySelector(".btns-selection");
const elemCart = document.querySelector("#products-cart");

let quantitySel = 0;
var totalCart = 0;
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
          </div>
          <div id = "txt-msg-usuario${producto.id}"></div>
      </div>
        `
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

function isInCart(productId){
  let result = cart.some(productoSel => productoSel.id === productId);
 return result;
}

function sendMessage(newValue){
  if (newValue == 0){
    Swal.fire('Porfavor indicar el numero de unidades a ser agregadas.');
  } 
  if (newValue == 1){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Ha sido agregada 1 unidad al carrito de compra.',
      showConfirmButton: false,
      timer: 1500
    })
  }
  if (newValue > 1){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `Han sido agregadas ${newValue} unidades al carrito de compra.`,
      showConfirmButton: false,
      timer: 1500
    })

  }
}

function updateNum(productId,newValue){
  totalCart = parseInt(totalCart) + parseInt(newValue);
  document.getElementById("total-productos-mobile").innerHTML = totalCart;
  console.log(newValue);
  sendMessage(newValue);
}

function addInfo(productId){
  let newValue = document.getElementById(productId).value;
  const productSel = productos.find((producto)=> producto.id === productId);
  
  updateNum(productId,newValue);

  if (newValue > 0){
      if (isInCart(productId)){
        cart.forEach((element) => {
          if (element.id === productId){
            element.units = parseInt (element.units) + parseInt (newValue);
            console.log(cart);
          }} )
      } else {
      cart.push({
        ...productSel,
        units: newValue,
      })
      localStorage.setItem("data",JSON.stringify(cart));
      console.log(cart);
    }
  }
  }

function renderCart(){
  let cart = JSON.parse(localStorage.getItem("data"));
  console.log(cart);

  cart.forEach((producto) => {
       elemCart.innerHTML += 
    `
    <div class="crd-product-cart">
    <div class="img-product-cart" ><img id="img-product-cart" src="${producto.image}" alt="imagen del producto">
    </div>
    <div class="box-name-price-x">
      <p id="txt-name-cart">${producto.title}</p>
      <p id="txt-price-cart">${producto.price}</p>
      <button class="btn-plusminus">x</button>
    </div>
    <div class="select-quantity">
        <button class="btn-plusminus" onclick = "decreaseProduct(${producto.id})">-</button>
        <input id = "${producto.id}" class ="quantity-products" type="number" value= "${producto.units}" min=0>
        <button class="btn-plusminus" onclick = "increaseProduct(${producto.id})">+</button>
    </div>
    `
  }
)
localStorage.clear();
}

