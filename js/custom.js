const input = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");
const suggestionItems = document.querySelectorAll(".suggestion-item");

// Show suggestions on focus
input.addEventListener("focus", () => {
    suggestionsBox.style.display = "block";
});

// Hide suggestions on outside click
document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
        suggestionsBox.style.display = "none";
    }
});

// Autofill on suggestion click
suggestionItems.forEach(item => {
    item.addEventListener("click", () => {
        input.value = item.textContent.trim();
        suggestionsBox.style.display = "none";
    });
});



$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $(".header-menu").addClass("darkHeader");
  } else {
    $(".header-menu").removeClass("darkHeader");
  }
});