//cart

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// Open cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};

// Close cart
closeCart.onclick = () => {
  cart.classList.toggle("active");
};

// Click anywhere on the screen to close the cart
document.addEventListener("click", function (event) {
  if (!cart.contains(event.target) && event.target !== cartIcon) {
    cart.classList.remove("active");
  }
});


//cart working JS
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

//making function

function ready() {
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  //quantity changes
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  //Add To Cart
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }

  //buy button work
  document.getElementsByClassName("btn-buy")[0]
  .addEventListener("click", buyButtonClicked);
}
//Buy Button
function buyButtonClicked(){
    alert("your Order is placed");
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();

}

//remove items from cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
}
updatetotal();

//quantity changes
function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}

//Add To Cart

function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  updatetotal();
}

function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if(cartItemsNames[i].innerText == title){
        alert("You have already add this item to cart");
    return;

    }
    
  }

  
let cartBoxContent = `
<img src="${productImg}" alt="" class="cart-img" />
<div class="detail-box">
  <div class="cart-product-title">${title}</div>
  <div class="cart-price">${price}</div>
  <input type="number" value="1" class="cart-quantity" />
</div>
<!--remove cart-->
<i class="bx bx-trash cart-remove"></i>`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox
.getElementsByClassName("cart-remove")[0]
.addEventListener("click", removeCartItem);
cartShopBox
.getElementsByClassName("cart-quantity")[0]
.addEventListener("change", quantityChanged);

}

//update total
function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }

    //if price contain some cents value
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
  
}



const hover1 = document.getElementById('drop');
const stock = document.querySelector('.new-stock');
const anotherarea = document.querySelector('.anotherArea, .anotherAre'); // This variable name is 'anotherarea' but you refer to it as 'another' below.
const stock3 = document.querySelector('.new2'); // I see 'stock3' here, but you refer to it as 'stock2' below. Ensure variable names are consistent.

hover1.addEventListener('mouseover', function() {
    stock.style.display = 'flex';
    stock1.style.display = 'none'; // Hide stock1 if stock is hovered over
});

hover1.addEventListener('mouseup', function() {
    stock.style.display = 'none';
});

document.addEventListener('click', function(event) {
    if (!hover1.contains(event.target) && !stock.contains(event.target)) {
        stock.style.display = 'none';
    }
});

anotherarea.addEventListener('mouseover', function() { // Using 'anotherarea' here because that's how you've named it above.
    stock.style.display = 'none';
    stock3.style.display = 'flex'; // Assuming you meant to use 'stock3' here.
});

const hover = document.getElementById('dropdown');
const stock1 = document.querySelector('.new');
const another = document.querySelector('.anotherArea'); 

hover.addEventListener('mouseover', function() {
    stock1.style.display = 'flex';
    stock.style.display = 'none'; // Hide stock if stock1 is hovered over
});

hover.addEventListener('mouseup', function() {
    stock1.style.display = 'none';
});

document.addEventListener('click', function(event) {
    if (!hover.contains(event.target) && !stock1.contains(event.target)) {
        stock1.style.display = 'none';
    }
});

another.addEventListener('mouseover', function() { // Using 'another' here because that's how you've named it above.
    stock1.style.display = 'none';
    stock3.style.display = 'flex'; // Display stock2 (which is assumed to be a different element than stock3)
});

let navList = document.querySelector(".nav-bar");
function showActive(x) {
  navList.classList.toggle("active");
  x.classList.toggle('change');


document.addEventListener("click", function(event) {
  // Check if the click target is not the navList or its child elements
  if (!x.contains(event.target)) {
    // Click occurred outside of navList, hide it
    navList.classList.remove("active");
    x.classList.remove('change');
  }
});
}






















