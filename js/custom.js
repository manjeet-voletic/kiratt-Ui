// search bar Function
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

// $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll >= 200) {
//         $(".topBar").addClass("darkHeader");
//     } else {
//         $(".topBar").removeClass("darkHeader");
//     }
// });
// search bar Function //
// menu bar
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const menu = document.querySelector(".menuRight");

menuClose.style.display = "none";

menuOpen.onclick = function () {
    menu.classList.add("active");
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
}

menuClose.onclick = function () {
    menu.classList.remove("active");
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
}

/* Mobile Mega Menu */
document.querySelectorAll(".megaParent > a").forEach(item => {
    item.addEventListener("click", function (e) {
        if (window.innerWidth < 991) {
            e.preventDefault();
            this.parentElement.classList.toggle("active");
        }
    })
})
// close menubar
//langDropdown 
function toggleLang() {
    document.getElementById("langDropdown").classList.toggle("look");
}

function changeLang(lang, text) {
    document.getElementById("currentLang").innerText = text;

    var select = document.querySelector(".goog-te-combo");
    if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
    }

    // close dropdown
    document.getElementById("langDropdown").classList.remove("look");
}
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,bn,ta,te,mr,gu,kn,ml,pa,ur'
    }, 'google_translate_element');
}
//langDropdown //

// OUTSIDE CLICK → CLOSE
document.addEventListener("click", function (e) {
    const cart = document.getElementById("myCartBox");
    const toggle = document.querySelector(".myCart-wrapper");

    if (!cart.contains(e.target) && !toggle.contains(e.target)) {
        const bsCollapse = bootstrap.Collapse.getInstance(cart);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    }
});

document.addEventListener("click", function (e) {
    const panel = document.getElementById("signInBox");
    const toggle = document.querySelector(".signInIndex");

    // agar click panel ya button ke andar nahi hai
    if (!panel.contains(e.target) && !toggle.contains(e.target)) {
        const bsCollapse = bootstrap.Collapse.getInstance(panel);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    }
});

// close collapse
// location fatch
document.getElementById("getLocationBtn").onclick = function () {

    const text = document.getElementById("locationText");
    const addressBox = document.getElementById("userAddress");

    if (!navigator.geolocation) {
        alert("Not supported");
        return;
    }

    text.innerText = "Fetching...";

    navigator.geolocation.getCurrentPosition(function (pos) {

        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;

        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
            .then(res => res.json())
            .then(data => {

                let address = data.display_name;

                // short address
                addressBox.innerText = address.split(",").slice(0, 2).join(",");

                text.innerText = "Use my current location";

                // modal close
                let modal = bootstrap.Modal.getInstance(document.getElementById('locationModal'));
                if (modal) modal.hide();

            });

    }, function () {
        text.innerText = "Use my current location";
        alert("Allow location permission ❌");
    });

};
// close location //
// banner 1
$(document).ready(function () {

    $('.banner-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        nav: true,
        dots: true,
        navText: [
            '<span><i class="bi bi-arrow-left-short"></i></span>',
            '<span><i class="bi bi-arrow-right-short"></i></span>'
        ]
    });

});
// close  banner//
// banner 2

$('.product-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 4 }
    }
})
// close banner 2

// counter and sale code
/* COPY COUPON */

function copyCoupon(el) {

    let icon = el.querySelector("i");

    navigator.clipboard.writeText("Topsale10STBL");

    icon.classList.remove("bi-copy");
    icon.classList.add("bi-check-lg");

    setTimeout(() => {
        icon.classList.remove("bi-check-lg");
        icon.classList.add("bi-copy");
    }, 2000);

}


/* COUNTDOWN TIMER */

let endDate = new Date();
endDate.setHours(endDate.getHours() + 48);

function updateTimer() {

    let now = new Date().getTime();
    let distance = endDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("mins").innerText = mins;
    document.getElementById("secs").innerText = secs;

}

setInterval(updateTimer, 1000);

// close conter

// loader
setTimeout(function () {

    document.getElementById("loader").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

}, 5000);
// close loader
// for responsive  menu
const searchBtn = document.getElementById("mobileSearchBtn");
const searchBox = document.getElementById("searchContainer");

searchBtn.addEventListener("click", function () {
    searchBox.classList.toggle("active");
});
// close responsive  menu
// passsword Hide and show
function togglePassword(inputId, el) {
    const input = document.getElementById(inputId);
    const icon = el.querySelector("i");

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
    }
}
// close hide and show
// 
// wishlist card
function removeItem(btn) {
    const card = btn.closest('.wishlist-card');

    // smooth delete animation
    card.style.transition = "0.3s";
    card.style.opacity = "0";
    card.style.transform = "translateX(50px)";

    setTimeout(() => {
        card.remove();
    }, 300);
}
// wishlist card