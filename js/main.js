$(".event-carousel").owlCarousel({
  loop: !0,
  margin: 10,
  autoplay: !0,
  autoplayTimeout: 1e3,
  responsive: {
    0: { items: 1 },
    575: { items: 1 },
    767: { items: 2 },
    991: { items: 3 },
  },
}),
  (function (e) {
    "use strict";
    setTimeout(function () {
      e("#spinner").length > 0 && e("#spinner").removeClass("show");
    }, 1),
      new WOW().init(),
      e(window).scroll(function () {
        e(this).scrollTop() > 45
          ? e(".navbar").addClass("sticky-top shadow-sm")
          : e(".navbar").removeClass("sticky-top shadow-sm");
      }),
      e(".header-carousel").owlCarousel({
        animateOut: "slideOutDown",
        items: 1,
        autoplay: !0,
        smartSpeed: 1e3,
        dots: !1,
        loop: !0,
        nav: !0,
        navText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>',
        ],
      }),
      e(".testimonial-carousel").owlCarousel({
        autoplay: !0,
        items: 1,
        smartSpeed: 1500,
        dots: !0,
        loop: !0,
        margin: 25,
        nav: !0,
        navText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>',
        ],
      }),
      e(document).ready(function () {
        var s;
        e(".btn-play").click(function () {
          s = e(this).data("src");
        }),
          console.log(s),
          e("#videoModal").on("shown.bs.modal", function (a) {
            e("#video").attr(
              "src",
              s + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
            );
          }),
          e("#videoModal").on("hide.bs.modal", function (a) {
            e("#video").attr("src", s);
          });
      }),
      e(".testimonial-carousel").owlCarousel({
        autoplay: !0,
        smartSpeed: 1e3,
        center: !0,
        dots: !0,
        loop: !0,
        margin: 25,
        nav: !0,
        navText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>',
        ],
        responsiveClass: !0,
        responsive: {
          0: { items: 1 },
          576: { items: 1 },
          768: { items: 1 },
          992: { items: 1 },
          1200: { items: 1 },
        },
      });
  })(jQuery),
  $(".event-carousel").owlCarousel({
    loop: !0,
    margin: 10,
    autoplay: !0,
    autoplayTimeout: 1e3,
    responsive: {
      0: { items: 1 },
      575: { items: 1 },
      767: { items: 2 },
      991: { items: 3 },
    },
  }),
  $(".latest-news-carousel").owlCarousel({
    autoplay: !0,
    smartSpeed: 2e3,
    center: !1,
    dots: !0,
    loop: !0,
    margin: 25,
    nav: !0,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: !0,
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 },
    },
  }),
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: !0,
      margin: 10,
      responsiveClass: !0,
      nav: !0,
      dots: !1,
      responsive: { 0: { items: 1 }, 600: { items: 2 }, 1e3: { items: 3 } },
    });
  }),
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: !0,
      nav: !0,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
      ],
    });
  }),
  (function (e) {
    "use strict";
    function s() {
      new YT.Player("video1", { events: { onReady: i, onStateChange: t } }),
        new YT.Player("video2", { events: { onReady: i, onStateChange: t } }),
        new YT.Player("video3", { events: { onReady: i, onStateChange: t } });
    }
    setTimeout(function () {
      e("#spinner").length > 0 && e("#spinner").removeClass("show");
    }, 1),
      new WOW().init(),
      e(window).scroll(function () {
        e(this).scrollTop() > 45
          ? e(".navbar").addClass("sticky-top shadow-sm")
          : e(".navbar").removeClass("sticky-top shadow-sm");
      }),
      e(".header-carousel").owlCarousel({
        animateOut: "slideOutDown",
        items: 1,
        autoplay: !0,
        smartSpeed: 1e3,
        dots: !1,
        loop: !0,
        nav: !0,
        navText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>',
        ],
      }),
      e(".testimonial-carousel").owlCarousel({
        autoplay: !0,
        items: 1,
        smartSpeed: 1500,
        dots: !0,
        loop: !0,
        margin: 25,
        nav: !0,
        navText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>',
        ],
      }),
      e(document).ready(function () {
        var s;
        e(".btn-play").click(function () {
          s = e(this).data("src");
        }),
          console.log(s),
          e("#videoModal").on("shown.bs.modal", function (a) {
            e("#video").attr(
              "src",
              s + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
            );
          }),
          e("#videoModal").on("hide.bs.modal", function (a) {
            e("#video").attr("src", s);
          });
      }),
      e(".testimonial-carousel").owlCarousel({
        autoplay: !0,
        smartSpeed: 1e3,
        center: !0,
        dots: !0,
        loop: !0,
        margin: 25,
        nav: !0,
        navText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>',
        ],
        responsiveClass: !0,
        responsive: {
          0: { items: 1 },
          576: { items: 1 },
          768: { items: 1 },
          992: { items: 1 },
          1200: { items: 1 },
        },
      }),
      document.addEventListener("DOMContentLoaded", function () {
        var e = [].slice.call(document.querySelectorAll("img.lazy"));
        if ("IntersectionObserver" in window) {
          let s = new IntersectionObserver(function (e, a) {
            e.forEach(function (e) {
              if (e.isIntersecting) {
                let a = e.target;
                (a.src = a.dataset.src),
                  a.classList.remove("lazy"),
                  s.unobserve(a);
              }
            });
          });
          e.forEach(function (e) {
            s.observe(e);
          });
        } else
          e.forEach(function (e) {
            (e.src = e.dataset.src), e.classList.remove("lazy");
          });
      });
    var a = {},
      o = null;
    function i(e) {
      e.target.mute(),
        e.target.setVolume(50),
        (a[e.target.getVideoUrl()] = e.target);
    }
    function t(s) {
      e("#carouselVideoExample").carousel("pause");
    }
    e("#carouselVideoExample").on("slid.bs.carousel", function (s) {
      var i = e(".carousel-item.active").find("iframe")[0];
      if (i) {
        var t = a[i.src];
        t && (o && o !== t && o.pauseVideo(), t.playVideo(), (o = t));
      }
    }),
      e("#carouselVideoExample").on(
        "click",
        ".carousel-control-prev, .carousel-control-next",
        function () {
          o && o.pauseVideo();
        }
      );
var openSans = new FontFaceObserver("Open Sans");

openSans.load().then(function () {
  document.body.classList.add("open-sans-loaded");
});
  })(jQuery);

