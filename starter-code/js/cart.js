/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  const tableBody = document.getElementsByTagName('tbody');
  // TODO*: Iterate over the items in the cart
  for(let i=0; i<cart.items.length; i++) {
    console.log('cart.items[i]: ', cart.items[i]);
    let itemTr = document.createElement('tr');
    tableBody.appendChild(itemTr);

    let deleteTd = document.createElement('td');
    let deleteLink = document.createElement('a');
    deleteLink.textContent = 'Delete'
    deleteTd.appendChild(deleteLink);
    itemTr.appendChild(deleteTd);

    let quantityTd = doucment.createElement('td');
    quantityTd.textContent = cart.items[i].quantity;
    itemTr.appendChild(quantityTd);

    let productTd = document.createElement('td');
    productTd.textContent = cart.items[i].product;
    itemTr.appendChild(productTd);
  }
  // TODO*: Create a TR
  // TODO*: Create a TD for the delete link, quantity,  and the item
  // TODO*: Add the TR to the TBODY and each of the TD's to the TR
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();