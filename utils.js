// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  // should return the area
  if (w < 0 || h < 0) {
    return null;
  }
  return w * h;
}

const perimeter = (w, h) => {
  // should return the perimeter
  if (w < 0 || h < 0) {
    return null;
  }
  return 2 * (w + h);
}

const circleArea = r => {
  // should return the area of the circle
  if (r < 0) {
    return null
  }
  return Math.PI * r * r;
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price, quantity = 1) => {
  return { name, price, quantity }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart;
}

const addItemToCart = (item) => {
  const index = shoppingCart.findIndex(cartItem => {
    return cartItem.name === item.name && cartItem.price === item.price
  })
  // check if item is in array, if yes, update quantity
  if (index !== -1) {
    shoppingCart[index].quantity += item.quantity
  } else {
    // should add item to shopping cart if not there
    shoppingCart.push(item)
  }
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  let total = 0
  shoppingCart.forEach(item => {
    total += item.quantity
  })
  return total
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  const index = shoppingCart.findIndex(cartItem => {
    return cartItem.name === item.name && cartItem.price === item.price
  })
  // if the item is in the array
  if (index !== -1) {
    // and qty > 1, decrease the quantity
    if (shoppingCart[index].quantity > 1) {
      shoppingCart[index].quantity--
    } else {
      // if qty = 1, remove using splice!!
      shoppingCart.splice(index, 1)
    }
  }
}

const getTotalCost = () => {
  let totalCost = 0;
  for (let item of shoppingCart) {
    totalCost += item.price * item.quantity;
  }
  return Number(totalCost.toFixed(2));
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart, getTotalCost
}
