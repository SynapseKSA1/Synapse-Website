document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      faqItems.forEach((item) => {
        if (item !== faqItem) item.classList.remove('active');
      });
      faqItem.classList.toggle('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.faq-item')) {
      faqItems.forEach((item) => item.classList.remove('active'));
    }
  });
});
