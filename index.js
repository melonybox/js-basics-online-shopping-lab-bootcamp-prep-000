var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100 ) + 1
  cart.push({itemName: item, itemPrice: price})
  return `${item} has been added to your cart.`
}

function viewCart() {
  if ( cart.length === 1 ) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }
    else if ( cart.length === 2 ) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    }
    else if ( cart.length >= 3 ) {
      var cartListStart = `In your cart, you have ${cart[0].itemName} at ${cart[0].itemPrice}, `
      var cartA = cart
      var cartEnd = cartA.length
      var cartListEnd = `and ${cartA[cartEnd].itemName} at ${cartA[cartEnd].itemPrice}.`
      var cartB = cartA.pop()
      var cartListMiddle = []
      var i = 0
      while (i < cartB.length) {
        cartListMiddle[i].push(`${cartB[i].itemName} at ${cartB[i].itemPrice}, `)
        i++
      }
      return cartListStart + cartListMiddle + cartListEnd
    }
    else if (cart.length === 0 ) {
      return "Your shopping cart is empty."
    }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
