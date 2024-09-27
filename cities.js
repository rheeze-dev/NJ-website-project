let slideIndex = 0;
showSlides();
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

const header = document.querySelector("#header-container");
const carousel = document.querySelector(".slideshow-container");
const services = document.querySelector(".service-list");
const socials = document.querySelector(".icon-container");
const about = document.querySelector(".content2");

const jerseyCity = document.querySelector("#jersey-city");
const atlanticCity = document.querySelector("#atlantic-city");
const capeMay = document.querySelector("#cape-may");

function updateJerseyCity() {
  header.innerHTML = `<span class="header-text">Welcome to Jersey City!</span>
          <img src="/jersey-city.png" alt="nj-logo" class="header-logo" />`;
  carousel.innerHTML = `<div class="mySlides fade">
            <div class="numbertext">1 / 10</div>
            <img class="img1" src="/jersey-city-img/greetings.png" alt="jersey-city-greetings"/>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">2 / 10</div>
            <img class="img2" src="/jersey-city-img/1.png" alt="jersey-city-img1"/>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">3 / 10</div>
            <img class="img3" src="/jersey-city-img/2.png" 
            alt="jersey-city-img2"/>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">4 / 10</div>
            <img class="img1" src="/jersey-city-img/3.png" alt="jersey-city-img3"/>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">5 / 10</div>
            <img class="img2" src="/jersey-city-img/4.jpg" alt="jersey-city-img4"/>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">6 / 10</div>
            <img class="img3" src="/jersey-city-img/5.png" alt="jersey-city-img5"/>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">7 / 10</div>
            <img class="img3" src="/jersey-city-img/6.png" alt="jersey-city-img6"/>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">8 / 10</div>
            <img class="img1" src="/jersey-city-img/7.png" alt="jersey-city-img7"/>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">9 / 10</div>
            <img class="img2" src="/jersey-city-img/8.png" alt="jersey-city-img18/>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">10 / 10</div>
            <img class="img3" src="/jersey-city-img/9.png" alt="jersey-city-img9"/>
          </div>`;
  services.innerHTML = `<div class="service-item">
          <i class="fas fa-paw"></i>
          <a
            href="https://www.jerseycitynj.gov/cityhall/health/divisionofhealth/dog_licenses"
            target="_blank"
            >Pet license</a
          >
        </div>
        <div class="service-item">
          <i class="fas fa-ring"></i>
          <a
            href="https://www.jerseycitynj.gov/cityhall/Clerk/weddings"
            target="_blank"
            >Mariage License</a
          >
        </div>
        <div class="service-item">
          <i class="fas fa-certificate"></i>
          <a
            href="https://www.jerseycitynj.gov/cityhall/Clerk/birthmarriagedeathrecords"
            target="_blank"
            >Birth Certificate</a
          >
        </div>
        <div class="service-item">
          <i class="fas fa-briefcase"></i>
          <a
            href="https://www.jerseycitynj.gov/jobs/jerseycityjobs"
            target="_blank"
            >Employment</a
          >
        </div>`;
  about.innerHTML = `<h1>About Jersey City</h1>
      <ul>
        <li>Population: 292,449</li>
        <li>City incorporated: January 28, 1820</li>
        <li>Region of the State: North Jersey</li>
        <li>Classification of City: Urban</li>
        <li>Average income: $50,717</li>
        <li>Employment rate: 68.2%</li>
        <li>Average age: 34.8 y/o</li>
        <li>Veterans: 2.1%</li>
        <li>Income: $91,286</li>
        <li>Poverty: 17.1%</li>
        <li>Drove alone: 28.7%</li>
        <li>Carpool: 4.0%</li>
        <li>Public transport: 41.9%</li>
        <li>Walked: 4.6%</li>
        <li>Bicycle: 1.2%</li>
        <li>Worked from hom: 17.6%</li>
        <li>Median Gross Rent: $1,984</li>
        <li>Home ownership: 27.6%</li>
        <li>Housing units: 130,992</li>
        <li>Disabled population: 9.3%</li>
      </ul>
      <h1>Other cities</h1>
      <h3>Click below to see other cities.</h3>
      <ol class="ordered-list">
        <li id="jersey-city"><a href="#">Jersey City</a></li>
        <li id="atlantic-city"><a href="#">Atlantic City</a></li>
        <li id="cape-may"><a href="#">Cape May</a></li>
      </ol>`;
  socials.innerHTML = `<a
          href="https://www.facebook.com/JerseyCityNJ/"
          target="_blank"
          class="icon-link"
        >
          <i class="fab fa-facebook"></i>
        </a>
        <!-- Instagram Icon -->
        <a
          href="https://www.instagram.com/jerseycitynj/?hl=en"
          target="_blank"
          class="icon-link"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <!-- Twitter (X) Icon -->
        <a
          href="https://x.com/JerseyCity?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="_blank"
          class="icon-link"
        >
          <i class="fab fa-twitter"></i>
        </a>`;

  // Re-attach event listeners for other cities
  attachCityListeners();
}

function updateAtlanticCity() {
  header.innerHTML = `<span class="header-text">Welcome to Atlantic City!</span>
            <img src="/atlantic-city.jfif" alt="nj-logo" class="header-logo" />`;
  carousel.innerHTML = `<div class="mySlides fade">
            <div class="numbertext">1 / 10</div>
            <img class="img1" src="/atlantic-city-img/greetings.png" alt="atlantic-city-greetings"/>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">2 / 10</div>
            <img class="img2" src="/atlantic-city-img/1.png" alt="atlantic-city-img1"/>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">3 / 10</div>
            <img class="img3" src="/atlantic-city-img/2.png" alt="atlantic-city-img2"/>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">4 / 10</div>
            <img class="img1" src="/atlantic-city-img/3.png" alt="atlantic-city-img3"/>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">5 / 10</div>
            <img class="img2" src="/atlantic-city-img/4.jpg" alt="atlantic-city-img4"/>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">6 / 10</div>
            <img class="img3" src="/atlantic-city-img/5.png" alt="atlantic-city-img5"/>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">7 / 10</div>
            <img class="img3" src="/atlantic-city-img/6.jpg" alt="atlantic-city-img6"/>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">8 / 10</div>
            <img class="img1" src="/atlantic-city-img/7.png" alt="atlantic-city-img7"/>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">9 / 10</div>
            <img class="img2" src="/atlantic-city-img/8.png" alt="atlantic-city-img8"/>
          </div>

          <div class="mySlides fade">
            <div class="numbertext">10 / 10</div>
            <img class="img3" src="/atlantic-city-img/9.png" alt="atlantic-city-img9"/>
          </div>`;
  services.innerHTML = `<div class="service-item">
              <i class="fas fa-paw"></i>
              <a
                href="https://www.atlanticcountynj.gov/services/animal-shelter-and-animal-services/pet-tips/licensing-dogs-and-cats"
                target="_blank"
                >Pet license</a
              >
            </div>
            <div class="service-item">
              <i class="fas fa-ring"></i>
              <a
                href="https://www.acnj.gov/Departments/vital-statistics"
                target="_blank"
                >Mariage License</a
              >
            </div>
            <div class="service-item">
              <i class="fas fa-certificate"></i>
              <a
                href="https://vitalrecordsoffice.net/new-jersey/atlantic-city-registrar/"
                target="_blank"
                >Birth Certificate</a
              >
            </div>
            <div class="service-item">
              <i class="fas fa-briefcase"></i>
              <a
                href="https://www.governmentjobs.com/careers/atlanticcity"
                target="_blank"
                >Employment</a
              >
            </div>`;
  about.innerHTML = `<h1>About Atlantic City</h1>
  <ul>
    <li>Population: 38,497</li>
    <li>City incorporated: March 1854</li>
    <li>Region of the State: South Jersey</li>
    <li>Classification of City: Urban</li>
    <li>Average income: $35,188</li>
    <li>Employment rate: 50.9%</li>
    <li>Average age: 39.5 y/o</li>
    <li>Poverty: 32.4</li>
    <li>Travel to work: 23.7 min</li>
    <li>Marital status: 35% maried</li>
    <li>Veteran status: 3.1%</li>
    <li>Foreign born: 30.7%</li>
    <li>High school grad: 74.2%</li>
    <li>Bachelor grad: 19.2%</li>
    <li>Geographical mobility: 15.8%</li>
    <li>Geographical mobility: 15.8%</li>
    <li>Fertility: 7.4%</li>
    <li>Male: 50%</li>
    <li>Female: 50%</li>
  </ul>
  <h1>Other cities</h1>
  <h3>Click below to see other cities.</h3>
  <ol class="ordered-list">
    <li id="jersey-city"><a href="#">Jersey City</a></li>
    <li id="atlantic-city"><a href="#">Atlantic City</a></li>
    <li id="cape-may"><a href="#">Cape May</a></li>
  </ol>`;
  socials.innerHTML = `<a
              href="https://www.facebook.com/AtlanticCityGov/"
              target="_blank"
              class="icon-link"
            >
              <i class="fab fa-facebook"></i>
            </a>
            <!-- Instagram Icon -->
            <a
              href="https://www.instagram.com/visit_atlanticcity/"
              target="_blank"
              class="icon-link"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <!-- Twitter (X) Icon -->
            <a
              href="https://x.com/AtlanticCityGov?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
              class="icon-link"
            >
              <i class="fab fa-twitter"></i>
            </a>`;

  // Re-attach event listeners for other cities
  attachCityListeners();
}

function updateCapeMay() {
  header.innerHTML = `<span class="header-text">Welcome to Cape May!</span>
            <img src="/cape-may.png" alt="nj-logo" class="header-logo" />`;
  carousel.innerHTML = `<div class="mySlides fade">
                <div class="numbertext">1 / 10</div>
                <img class="img1" src="/cape-may-img/greetings.png" alt="cape-may-greetings"/>
              </div>
    
              <div class="mySlides fade">
                <div class="numbertext">2 / 10</div>
                <img class="img2" src="/cape-may-img/1.png" alt="cape-may-img1"/>
              </div>
    
              <div class="mySlides fade">
                <div class="numbertext">3 / 10</div>
                <img class="img3" src="/cape-may-img/2.png" alt="cape-may-img2"/>
              </div>
              
              <div class="mySlides fade">
              <div class="numbertext">4 / 10</div>
                <img class="img1" src="/cape-may-img/3.png" alt="cape-may-img3"/>
              </div>
    
              <div class="mySlides fade">
                <div class="numbertext">5 / 10</div>
                <img class="img2" src="/cape-may-img/4.jpg" alt="cape-may-img4"/>
              </div>
    
              <div class="mySlides fade">
                <div class="numbertext">6 / 10</div>
                <img class="img3" src="/cape-may-img/5.jpg" alt="cape-may-img5"/>
              </div>
              
              <div class="mySlides fade">
              <div class="numbertext">7 / 10</div>
                <img class="img1" src="/cape-may-img/6.jpg" alt="cape-may-img6"/>
              </div>
    
              <div class="mySlides fade">
                <div class="numbertext">8 / 10</div>
                <img class="img2" src="/cape-may-img/7.png" alt="cape-may-img7"/>
              </div>
    
              <div class="mySlides fade">
                <div class="numbertext">9 / 10</div>
                <img class="img3" src="/cape-may-img/8.jpg" alt="cape-may-img8"/>
              </div>
              
              <div class="mySlides fade">
                <div class="numbertext">10 / 10</div>
                <img class="img3" src="/cape-may-img/9.png" alt="cape-may-img9"/>
              </div>`;
  services.innerHTML = `<div class="service-item">
              <i class="fas fa-paw"></i>
              <a
                href="https://www.capemaycity.com/media/Clerks%20Office/Dog%20License%20Application%20updated%202020.pdf"
                target="_blank"
                >Pet license</a
              >
            </div>
            <div class="service-item">
              <i class="fas fa-ring"></i>
              <a
                href="https://capemaycountynj.gov/260/Marriage-Ceremonies"
                target="_blank"
                >Mariage License</a
              >
            </div>
            <div class="service-item">
              <i class="fas fa-certificate"></i>
              <a
                href="https://middletownship.com/departments/clerkregistrar/"
                target="_blank"
                >Birth Certificate</a
              >
            </div>
            <div class="service-item">
              <i class="fas fa-briefcase"></i>
              <a
                href="https://capemaycountynj.gov/Jobs.aspx"
                target="_blank"
                >Employment</a
              >
            </div>`;
  about.innerHTML = `<h1>About Cape May</h1>
  <ul>
    <li>Population: 95,500</li>
    <li>City incorporated: November 12, 1692</li>
    <li>Region of the State: South Jersey</li>
    <li>Classification of City: Suburban</li>
    <li>Median earning men: $40,313</li>
    <li>Median earning women: $42,319</li>
    <li>Employment rate: 68.2%</li>
    <li>Average age: 50.9 y/o</li>
    <li>Citizenship: 92.2%</li>
    <li>Foreign born: 13.1%</li>
    <li>Median property value: $767,000</li>
    <li>Median property taxes: $719</li>
    <li>Homeownership: 58.3%</li>
    <li>Median household income: %69.896</li>
    <li>Drove alone: 52.3%</li>
    <li>Walked: 28.5%</li>
    <li>Worked at home: 6.88%</li>
    <li>Average travel time: 17 min</li>
    <li>Poverty: 5.4%</li>
    <li>Uninsured: 3.46%</li>
    <li>Medicaid: 7.5%</li>
    <li>Employer coverage: 27.3%</li>
  </ul>
  <h1>Other cities</h1>
  <h3>Click below to see other cities.</h3>
  <ol class="ordered-list">
    <li id="jersey-city"><a href="#">Jersey City</a></li>
    <li id="atlantic-city"><a href="#">Atlantic City</a></li>
    <li id="cape-may"><a href="#">Cape May</a></li>
  </ol>`;
  socials.innerHTML = `<a
              href="https://www.facebook.com/capemaycity/"
              target="_blank"
              class="icon-link"
            >
              <i class="fab fa-facebook"></i>
            </a>
            <!-- Instagram Icon -->
            <a
              href="https://www.instagram.com/lovecapemay/?hl=en"
              target="_blank"
              class="icon-link"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <!-- Twitter (X) Icon -->
            <a
              href="https://x.com/i/flow/login?redirect_after_login=%2Fcapemaycity"
              target="_blank"
              class="icon-link"
            >
              <i class="fab fa-twitter"></i>
            </a>`;

  // Re-attach event listeners for other cities
  attachCityListeners();
}

// Function to attach listeners
function attachCityListeners() {
  const jerseyCity = document.querySelector("#jersey-city");
  const atlanticCity = document.querySelector("#atlantic-city");
  const capeMay = document.querySelector("#cape-may");

  jerseyCity.addEventListener("click", updateJerseyCity);
  atlanticCity.addEventListener("click", updateAtlanticCity);
  capeMay.addEventListener("click", updateCapeMay);
}

// Call to attach listeners for the first time
attachCityListeners();
