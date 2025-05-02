// burger menu 1240px
// This code toggles the "active" class on the dropmenu element when the burger element is clicked
const burger = document.getElementById("burger");
const dropmenu = document.getElementById("dropmenu");

burger.addEventListener("click", function () {
  dropmenu.classList.toggle("active");
});

// burger menu 1024px and 360px

const menu = document.getElementById("menu");
const dropmenu2 = document.getElementById("dropmenu2");

menu.addEventListener("click", function () {
  dropmenu2.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  // Slide data
  const slides = [
    {
      image: "images/slider-img/slider.png",
      date: "18.04.2022",
      title:
        "ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების სამელიორაციო ინფრასტრუქტურული პროექტები დაიწყება",
      category: "პოლიტიკა",
    },
    {
      image: "images/slider-img/slider-1.png",
      date: "20.04.2022",
      title: "სამთო კურორტებზე ახალი ტურისტული სეზონი იწყება",
      category: "ტურიზმი",
    },
    {
      image: "images/slider-img/slider-2.png",
      date: "22.04.2022",
      title: "თბილისში ახალი კულტურული ცენტრი გაიხსნა",
      category: "კულტურა",
    },
    {
      image: "images/slider-img/slider-3.png",
      date: "25.04.2022",
      title:
        "საქართველოს მთიან რეგიონებში ინტერნეტის ხელმისაწვდომობა გაიზრდება",
      category: "ტექნოლოგია",
    },
  ];

  const sliderContainer = document.getElementById("slider");
  let currentSlide = 0;

  // Create slides
  function createSlides() {
    slides.forEach((slide, index) => {
      const slideElement = document.createElement("div");
      slideElement.className = `slide ${index === 0 ? "active" : ""}`;
      slideElement.style.backgroundImage = `url(${slide.image})`;

      const gradientOverlay = document.createElement("div");
      gradientOverlay.className = "gradient-overlay";
      slideElement.appendChild(gradientOverlay);

      const contentBox = document.createElement("div");
      contentBox.className = "content-box";

      const contentInner = document.createElement("div");
      contentInner.className = "content-inner";

      const categoryDate = document.createElement("div");
      categoryDate.className = "category-date";

      const category = document.createElement("span");
      category.className = "category";
      category.textContent = slide.category;

      const separator = document.createElement("span");
      separator.textContent = " • ";
      separator.className = "date";

      const date = document.createElement("span");
      date.className = "date";
      date.textContent = slide.date;

      categoryDate.appendChild(category);
      categoryDate.appendChild(separator);
      categoryDate.appendChild(date);

      const title = document.createElement("h2");
      title.className = "title";
      title.textContent = slide.title;

      const navigation = document.createElement("div");
      navigation.className = "navigation";

      const prevButton = document.createElement("button");
      prevButton.className = "nav-button prev";
      prevButton.innerHTML = "&#10094;";
      prevButton.addEventListener("click", prevSlide);

      const counter = document.createElement("span");
      counter.className = "counter";
      counter.textContent = `${index + 1}/${slides.length}`;

      const nextButton = document.createElement("button");
      nextButton.className = "nav-button next";
      nextButton.innerHTML = "&#10095;";
      nextButton.addEventListener("click", nextSlide);

      navigation.appendChild(prevButton);
      navigation.appendChild(counter);
      navigation.appendChild(nextButton);

      contentInner.appendChild(categoryDate);
      contentInner.appendChild(title);
      contentInner.appendChild(navigation);

      contentBox.appendChild(contentInner);
      slideElement.appendChild(contentBox);

      sliderContainer.appendChild(slideElement);
    });
  }

  function prevSlide() {
    navigateSlides((currentSlide - 1 + slides.length) % slides.length);
  }

  function nextSlide() {
    navigateSlides((currentSlide + 1) % slides.length);
  }

  function navigateSlides(index) {
    document
      .querySelectorAll(".slide")
      [currentSlide].classList.remove("active");

    currentSlide = index;
    document.querySelectorAll(".slide")[currentSlide].classList.add("active");

    document.querySelectorAll(".counter").forEach((counter) => {
      counter.textContent = `${currentSlide + 1}/${slides.length}`;
    });
  }

  createSlides();
  //   setInterval(nextSlide, 5000);
});
