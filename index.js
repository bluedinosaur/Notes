//Get the button:
mybutton1 = document.getElementById("myBtn");
mybutton2 = document.getElementById("myBtnTop");

$(".html-link").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".html-topic").offset().top - 25,
    },
    "slow"
  );
});
$(".es5-link").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".es5-topic").offset().top - 25,
    },
    "slow"
  );
});
$(".Afunctions-link").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".Afunctions-topic").offset().top - 25,
    },
    "slow"
  );
});
$(".Aarrays-link").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".Aarrays-topic").offset().top - 25,
    },
    "slow"
  );
});
$(".Aobjects-link").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".Aobjects-topic").offset().top - 25,
    },
    "slow"
  );
});
$(".PrefPval-link").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".PrefPval-topic").offset().top - 25,
    },
    "slow"
  );
});
$(".TypeC-link").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".TypeC-topic").offset().top - 25,
    },
    "slow"
  );
});
$(".es7-link").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".es7-topic").offset().top - 25,
    },
    "slow"
  );
});
$(".Aloops-link").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".Aloops-topic").offset().top - 25,
    },
    "slow"
  );
});
$(".Debug-link").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".Debug-topic").offset().top - 25,
    },
    "slow"
  );
});
$(".JavaEngine-link").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".JavaEngine-topic").offset().top - 25,
    },
    "slow"
  );
});
$(".Terminal-link").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".Terminal-topic").offset().top - 25,
    },
    "slow"
  );
});

// When the user clicks on the button, scroll to the top of the document
function bottomFunction() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
