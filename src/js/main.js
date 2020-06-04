$(document).ready(function () {
  $(".wf-header__nav-toggle").click(function (e) {
    e.preventDefault();

    $(".wf-header__nav").toggleClass("active");
  });

  $(".wf-header__nav-item").click(function (e) {
    e.preventDefault();

    $("html, body")
      .stop()
      .animate({
        scrollTop: $($(this).attr("href")).offset().top - 40,
      });

    $(".wf-header__nav").removeClass("active");
  });
});