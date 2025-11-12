// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling behavior
  const sections = document.querySelectorAll('section');
  
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Color wheel animation
  const colorWheel = document.querySelector('.wheel');
  if (colorWheel) {
    let rotation = 0;
    setInterval(() => {
      rotation += 1;
      colorWheel.style.transform = `rotate(${rotation}deg)`;
    }, 50);
  }
  
const mainImages = document.querySelectorAll('.gallery-main img');
    const dots = document.querySelectorAll('.gallery-dot');
    const thumbs = document.querySelectorAll('.gallery-thumb');
    let currentIndex = 0;

    function showImage(index) {
      mainImages.forEach(img => img.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      thumbs.forEach(thumb => thumb.classList.remove('active'));

      mainImages[index].classList.add('active');
      dots[index].classList.add('active');
      thumbs[index].classList.add('active');
      currentIndex = index;
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showImage(index));
    });

    thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', () => showImage(index));
    });

    // Auto-slide (opcjonalnie)
    setInterval(() => {
      currentIndex = (currentIndex + 1) % mainImages.length;
      showImage(currentIndex);
    }, 5000);
  
  // Hover effects for project items
  const projectItems = document.querySelectorAll('.project-grid img');
  projectItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  // Gallery item hover effects
const galleryItems = document.querySelectorAll('.gallery-item img');

// Tworzymy overlay do wyświetlania pełnoekranowego obrazu
const overlay = document.createElement('div');
overlay.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const fullImg = document.createElement('img');
fullImg.style.cssText = `
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  transform: scale(0.9);
  transition: transform 0.3s ease;
`;

overlay.appendChild(fullImg);
document.body.appendChild(overlay);

// Funkcja do zamykania overlay
overlay.addEventListener('click', function() {
  overlay.style.opacity = '0';
  fullImg.style.transform = 'scale(0.9)';
  setTimeout(() => {
    overlay.style.display = 'none';
  }, 300);
});

// Dodajemy funkcjonalność do każdego obrazka
galleryItems.forEach(item => {
  item.style.position = 'relative';
  item.style.cursor = 'pointer';
  
  // Hover efekt
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.5)';
    this.style.zIndex = '10';
    this.style.transition = 'transform 0.3s ease, filter 0.3s ease';
    this.style.filter = 'brightness(1.1)';
  });
  
  item.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.filter = 'brightness(1)';
    this.style.zIndex = '0';
  });
  
  // Kliknięcie - wyświetlenie pełnoekranowe
  item.addEventListener('click', function(e) {
    e.stopPropagation();
    fullImg.src = this.src;
    overlay.style.display = 'flex';
    
    // Animacja pojawienia się
    setTimeout(() => {
      overlay.style.opacity = '1';
      fullImg.style.transform = 'scale(1)';
    }, 10);
  });
});
  
  // Design items interactive effects
  const designItems = document.querySelectorAll('.design-item');
  designItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.transition = 'transform 0.3s ease';
      this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });
  
  // Contact items animation
  const contactItems = document.querySelectorAll('.contact-item img');
  contactItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05) rotate(2deg)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0deg)';
    });
  });
  
  // Button interactions
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.2s ease';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
    
    button.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  });
});

// Add CSS animation classes
const style = document.createElement('style');
style.textContent = `
  section {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  section.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  .gallery-item img,
  .project-grid img,
  .contact-item img {
    transition: transform 0.3s ease, filter 0.3s ease;
  }
  
  .design-item {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
`;
document.head.appendChild(style);

   // Gallery data for each category
    const galleries = {
      graphic: {
        title: 'Graphic Design Portfolio',
        images: [
          'img/graphic1.jpg',
          'img/graphic2.jpg',
          'img/strona4-3.png',
          'img/strona4-4.png',
          'img/graphic5.png'
        ]
      },
      art: {
        title: 'Art Works Collection',
        images: [
          'img/art1.jpg',
          'img/art2.jpg',
          'img/art3.jpg',
          'img/art4.jpg',
          'img/art5.jpg'
        ]
      },
      fabrication: {
        title: 'Digital Fabrication Projects',
        images: [
          'img/3d1.jpg',
          'img/3d2.jpg',
          'img/3d3.jpg',
          'img/3d4.jpg'
 
        ]
      },
      granit: {
        title: 'Kolański Granit Workshop',
        images: [
           'img/work1.jpg',
          'img/work2.jpg',
          'img/work3.jpg',
          'img/work4.jpg',
          'img/work5.jpg'
        ]
      }
    };

    let currentGallery = null;
    let currentIndex = 0;
    let autoSlideInterval = null;

    // Initialize gallery
    function openGallery(galleryType) {
      currentGallery = galleries[galleryType];
      if (!currentGallery) return;

      const modal = document.getElementById('galleryModal');
      const title = document.getElementById('galleryTitle');
      const mainGallery = document.getElementById('galleryMain');
      const navGallery = document.getElementById('galleryNav');

      title.textContent = currentGallery.title;

      // Clear existing content
      mainGallery.innerHTML = '';
      navGallery.innerHTML = '';

      // Add main images
      currentGallery.images.forEach((img, index) => {
        const mainImg = document.createElement('img');
        mainImg.src = img;
        mainImg.alt = `Gallery ${index + 1}`;
        if (index === 0) mainImg.classList.add('active');
        mainGallery.appendChild(mainImg);
      });

      // Add controls
      const controls = document.createElement('div');
      controls.className = 'gallery-controls';
      currentGallery.images.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'gallery-dot';
        if (index === 0) dot.classList.add('active');
        dot.dataset.index = index;
        dot.addEventListener('click', () => showImage(index));
        controls.appendChild(dot);
      });
      mainGallery.appendChild(controls);

      // Add thumbnails
      currentGallery.images.forEach((img, index) => {
        const thumb = document.createElement('div');
        thumb.className = 'gallery-thumb';
        if (index === 0) thumb.classList.add('active');
        thumb.dataset.index = index;
        
        const thumbImg = document.createElement('img');
        thumbImg.src = img;
        thumbImg.alt = `Thumb ${index + 1}`;
        
        thumb.appendChild(thumbImg);
        thumb.addEventListener('click', () => showImage(index));
        navGallery.appendChild(thumb);
      });

      modal.classList.add('active');
      currentIndex = 0;
      startAutoSlide();
    }

    function showImage(index) {
      const mainImages = document.querySelectorAll('#galleryMain img');
      const dots = document.querySelectorAll('.gallery-dot');
      const thumbs = document.querySelectorAll('.gallery-thumb');

      mainImages.forEach(img => img.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      thumbs.forEach(thumb => thumb.classList.remove('active'));

      if (mainImages[index]) {
        mainImages[index].classList.add('active');
        dots[index].classList.add('active');
        thumbs[index].classList.add('active');
        currentIndex = index;
      }
    }

    function startAutoSlide() {
      stopAutoSlide();
      autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % currentGallery.images.length;
        showImage(currentIndex);
      }, 5000);
    }

    function stopAutoSlide() {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    }

    function closeGallery() {
      const modal = document.getElementById('galleryModal');
      modal.classList.remove('active');
      stopAutoSlide();
    }

    // Event listeners
    document.addEventListener('DOMContentLoaded', function() {
      // Add click handlers to gallery items
      document.querySelectorAll('[data-gallery]').forEach(item => {
        item.addEventListener('click', function() {
          const galleryType = this.dataset.gallery;
          openGallery(galleryType);
        });
      });

      // Close button
      document.getElementById('closeGallery').addEventListener('click', closeGallery);

      // Close on background click
      document.getElementById('galleryModal').addEventListener('click', function(e) {
        if (e.target === this) {
          closeGallery();
        }
      });

      // Close on ESC key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeGallery();
        }
      });

      // Stop auto-slide on hover
      document.getElementById('galleryModal').addEventListener('mouseenter', stopAutoSlide);
      document.getElementById('galleryModal').addEventListener('mouseleave', function() {
        if (currentGallery) {
          startAutoSlide();
        }
      });
    });