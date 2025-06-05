let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;

  const cartList = document.getElementById("cart-items");
  const listItem = document.createElement("li");
  listItem.textContent = `${name} - $${price}`;
  cartList.appendChild(listItem);

  document.getElementById("total-price").textContent = `$${total}`;
}
