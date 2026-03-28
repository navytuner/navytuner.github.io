document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.category-tab');
  const posts = document.querySelectorAll('.post-list-item');

  if (tabs.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      posts.forEach(post => {
        if (category === 'all' || post.dataset.category === category) {
          post.style.display = '';
        } else {
          post.style.display = 'none';
        }
      });
    });
  });
});
