let topbtn = document.getElementById("top_btn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > (16 * 1.25) || document.documentElement.scrollTop > (16 * 1.25)) {
    topbtn.style.display = "block";
  } else {
    topbtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
