// Renderização dinâmica dos cards a partir de uma estrutura de dados
const posts = [
  {
    id: 1,
    title: 'Avanços no CSS Layout Flexbox',
    description: 'Entenda como utilizar flex-direction e propriedades de alinhamento individual para construir páginas modernas.',
    image: 'https://picsum.photos/200/150?random=1'
  },
  {
    id: 2,
    title: 'Arquitetura Clean Code no Frontend',
    description: 'Práticas essenciais para manter seus arquivos HTML, CSS e JavaScript organizados e de fácil manutenção.',
    image: 'https://picsum.photos/200/150?random=2'
  }
];

function renderPosts() {
  const container = document.getElementById('feed');
  if (!container) return;

  container.innerHTML = posts.map(post => `
    <article class="post-item" data-id="${post.id}">
      <img src="${post.image}" alt="${post.title}" class="post-media">
      
      <div class="post-content">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-description">${post.description}</p>
      </div>

      <button type="button" class="post-action">Ler Post</button>
    </article>
  `).join('');
}

// Inicialização e tratamento de eventos
document.addEventListener('DOMContentLoaded', () => {
  renderPosts();

  document.getElementById('feed')?.addEventListener('click', (event) => {
    if (event.target.classList.contains('post-action')) {
      const card = event.target.closest('article');
      const title = card?.querySelector('.post-title')?.textContent;
      console.log(`Abrindo postagem: "${title}"`);
    }
  });
});
