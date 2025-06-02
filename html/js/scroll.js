document.addEventListener('DOMContentLoaded', () => {
  const textBlock = document.querySelector('.text-block');
  const aboutSection = document.querySelector('.about');
  const header = document.querySelector('.main-header');

  window.addEventListener('scroll', () => {
    // Animation pour la section about
    const trigger = window.innerHeight / 1.3;
    const top = textBlock.getBoundingClientRect().top;
    if (top < trigger) {
      textBlock.classList.add('visible');
      aboutSection.classList.add('with-bg');
    }

    // Masquer le header en scrollant
    if (window.scrollY > 150) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
  });
});

const footer = document.querySelector('.main-footer');

window.addEventListener('scroll', () => {
	const bottomReached = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
	if (bottomReached) {
		footer.classList.add('visible');
	}
});


document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.text-block ul li');
  const trigger = window.innerHeight / 1.2;

  window.addEventListener('scroll', () => {
    items.forEach((item, index) => {
      const top = item.getBoundingClientRect().top;
      if (top < trigger) {
        setTimeout(() => {
          item.classList.add('fade-in');
        }, index * 150); // délai progressif
      }
    });
  });
});

const btn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const counters = document.querySelectorAll('.count');

function animateCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const updateCount = () => {
      const current = +counter.innerText;
      const increment = Math.ceil(target / 200);
      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(updateCount, 250);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight / 1.1;
  const top = document.querySelector('.counters')?.getBoundingClientRect().top;
  if (top && top < trigger) {
    animateCounters();
  }
});
