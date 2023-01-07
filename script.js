// Sticky Navbar with jQuery
// $(window).on('scroll', function () {
//     if ($(window).scrollTop()) {
//         $('nav').addClass('opacity')
//     }
//     else {
//         $('nav').removeClass('opacity')
//     }
// })

// Sticky Navbar with JavaScript
window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav")
    navbar.classList.toggle("sticky", window.scrollY > 0)
})

// Scroll to top with JavaScript
window.addEventListener("scroll", function () {
    let top = document.querySelector(".scttop")
    if (window.pageYOffset > 100) {
        top.classList.add("active")
    }
    else {
        top.classList.remove("active")
    }
})
function scrolltop() {
    window.scrollTo(0, 0)
}