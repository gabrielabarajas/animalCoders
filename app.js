const elemProducts = document.querySelector("#products-mobile");
const buttonsSelection = document.querySelector(".btns-selection");
const elemCart = document.querySelector("#products-cart");

let quantitySel = 0;
var totalCart = 0;
var cart =[];

function renderProducts(){
    productos.forEach((producto) => {
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
    Swal.fire('Porfavor indicar el número de unidades a ser agregadas.');
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

function updateNum(newValue){
  totalCart = parseInt(totalCart) + parseInt(newValue);
  document.getElementById("total-productos-mobile").innerHTML = totalCart;
  sendMessage(newValue);
}

function addInfo(productId){
  let newValue = document.getElementById(productId).value;
  const productSel = productos.find((producto)=> producto.id === productId);
  
  updateNum(newValue);

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
  cart = JSON.parse(localStorage.getItem("data"));
  if (cart === null){
    elemCart.innerHTML = "";
  } else {
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
        <button class="btn-plusminus" onclick = "decreaseProductCart(${producto.id})">-</button>
        <input id = "${producto.id}" class ="quantity-products" type="number" value= "${producto.units}" min=0>
        <button class="btn-plusminus" onclick = "increaseProductCart(${producto.id})">+</button>
    </div>
    `
  }
)
localStorage.clear();
}
}

function sendMessaDeleteItem(){
  Swal.fire('El producto será eliminado del carrito.');
}

function deleteItem(productId){
  sendMessaDeleteItem();
  cart = cart.filter(producto => producto.id != productId);
  console.log(cart);
}

function decreaseProductCart(productId){
  decreaseProduct(productId);
  cart.forEach((producto) => {
    if (producto.id == productId){
      producto.units = document.getElementById(productId).value;
      if (producto.units == 0){
        deleteItem(productId);
        renderCart();
      }
    }
  });
  console.log(cart);
  }

function increaseProductCart(productId){
  increaseProduct(productId);
  
  
}

function addTotal(){
 // acciones posteriores
}

function payTotal(){
 // acciones posteriores
}

