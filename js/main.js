// //BUSINESS LOGIC
//USER LOGIC
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
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 5000); // Change image every 3 seconds
    }

  $(".mountains").click(function(){
    $(".placeToVisit").show()
  })

  $(".caption").click(function(){
    $("body").addClass("display")
    $(".bookATrip").addClass("pop")
    $(".bookATrip").show()

  })

  $("#bookNow").submit(function(event){
    event.preventDefault()
    alert("Registration Successful!!")
  })

})
