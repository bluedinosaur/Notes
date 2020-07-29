//Get the button:
mybutton1 = document.getElementById("myBtn");
mybutton2 = document.getElementById("myBtnTop");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton1.style.display = "block";
//     mybutton2.style.display = "block";
//   } else {
//     mybutton1.style.display = "none";
//     mybutton2.style.display = "none";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
function bottomFunction() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
