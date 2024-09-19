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
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=212ca14d0aad4987b0759b2f4177c1e3",
    {
      method: "GET",
      headers: {
        "X-Api-Key": "212ca14d0aad4987b0759b2f4177c1e3",
      },
    }
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
  ).innerHTML = `<h4>${data.articles[i].description}</h4>`;

  document.querySelector("#info-api").innerHTML = `<h4>Published by ${
    data.articles[i].source.name
  } on ${new Date(data.articles[i].publishedAt).toLocaleDateString()}.`;
  document.querySelector(
    "#author-api"
  ).innerHTML = `<h4>Authors: ${data.articles[i].author}.
  <a href="${data.articles[i].url}" target="_blank"> Click here to check news.</a></h4></h4>`;
  // Increase i after 10 seconds, and loop back if i exceeds the article count
  setTimeout(() => {
    i++;
    if (i >= data.articles.length) {
      i = 0; // Reset i to 0 when it reaches the end of the list
    }
    getNewsApi(); // Recursive call to keep updating the news
  }, 100000); // 10 seconds interval
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
