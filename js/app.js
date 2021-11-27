//Owl Carousel

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

//Navbar active link

$(document).ready(function () {
  $(".navbar-nav").on("click", "a", function () {
    $(".navbar-nav a.active").removeClass("active");
    $(this).addClass("active");
  });
});
