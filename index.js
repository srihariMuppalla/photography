

 // JavaScript for carousel functionality
 let currentIndex = 0;
 const slides = document.querySelectorAll('.slider-image');
 const totalSlides = slides.length;

 function showSlide(index) {
     slides.forEach((slide, i) => {
         if (i === index) {
             slide.classList.add('slider-active');
         } else {
             slide.classList.remove('slider-active');
         }
     });
 }

 function updateSliderNumbers(index) {
    const sliderNumbers = document.querySelectorAll('.slider-number');
    sliderNumbers.forEach((number, i) => {
        if (i === index) {
            number.classList.add('number-active');
        } else {
            number.classList.remove('number-active');
        }
    });
}

 function nextSlide() {
     currentIndex = (currentIndex + 1) % totalSlides;
     showSlide(currentIndex);
     updateSliderNumbers(currentIndex);
 }

 function prevSlide() {
     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
     showSlide(currentIndex);
     updateSliderNumbers(currentIndex);
 }
// Automatically scroll slides every three second
setInterval(nextSlide, 3000);


  // JavaScript for Testimonial functionality
 
  const testimonials = document.querySelectorAll('.testimonial');
  const totalTestimonials = testimonials.length;
 
  function showTestimonial(index) {
    testimonials.forEach((slide, i) => {
          if (i === index) {
              slide.classList.add('testimonial-active');
          } else {
              slide.classList.remove('testimonial-active');
          }
      });
  }
 
 
  function nextTestSlide() {
      currentIndex = (currentIndex + 1) % totalTestimonials;
      showTestimonial(currentIndex);
  }
 
  function prevTestSlide() {
      currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
      showTestimonial(currentIndex);
  }



  // Code for the hambuger menu

  const mobileMenuEle = document.getElementById("mobileView");

  function hamMenu() {
    mobileMenuEle.classList.toggle("mobile-menu");
  }
