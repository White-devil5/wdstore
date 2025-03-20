const products = [
  // Poha
  {
    name: "High Fibre Poha",
    image: "img/products/poha/high_fibre_poha.webp",
    category: "other",
    price: 52,
  },
  {
    name: "Poha",
    image: "img/products/poha/poha.webp",
    category: "other",
    price: 26,
  },
  // Paste
  {
    name: "Ginger Garlic Paste",
    image: "img/products/ginger_garlic_paste.webp",
    category: "other",
    price: 65,
  },
  // Saffron
  {
    name: "Golden Saffron",
    image: "img/products/saffron/golden_saffron.webp",
    category: "other",
    price: 317,
  },
  // Dals
  {
    name: "Chana Dal",
    image: "img/products/dal/chana_dal.webp",
    category: "dal",
    price: 100,
  },
  {
    name: "Green Moong",
    image: "img/products/dal/green_moong.webp",
    category: "dal",
    price: 110,
  },
  {
    name: "Kali Masoor",
    image: "img/products/dal/kali_masoor.webp",
    category: "dal",
    price: 90,
  },
  {
    name: "Masoor Dal",
    image: "img/products/dal/masoor_dal.webp",
    category: "dal",
    price: 90,
  },
  {
    name: "Masoor Whole",
    image: "img/products/dal/masoor_whole.webp",
    category: "dal",
    price: 95,
  },
  {
    name: "Moong Dal",
    image: "img/products/dal/moong_dal.webp",
    category: "dal",
    price: 110,
  },
  {
    name: "Toor Dal",
    image: "img/products/dal/toor_dal.webp",
    category: "dal",
    price: 100,
  },
  {
    name: "Urad Dal",
    image: "img/products/dal/urad_dal.webp",
    category: "dal",
    price: 120,
  },
  {
    name: "Urad Kali",
    image: "img/products/dal/urad_kali.webp",
    category: "dal",
    price: 115,
  },
  {
    name: "Urad Whole",
    image: "img/products/dal/urad_whole.webp",
    category: "dal",
    price: 115,
  },
  // Flours
  {
    name: "Besan",
    image: "img/products/flour/besan.webp",
    category: "flour",
    price: 60,
  },
  {
    name: "Ragi Atta",
    image: "img/products/flour/ragi_atta.webp",
    category: "flour",
    price: 55,
  },
  // Masalas
  {
    name: "Chaat Masala",
    image: "img/products/masala/chaat_masala.webp",
    category: "masala",
    price: 70,
  },
  {
    name: "Chicken Masala",
    image: "img/products/masala/chicken_masala.webp",
    category: "masala",
    price: 75,
  },
  {
    name: "Dal Tadka Masala",
    image: "img/products/masala/dal_tadka_masala.webp",
    category: "masala",
    price: 70,
  },
  {
    name: "Garam Masala",
    image: "img/products/masala/garam_masala.webp",
    category: "masala",
    price: 80,
  },
  {
    name: "Kitchen King Masala",
    image: "img/products/masala/kitchen_king_masala.webp",
    category: "masala",
    price: 85,
  },
  {
    name: "Meat Masala",
    image: "img/products/masala/meat_masala.webp",
    category: "masala",
    price: 75,
  },
  {
    name: "Paneer Masala",
    image: "img/products/masala/paneer_masala.webp",
    category: "masala",
    price: 70,
  },
  {
    name: "Pav Bhaji Masala",
    image: "img/products/masala/pav_bhaji_masala.webp",
    category: "masala",
    price: 65,
  },
  {
    name: "Punjabi Chhole Masala",
    image: "img/products/masala/punjabi_chhole_masala.webp",
    category: "masala",
    price: 75,
  },
  {
    name: "Sambar Masala",
    image: "img/products/masala/sambar_masala.webp",
    category: "masala",
    price: 70,
  },
  // Oils
  {
    name: "Cold Pressed Groundnut Oil",
    image: "img/products/oil/cold_pressed_groundnut_oil.webp",
    category: "oil",
    price: 180,
  },
  {
    name: "Cold Pressed Mustard Oil",
    image: "img/products/oil/cold_pressed_mustard_oil.webp",
    category: "oil",
    price: 170,
  },
  {
    name: "Cold Pressed Sesame Oil",
    image: "img/products/oil/cold_pressed_sesame_oil.webp",
    category: "oil",
    price: 190,
  },
  {
    name: "Cold Pressed Sunflower Oil",
    image: "img/products/oil/cold_pressed_sunflower_oil.webp",
    category: "oil",
    price: 160,
  },
  {
    name: "Groundnut Oil Organic",
    image: "img/products/oil/groundnut_oil_organic.webp",
    category: "oil",
    price: 200,
  },
  {
    name: "Mustard Oil Organic",
    image: "img/products/oil/mustard_oil_organic.webp",
    category: "oil",
    price: 180,
  },
  {
    name: "Virgin Coconut Oil Cold Pressed",
    image: "img/products/oil/virgin_coconut_oil_cold_pressed.webp",
    category: "oil",
    price: 220,
  },
  {
    name: "Virgin Coconut Oil Organic",
    image: "img/products/oil/virgin_coconut_oil_organic.webp",
    category: "oil",
    price: 230,
  },
  // Salt
  {
    name: "Rock Salt",
    image: "img/products/salt/rock_salt.webp",
    category: "salt",
    price: 30,
  },
  {
    name: "Tata Salt Himalayan",
    image: "img/products/salt/tata_salt_himalayan.webp",
    category: "salt",
    price: 35,
  },
  {
    name: "Tata Salt Iron Health",
    image: "img/products/salt/tata_salt_iron_health.webp",
    category: "salt",
    price: 25,
  },
  {
    name: "Tata Salt",
    image: "img/products/salt/tata_salt.webp",
    category: "salt",
    price: 20,
  },
  // Spices
  {
    name: "Chilli Powder",
    image: "img/products/spice/chilli_powder.webp",
    category: "spice",
    price: 90,
  },
  {
    name: "Coriander Powder",
    image: "img/products/spice/coriander_powder.webp",
    category: "spice",
    price: 80,
  },
  {
    name: "Turmeric Powder",
    image: "img/products/spice/turmeric_powder.webp",
    category: "spice",
    price: 70,
  },
  //whole spice
  {
    name: "Black Pepper",
    image: "img/products/whole_spice/black_pepper.webp",
    category: "whole_spice",
    price: 155,
  },
  {
    name: "Cardamom Seed",
    image: "img/products/whole_spice/cardamom_seed.webp",
    category: "whole_spice",
    price: 290,
  },
  {
    name: "Coriander Seed",
    image: "img/products/whole_spice/coriander_seed.webp",
    category: "whole_spice",
    price: 65,
  },
  {
    name: "Cumin Seed",
    image: "img/products/whole_spice/cumin_seed.webp",
    category: "whole_spice",
    price: 85,
  },
  {
    name: "Fennel Seed",
    image: "img/products/whole_spice/fennel_seed.webp",
    category: "whole_spice",
    price: 80,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".category-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active styles from all buttons
      buttons.forEach((btn) =>
        btn.classList.remove("bg-[#53002b]", "text-[#ffe9f4]")
      );
      buttons.forEach((btn) =>
        btn.classList.add("bg-[#ffdcee]", "text-[#53002b]")
      );

      // Add active styles to the clicked button
      this.classList.add("bg-[#53002b]", "text-[#ffe9f4]");
      this.classList.remove("bg-[#ffdcee]", "text-[#53002b]");
    });
  });
});

const productGrid = document.getElementById("productGrid");
const searchBar = document.getElementById("searchBar");
const categories = document.getElementById("categories");

const renderProducts = (filteredProducts) => {
  productGrid.innerHTML = ""; // Clear the grid
  filteredProducts.forEach((product) => {
    const productCard = `
            <div class="bg-[#ffdcee] p-4 rounded shadow hover:shadow-lg">
                <img src="${product.image}" alt="${product.name}" class="rounded mb-4 w-full h-40 object-contain">
                <h3 class="text-lg font-bold text-[#53002b]">${product.name}</h3>
                <p class="text-sm text-[#53002b]">₹${product.price}</p>
                <button class="bg-[#ff5cb1] text-[#53002b] px-4 py-2 rounded mt-2 add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
                <button class="bg-[#53002b] text-[#ffe9f4] px-4 py-2 rounded mt-2 add-to-wishlist" data-name="${product.name}" data-price="${product.price}">Add to Wishlist</button>
            </div>
        `;
    productGrid.innerHTML += productCard;
  });
};

searchBar.addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  renderProducts(filteredProducts);
});

categories.addEventListener("click", (event) => {
  if (event.target.classList.contains("category-btn")) {
    const category = event.target.dataset.category;
    const filteredProducts =
      category === "all"
        ? products
        : products.filter((product) => product.category === category);
    renderProducts(filteredProducts);
  }
});

productGrid.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    const productName = event.target.getAttribute("data-name");
    const product = products.find((p) => p.name === productName);
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = cartItems.find((item) => item.name === productName);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert(`${product.name} added to cart`);
  }

  if (event.target.classList.contains("add-to-wishlist")) {
    const productName = event.target.getAttribute("data-name");
    const product = products.find((p) => p.name === productName);
    let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const existingItem = wishlistItems.find(
      (item) => item.name === productName
    );
    if (!existingItem) {
      wishlistItems.push(product);
      localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
      alert(`${product.name} added to wishlist`);
    } else {
      alert(`${product.name} is already in your wishlist.`);
    }
  }
});

// Initial render of all products
renderProducts(products);
