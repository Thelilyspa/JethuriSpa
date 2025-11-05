// Testimonial auto-slider
let testimonials = document.querySelectorAll('.testimonial');
let i = 0;
function cycleTestimonials() {
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[i].classList.add('active');
  i = (i + 1) % testimonials.length;
