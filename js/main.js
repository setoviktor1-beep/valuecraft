document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const menuBtn = document.querySelector('[data-menu-btn]');
    const menu = document.querySelector('[data-menu]');
    
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('[data-faq-item]');
    faqItems.forEach(item => {
        const btn = item.querySelector('[data-faq-btn]');
        const panel = item.querySelector('[data-faq-panel]');
        
        btn.addEventListener('click', () => {
            const isOpen = !panel.classList.contains('hidden');
            
            // Close all
            faqItems.forEach(i => {
                i.classList.remove('faq-open');
                i.querySelector('[data-faq-panel]').classList.add('hidden');
            });

            if (!isOpen) {
                item.classList.add('faq-open');
                panel.classList.remove('hidden');
            }
        });
    });

    // Current Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
