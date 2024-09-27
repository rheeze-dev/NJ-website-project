let slideIndex = 0;
showSlides();
getNewsApi();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

let i = 0; // Declare i outside the function to keep its value across function calls

async function getNewsApi() {
  const response = await fetch(
    "https://api.currentsapi.services/v1/latest-news?apiKey=C102zLzeRTk3-qAq7hZxPj4SBRQCvrY-jzUcNNSTJA2xlpEw"
  );

  if (!response.ok) {
    document.querySelector(
      "#news-api"
    ).innerHTML = `<div class="error-message">Please check your internet connection!</div>`;
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  // Display the news article at index i
  document.querySelector(
    "#content-api"
  ).innerHTML = `<h4><b>${data.news[i].title}</b></h4>`;

  document.querySelector(
    "#info-api"
  ).innerHTML = `<h4>${data.news[i].description}</h4>`;

  document.querySelector("#author-api").innerHTML = `<h4>Published: ${new Date(
    data.news[i].published
  ).toLocaleDateString()}.
  <a href="${
    data.news[i].url
  }" target="_blank"> Click here to check this news.</a></h4></h4>`;
  // Increase i after 10 seconds, and loop back if i exceeds the article count
  setTimeout(() => {
    i++;
    if (i >= data.news.length) {
      i = 0; // Reset i to 0 when it reaches the end of the list
    }
    getNewsApi(); // Recursive call to keep updating the news
  }, 10000); // 10 seconds interval
}

document.querySelector(
  "#footer"
).innerHTML = `<span>Copyright ${new Date().getFullYear()}</span>`;

// Scroll to the top when the top button is clicked
document
  .querySelector("aside button:first-child")
  .addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

// Scroll to the bottom when the bottom button is clicked
document
  .querySelector("aside button:last-child")
  .addEventListener("click", function () {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });

const navLinks = {
  home: document.querySelector("#home-page"),
  capital: document.querySelector("#capital-page"),
  cities: document.querySelector("#cities-page"),
  contact: document.querySelector("#contact-page"),
};

// Function to check and update the active class based on the URL
function updateActiveClass() {
  const currentUrl = window.location.href;
  console.log(window.location.pathname);

  // Remove active class from all nav links
  for (const key in navLinks) {
    navLinks[key].classList.remove("active");
  }
  // Check which URL matches and add the active class
  if (window.location.pathname === "/" || currentUrl.includes("index")) {
    navLinks.home.classList.add("active");
  } else if (currentUrl.includes("capital")) {
    navLinks.capital.classList.add("active");
  } else if (currentUrl.includes("cities")) {
    navLinks.cities.classList.add("active");
  } else if (currentUrl.includes("contact")) {
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
