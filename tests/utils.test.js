const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function () {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================
it("should return the area", function () {
  const testArea = utils.area(4, 5)
  expect(testArea).to.be.a("number")
  expect(testArea).to.equal(20)
})

it("should return the perimeter", function () {
  const testPerimeter = utils.perimeter(4, 5)
  expect(testPerimeter).to.be.a("number")
  expect(testPerimeter).to.equal(18)
})

it("should return the area of the circle", function () {
  const testCircleArea = utils.circleArea(4)
  expect(testCircleArea).to.be.a("number")
  // closeTo uses (actual, expected)
  expect(testCircleArea).to.be.closeTo(50.265, 0.001)
})
// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function () {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function () {
  const cart = utils.getShoppingCart();
  expect(cart).to.be.an('array');
})

it("Should add a new item to the shopping cart", function () {
  const item = utils.createItem('apple', 0.99);
  utils.addItemToCart(item);
  const shoppingCart = utils.getShoppingCart();
  expect(shoppingCart).to.include(item);
})

it("Should return the number of items in the cart", function () {
  const numItems = utils.getNumItemsInCart();
  expect(numItems).to.be.a('number');
})

it("Should remove items from cart", function () {
  const removedItem = utils.createItem('apple', 0.99);
  utils.addItemToCart(removedItem);
  utils.removeItemFromCart(removedItem);
  const updatedCart = utils.getShoppingCart();
  expect(updatedCart).to.not.include(removedItem);
  expect(removedItem).to.have.property("quantity", 1);
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart", function () {
  const newItem = utils.createItem("apple", 0.99)
  utils.addItemToCart(newItem);
  utils.addItemToCart(newItem);
  const numItems = utils.getNumItemsInCart();
  expect(numItems).to.equal(2);
})

it("Should validate that an empty cart has 0 items", function () {
  const cartItems = utils.getNumItemsInCart();
  expect(cartItems).to.equal(0);
})

it("Should return the total cost of all items in the cart", function () {
  const item1 = utils.createItem("banana", 0.99);
  const item2 = utils.createItem("avocado", 1.99);
  item1.quantity = 2;
  item2.quantity = 3;
  utils.addItemToCart(item1);
  utils.addItemToCart(item2);
  const totalCost = utils.getTotalCost();
  expect(totalCost).to.equal(7.95)
})
