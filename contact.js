const navLinks = {
  home: document.querySelector("#home-page"),
  capital: document.querySelector("#capital-page"),
  cities: document.querySelector("#cities-page"),
  contact: document.querySelector("#contact-page"),
};

// Function to check and update the active class based on the URL
function updateActiveClass() {
  const currentUrl = window.location.href;

  // Remove active class from all nav links
  for (const key in navLinks) {
    navLinks[key].classList.remove("active");
  }
  // Check which URL matches and add the active class
  if (currentUrl.includes("index.html")) {
    navLinks.home.classList.add("active");
  } else if (currentUrl.includes("capital.html")) {
    navLinks.capital.classList.add("active");
  } else if (currentUrl.includes("cities.html")) {
    navLinks.cities.classList.add("active");
  } else if (currentUrl.includes("contact.html")) {
    navLinks.contact.classList.add("active");
  }
}

// Call on initial load
updateActiveClass();

// Add click event listeners to each nav link
Object.values(navLinks).forEach((link) => {
  link.addEventListener("click", () => {
    setTimeout(updateActiveClass, 0); // Use timeout to ensure it's called after navigation
  });
});

// Event listener for URL changes (for back/forward navigation)
window.addEventListener("popstate", updateActiveClass);

document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirmEmail").value;

    console.log(email);
    console.log(confirmEmail);
    if (email !== confirmEmail) {
      alert("Email addresses do not match!");
      event.preventDefault(); // Prevent form submission
      return;
    }
    alert("Form submitted! Thank you for your input.");
    // Optionally, you can clear the form after submission
    this.reset();
  });
