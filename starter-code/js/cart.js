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

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const tableBodyElArray = document.getElementsByTagName('tbody');
  // set <tbody> innerHTML to ''
  tableBodyElArray[0].innerHTML = '';
  // grab <tbody>'s children (<tr>s) and set their innerHTML to ''
  tableBodyElArray[0].children.innerHTML = '';
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  const tableBodyElArray = document.getElementsByTagName('tbody');

  // DONE: Iterate over the items in the cart
  // DONE: Create a TR
  // DONE: Create a TD for the delete link, quantity,  and the item
  // DONE: Add the TR to the TBODY and each of the TD's to the TR
  for(let i=0; i<cart.items.length; i++) {
    let itemTr = document.createElement('tr');
    tableBodyElArray[0].appendChild(itemTr);

    let deleteTd = document.createElement('td');
    let deleteLink = document.createElement('button');
    deleteLink.textContent = 'Delete';
    deleteLink.addEventListener('click', removeItemFromCart);
    deleteTd.appendChild(deleteLink);
    itemTr.appendChild(deleteTd);

    let quantityTd = document.createElement('td');
    quantityTd.textContent = cart.items[i].quantity;
    itemTr.appendChild(quantityTd);

    let productTd = document.createElement('td');
    productTd.textContent = cart.items[i].product;
    itemTr.appendChild(productTd);
  }
}

function removeItemFromCart(event) {
  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
 
  // grab the entire <tr> of the item that was clicked
  let itemRowToRemove = event.target.parentElement.parentElement;
  cart.removeItem(itemRowToRemove);
   // DONE: Save the cart back to local storage
  cart.saveToLocalStorage();
  // DONE: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
