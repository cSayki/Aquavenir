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


