

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
  let TestoCurrentIndex = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  const totalTestimonials = testimonials.length;
 
  function showTestimonial(index) {
    testimonials.forEach((teso, j) => {
          if (j === index) {
              teso.classList.add('testimonial-active');
          } else {
              teso.classList.remove('testimonial-active');
          }
      });
  }
 
 
  function nextTestSlide() {
      TestoCurrentIndex = (TestoCurrentIndex + 1) % totalTestimonials;
      showTestimonial(TestoCurrentIndex);
  }
 
  function prevTestSlide() {
      TestoCurrentIndex = (TestoCurrentIndex - 1 + totalTestimonials) % totalTestimonials;
      showTestimonial(TestoCurrentIndex);
  }



  // Code for the hambuger menu

  const mobileMenuEle = document.getElementById("mobileView");

  function hamMenu() {
    mobileMenuEle.classList.toggle("mobile-menu");
  }
