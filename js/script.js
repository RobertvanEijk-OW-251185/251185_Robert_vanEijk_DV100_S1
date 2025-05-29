// Search Bar Functioning
const searchItemBtn = document.querySelector(".searchItem");
if (searchItemBtn) {
  searchItemBtn.addEventListener("click", function () {
    console.log("clicked");
  });
}

const searchBtn = document.querySelector(".searchItem");
const flightModal = document.getElementById("flightProductSearch");
const closeBtn = document.getElementById("closeSearch");

searchBtn.addEventListener("click", function () {
  flightModal.classList.add("showSearch");
});

closeBtn.addEventListener("click", function () {
  flightModal.classList.remove("showSearch");
});

function search_flights() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("flightProducts");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}


// Tally Counter Buttons

document.querySelectorAll(".tallyCounter").forEach((counter) => {
  const decrementButton = counter.querySelector(".buttonMin");
  const incrementButton = counter.querySelector(".buttonAdd");
  const display = counter.querySelector(".counter-display");

  decrementButton.addEventListener("click", () => {
    display.value = Number(display.value) - 1;
  });

  incrementButton.addEventListener("click", () => {
    display.value = Number(display.value) + 1;
  });
});

// Pop Up Modal

//Cart

document.addEventListener("DOMContentLoaded", function () {
  const openCartBtn = document.getElementById("openCart");
  const closeCartBtn = document.getElementById("closeCart");
  const cartModal = document.getElementById("cartModal");

  if (openCartBtn && closeCartBtn && cartModal) {
    openCartBtn.addEventListener("click", () => {
      cartModal.classList.add("show");
    });

    closeCartBtn.addEventListener("click", () => {
      cartModal.classList.remove("show");
    });
  } else {
    console.error("Cart modal elements not found on this page.");
  }
});

//Form
const open = document.getElementById("open");
const modal = document.getElementById("modal-container");
const close = document.getElementById("close");

open.addEventListener("click", function (event) {
  event.preventDefault();
  modal.classList.add("show");
  console.log(nameInput.value);
  console.log(emailInput.value);
  console.log(subjectInput.value);
  console.log(messageInput.value);
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  modal.classList.remove("show");
});
