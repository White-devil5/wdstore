let wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
const wishlistItems = document.getElementById("wishlistItems");

const renderWishlist = () => {
  wishlistItems.innerHTML = ""; // Clear wishlist items
  if (wishlist.length === 0) {
    wishlistItems.innerHTML =
      '<p class="text-center">Your wishlist is empty.</p>';
  } else {
    wishlist.forEach((item) => {
      const wishlistItem = `
                <div class="flex items-center justify-between mb-4 gap-4">
                    <!-- Item Name (Flexible & Truncated if Too Long) -->
                    <span class="flex-1 truncate">${item.name}</span>

                    <!-- Buttons Container (Ensures Proper Spacing) -->
                    <div class="flex gap-3">
                        <button class="bg-[#ff5cb1] text-[#53002b] px-3 py-1 rounded add-to-cart" 
                            data-name="${item.name}" data-price="${item.price}">
                            Add to Cart
                        </button>
                        <button class="bg-[#53002b] text-[#ffe9f4] px-3 py-1 rounded remove-from-wishlist" 
                            data-name="${item.name}">
                            Remove
                        </button>
                    </div>
                </div>
                

            `;
      wishlistItems.innerHTML += wishlistItem;
    });
  }
  localStorage.setItem("wishlistItems", JSON.stringify(wishlist));
};

document.addEventListener("DOMContentLoaded", () => {
  renderWishlist();

  wishlistItems.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-from-wishlist")) {
      const name = event.target.dataset.name;
      wishlist = wishlist.filter((item) => item.name !== name);
      renderWishlist();
    }

    if (event.target.classList.contains("add-to-cart")) {
      const name = event.target.dataset.name;
      const price = parseInt(event.target.dataset.price);
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const existingItem = cartItems.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartItems.push({ name, price, quantity: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      alert(`${name} added to cart`);
    }
  });
});
