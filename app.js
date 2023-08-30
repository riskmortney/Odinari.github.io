const cardImages = document.querySelectorAll('.hero .card-image img');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('scroll-animation');
    } else {
      entry.target.classList.add('scroll-animation');
    }
  });
}, observerOptions);

cardImages.forEach(image => {
  observer.observe(image);
});

// new image animation below for the screen mockup.

const interfaceImages = document.querySelectorAll(".interface img");

const intersectionOptions = {
    threshold: [0, 0.5, 1]
};

const originalScale = 1; // Store the original scale for reference

const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const scaleFactor = 1 - (entry.intersectionRatio * 0.98); // Reduce size as you scroll
            const scaleValue = Math.max(originalScale * scaleFactor, 0.95); // Minimum scale is 0.5
            entry.target.style.transform = `scale(${scaleValue})`;
        } else {
            entry.target.style.transform = `scale(${originalScale})`;
        }
    });
};

const imageObserver = new IntersectionObserver(handleIntersection, intersectionOptions);

interfaceImages.forEach(image => {
    imageObserver.observe(image);
});

// sign in page javascript code
