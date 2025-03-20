document.addEventListener("DOMContentLoaded", () => {
  const session = JSON.parse(localStorage.getItem("session"));

  if (!session) {
    const restrictedPages = ["contact.html", "wishlist.html", "cart.html"];
    const currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "index.html") {
      window.location.href = "pages/login.html";
    } else if (restrictedPages.includes(currentPage)) {
      window.location.href = "login.html";
    }
  } else {
    const authPages = ["login.html", "register.html"];
    const currentPage = window.location.pathname.split("/").pop();

    if (authPages.includes(currentPage)) {
      window.location.href = "../index.html";
    }
  }
});
