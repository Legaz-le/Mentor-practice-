document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.closest('.faq-item');
        const icon = question.querySelector('.toggle-icon');
        
        // Toggle active state
        faqItem.classList.toggle('active');
        
        // Toggle icon
        icon.src = faqItem.classList.contains('active') 
            ? 'assets/images/icon-minus.svg'
            : 'assets/images/icon-plus.svg';
    });
});