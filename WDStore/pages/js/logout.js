document.getElementById("profileButton").addEventListener("click", () => {
  const dropdown = document.getElementById("profileDropdown");
  dropdown.classList.toggle("hidden");
});
const session = JSON.parse(localStorage.getItem("session")) || [];
document.getElementById("profilelink").innerText = `Welcome, ${session.username}`;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("logoutLink").addEventListener("click", () => {
    localStorage.removeItem("session");
    alert("Logged out successfully");
    const Pages = ["contact.html", "wishlist.html", "cart.html"];
    const currentPage = window.location.pathname.split("/").pop();
    if (Pages.includes(currentPage)) {
      window.location.href = "login.html";
    } else {
      window.location.href = "pages/login.html";
    }
  });
});
