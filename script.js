// -------- Testimonials Auto Slider --------
let testimonials = document.querySelectorAll('.testimonial');
let tIndex = 0;

function cycleTestimonials() {
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[tIndex].classList.add('active');
  tIndex = (tIndex + 1) % testimonials.length;
}

// Start cycling every 4 seconds
setInterval(cycleTestimonials, 4000);

// -------- Gallery Click Description --------
function showDescription(text) {
  const descBox = document.getElementById('descriptionBox');
  descBox.style.display = 'block';
  descBox.textContent = text;
}

// -------- Gallery Auto Scroll (Horizontal) --------
const gallery = document.querySelector('.gallery .slider');
let scrollPos = 0;
const scrollWidth = gallery.scrollWidth - gallery.clientWidth;

function autoScrollGallery() {
  scrollPos += gallery.clientWidth * 0.9; // scroll 90% of visible width
  if (scrollPos > scrollWidth) scrollPos = 0;
  gallery.scrollTo({ left: scrollPos, behavior: 'smooth' });
}

// Auto scroll every 5 seconds
setInterval(autoScrollGallery, 5000);

