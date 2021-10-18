// Carousel
let slideIndex = [1, 1];
let slideId = ["carousel-item1", "carousel-item2"];
let dotsId = ["dots0", "dots1"];
let demoId = ["demo0", "demo1"];
showSlides(1, 0);
showSlides(1, 1);

// Next/previous controls
function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

// Thumbnail image controls
function currentSlide(n, no) {
  showSlides((slideIndex[no] = n), no);
}

function showSlides(n, no) {
  let i;
  let slide = document.getElementsByClassName(slideId[no]);
  let dots = document.getElementsByClassName(dotsId[no]);
  let demo = document.getElementsByClassName(demoId[no]);
  if (n > slide.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = slide.length;
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
    // slide[i].className = slide[i].className.replace("myImg", "");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    demo[i].className = demo[i].className.replace(" active", "");
  }
  slide[slideIndex[no] - 1].style.display = "block";
  // slide[slideIndex[no] - 1].className += " myImg";
  dots[slideIndex[no] - 1].className += " active";
  demo[slideIndex[no] - 1].className += " active";
}

// // Modal
// let modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// let img = document.getElementsByClassName("myImg");
// let modalImg = document.getElementById("img01");
// let captionText = document.getElementById("caption");
// img.onclick = function () {
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// };

// // Get the <span> element that closes the modal
// let i = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// i.onclick = function () {
//   modal.style.display = "none";
// };
