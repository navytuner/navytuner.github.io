// Category filter on blog page
document.addEventListener('DOMContentLoaded', () => {
  const pills = document.querySelectorAll('.category-pill');
  const posts = document.querySelectorAll('.post-item');

  if (pills.length === 0) return;

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const category = pill.dataset.category;

      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

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
