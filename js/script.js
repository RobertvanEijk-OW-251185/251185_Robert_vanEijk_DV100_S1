// Search Bar Functioning

const searchInput = document.getElementById("searchbar");
const searchBtn = document.querySelector(".searchItem");
const flightModal = document.getElementById("flightProductSearch");
const closeBtn = document.getElementById("closeSearch");
const searchItemBtn = document.querySelector(".searchItem");

// Check if the searchItemBtn exists before adding the event listener
if (searchItemBtn) {
  searchItemBtn.addEventListener("click", function () {
    console.log("clicked");
  });
}

// Show Search field, mag glass button
searchBtn.addEventListener("click", function () {
  flightModal.classList.add("showSearch");
});

// show search field, type input
searchInput.addEventListener("input", function () {
  flightModal.classList.add("showSearch");
  search_flights();
});

// Close Search field, button
closeBtn.addEventListener("click", function () {
  flightModal.classList.remove("showSearch");
});

//Filter Flights Search
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

// Tally Counter Buttons/Cart Functionality

document.querySelectorAll(".tallyCounter").forEach((counter) => {
  const decrementButton = counter.querySelector(".buttonMin");
  const incrementButton = counter.querySelector(".buttonAdd");
  const tallyDisplay = counter.querySelector(".counter-display");

  decrementButton.addEventListener("click", () => {
    let current = Number(tallyDisplay.value);
    tallyDisplay.value = current > 1 ? current - 1 : 0;
  });

  incrementButton.addEventListener("click", () => {
    tallyDisplay.value = Number(tallyDisplay.value) + 1;
  });

  const bookNowBtn = counter
    .closest(".flights-list-info")
    .querySelector(".bookFlight");

  const titleText = counter
    .closest(".flights-list-info")
    .querySelector("h2")
    .textContent.trim();

  const cartItems = document.querySelectorAll(".cartItems .flightProductsCart");

  let matchingCartDisplay = null;

  cartItems.forEach((item) => {
    const cartTitle = item.querySelector(".title").textContent.trim();
    if (cartTitle === titleText) {
      matchingCartDisplay = item.querySelector(".cart-item-counter-display");
    }
  });

  if (matchingCartDisplay) {
    bookNowBtn.addEventListener("click", () => {
      const selectedQty = Number(tallyDisplay.value);
      const currentCartQty = Number(matchingCartDisplay.value);

      if (selectedQty > 0) {
        matchingCartDisplay.value = currentCartQty + selectedQty;
        tallyDisplay.value = 0;
      }
    });
  }
});

// Pop Up Modal

//Cart
document.addEventListener("DOMContentLoaded", function () {
  const checkoutCartBtn = document.getElementById("checkoutCart");
  const openCartBtn = document.getElementById("openCart");
  const viewCartBtn = document.getElementById("viewCart");
  const closeCartBtn = document.getElementById("closeCart");
  const cartModal = document.getElementById("cartModal");

  if (openCartBtn && closeCartBtn && cartModal) {
    openCartBtn.addEventListener("click", () => {
      cartModal.classList.add("show");
    });

    closeCartBtn.addEventListener("click", () => {
      cartModal.classList.remove("show");
    });

    checkoutCartBtn.addEventListener("click", () => {
      cartModal.classList.remove("show");
    });

    document
      .getElementById("checkoutCart")
      .addEventListener("click", function () {
        window.location.href = "../index.html";
      });
  } else {
    console.error("Cart modal elements not found on this page.");
  }

  if (viewCartBtn) {
    viewCartBtn.addEventListener("click", () => {
      cartModal.classList.add("show");
    });
  }
});

//Add to cart functionality

document.addEventListener("DOMContentLoaded", () => {
  const destinations = [
    "mars",
    "neptune",
    "jupiter",
    "saturn",
    "uranus",
    "moon",
  ];

  destinations.forEach((planet) => {
    const bookBtn = document.getElementById(`${planet}BookFlight`);
    const cartItem = document.getElementById(`flight${capitalize(planet)}`);
    const removeBtn = document.getElementById(
      `removeFlight${capitalize(planet)}`
    );

    if (bookBtn && cartItem) {
      bookBtn.addEventListener("click", (e) => {
        e.preventDefault();
        cartItem.classList.add(`showFlight${capitalize(planet)}`);
        logCartQuantities();
        updateCartTotalDisplay();
      });
    }

    if (removeBtn && cartItem) {
      removeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        cartItem.classList.remove(`showFlight${capitalize(planet)}`);

        function getProdNumber(planet) {
          const map = {
            mars: 1,
            neptune: 2,
            jupiter: 3,
            saturn: 4,
            uranus: 5,
            moon: 6,
          };
          return map[planet];
        }
        const prodInput = document.getElementById(
          `prod${getProdNumber(planet)}`
        );
        if (prodInput) prodInput.value = 0;

        logCartQuantities();
        updateCartTotalDisplay();
      });
    }
  });

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function updateCartTotalDisplay() {
    const total =
      Number(document.getElementById("prod1")?.value || 0) +
      Number(document.getElementById("prod2")?.value || 0) +
      Number(document.getElementById("prod3")?.value || 0) +
      Number(document.getElementById("prod4")?.value || 0) +
      Number(document.getElementById("prod5")?.value || 0) +
      Number(document.getElementById("prod6")?.value || 0);

    const cartTotalDisplay = document.getElementById("cartTotalDisplay");
    if (cartTotalDisplay) {
      cartTotalDisplay.value = total;
    }
  }

  function logCartQuantities() {
    const prod1Val = Number(document.getElementById("prod1")?.value || 0);
    const prod2Val = Number(document.getElementById("prod2")?.value || 0);
    const prod3Val = Number(document.getElementById("prod3")?.value || 0);
    const prod4Val = Number(document.getElementById("prod4")?.value || 0);
    const prod5Val = Number(document.getElementById("prod5")?.value || 0);
    const prod6Val = Number(document.getElementById("prod6")?.value || 0);

    console.log("Cart Quantities:");
    console.log(`prod1: ${prod1Val}`);
    console.log(`prod2: ${prod2Val}`);
    console.log(`prod3: ${prod3Val}`);
    console.log(`prod4: ${prod4Val}`);
    console.log(`prod5: ${prod5Val}`);
    console.log(`prod6: ${prod6Val}`);
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
