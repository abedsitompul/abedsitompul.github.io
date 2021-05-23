/* About Image */
const Abtgmbr = document.getElementById("ImgKlik");
Abtgmbr.onclick = function () {
  this.classList.toggle("active");
};


$(document).ready(function () {
  // Ubah Color Menu About
  $('ul.thumb li').click(function (e) {
    e.preventDefault();
    $('ul.thumb li').removeClass('terpilih');
    $(this).addClass('terpilih');
  });

  // Menampilkan paragraf
  $(".iconifyf").click(function () {
    $(".targetDiv").hide();
    $("#div" + $(this).attr("target")).show();
  });

  $(".swiper-slide").attr("stitle", {
    backgroundColor: "gray"
  });

  $(".SkillSs").hover(function (e) {
    $(".targetss").hide();
    $("#ss" + $(this).attr("target")).show();
    e.preventDefault();
    $('.SkillSs').removeClass('terpilih');
    $(this).addClass('terpilih');
  });

});

/* SLide image */
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


/* Read More */
function FungsiReadMore() {
  var TTersambung = document.getElementById("TeksPutus");
  var Tsambung = document.getElementById("Sambungan");
  var BtnSambung = document.getElementById("BtnSambung");
  var Teksbold = document.getElementById("rata");

  if (TTersambung.style.display === "none") {
    TTersambung.style.display = "inline";
    Tsambung.style.display = "none";
    BtnSambung.innerHTML = "Read More";
  } else {
    TTersambung.style.display = "none";
    Tsambung.style.display = "inline";
    BtnSambung.innerHTML = "Read Less";
  }
}

/* Package Sticky */
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

$("figure").mouseleave(function () {
  $(this).removeClass("hover");
});
/* Akhiran Sticky */