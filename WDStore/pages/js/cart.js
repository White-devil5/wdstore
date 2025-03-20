document.addEventListener("DOMContentLoaded", () => {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const checkoutModal = document.getElementById("checkoutModal");
  const closeModal = document.getElementById("closeModal");
  const checkoutBtn = document.getElementById("checkoutBtn");
  const cancelCheckout = document.getElementById("cancelCheckout");
  const checkoutTotal = document.getElementById("checkoutTotal");

  function renderCartItems() {
    cartItemsContainer.innerHTML = "";
    if (cartItems.length === 0) {
      cartItemsContainer.innerHTML =
        '<p class="text-center">Your cart is empty.</p>';
      cartTotal.textContent = "₹0";
      checkoutTotal.textContent = "₹0";
      checkoutBtn.disabled = true;
      return;
    }
    let total = 0;
    cartItems.forEach((item) => {
      const itemElement = `
                        <div class="flex items-center justify-between mb-4 gap-4">
                            <!-- Item Name (Fixed Min Width & Truncate for Long Names) -->
                            <span class="min-w-[100px] max-w-[200px] flex-1 truncate">${
                              item.name
                            }</span>

                            <!-- Item Price (Fixed Width for Consistency) -->
                            <span class="w-16 text-left">₹${item.price}</span>

                            <!-- Quantity Controls -->
                            <div class="flex items-center gap-2">
                                <button class="bg-[#53002b] text-[#ffe9f4] px-2 py-1 rounded decrement-quantity" data-name="${
                                  item.name
                                }">-</button>
                                <span class="mx-2">${item.quantity}</span>
                                <button class="bg-[#53002b] text-[#ffe9f4] px-2 py-1 rounded increment-quantity" data-name="${
                                  item.name
                                }">+</button>
                            </div>

                            <!-- Total Price (Fixed Width) -->
                            <span class="w-20 text-left ml-4">₹${
                              item.price * item.quantity
                            }</span>

                            <!-- Remove Button -->
                            <button class="bg-[#ffe9f4] text-[#53002b] border-2 border-[#53002b] px-2 py-1 rounded remove-from-cart hover:bg-red-600 hover:text-[#ffe9f4] hover:border-red-600" data-name="${
                              item.name
                            }">Remove</button>
                        </div>

            `;
      cartItemsContainer.innerHTML += itemElement;
      total += item.price * item.quantity;
    });
    cartTotal.textContent = `₹${total}`;
    checkoutTotal.textContent = `₹${total}`;
  }

  renderCartItems();

  cartItemsContainer.addEventListener("click", (event) => {
    const name = event.target.dataset.name;
    if (event.target.classList.contains("remove-from-cart")) {
      cartItems = cartItems.filter((item) => item.name !== name);
    } else if (event.target.classList.contains("increment-quantity")) {
      const item = cartItems.find((item) => item.name === name);
      item.quantity += 1;
    } else if (event.target.classList.contains("decrement-quantity")) {
      const item = cartItems.find((item) => item.name === name);
      if (item.quantity > 1) {
        item.quantity -= 1;
      }
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    renderCartItems();
  });

  // Function to show modal
  function showModal() {
    checkoutModal.classList.remove("hidden");
  }

  // Function to hide modal
  function hideModal() {
    checkoutModal.classList.add("hidden");
  }

  // Open modal when checkout button is clicked
  checkoutBtn.addEventListener("click", showModal);

  // Close modal when clicking on close or cancel buttons
  closeModal.addEventListener("click", hideModal);
  cancelCheckout.addEventListener("click", hideModal);

  // Close modal when clicking outside the modal
  window.addEventListener("click", (event) => {
    if (event.target === checkoutModal) {
      hideModal();
    }
  });

  // Confirm order action
  confirmOrder.addEventListener("click", () => {
    alert("Your order has been placed!");
    localStorage.removeItem("cartItems"); // Clear the cart instantly
    hideModal(); // Close modal
    cartItemsContainer.innerHTML =
      '<p class="text-center">Your cart is empty.</p>'; // Clear cart items
    cartTotal.textContent = "₹0";
    checkoutTotal.textContent = "₹0";
    checkoutBtn.disabled = true;
  });
});
