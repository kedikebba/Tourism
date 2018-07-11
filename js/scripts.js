// //BUSINESS LOGIC
// function showSlides() {
//     var slideIndex = 0;
//     var i;
//     var slides = document.getElementsByClassName("slideShow");
//     // var dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     // for (i = 0; i < dots.length; i++) {
//     //     dots[i].className = dots[i].className.replace(" active", "");
//     // }
//     slides[slideIndex-1].style.display = "block";
//     // dots[slideIndex-1].className += " active";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
//
//
// //USER LOGIC
// // $(document).ready(function(){
// //   var slideIndex = 0
// //   showSlides()
// //
// // })
//   var slideIndex = 0;
//   showSlides();

$(document).ready(function(){
  var slideIndex = 0;
  showSlides();

  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("slideShow");
      var captions = document.getElementsByClassName("caption");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      // for (i = 0; i < captions.length; i++) {
      //     captions[i].className = captions[i].className.replace("");
      // }
      slides[slideIndex-1].style.display = "block";
      // captions[slideIndex-1].className += " active";
      setTimeout(showSlides, 3000); // Change image every 2 seconds
    }

})
