document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.post-btn');

  if (button) {
    button.addEventListener('click', () => {
      alert('Você clicou na postagem horizontal!');
    });
  }
});
