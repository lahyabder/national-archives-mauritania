document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Omnibox Search Tabs logic
    const searchTabs = document.querySelectorAll('.search-tab');
    const searchInput = document.querySelector('.search-input-group input');
    
    const placeholders = {
        0: "ابحث في الكتالوج الوطني (مثال: وثائق الاستقلال، اتفاقيات، مراسيم)...",
        1: "ابحث عن خرائط، صور فوتوغرافية، وسائط متعددة...",
        2: "ابحث باسم المخطوطة، المؤلف، أو القرن العائد إليه..."
    };

    searchTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            searchTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            searchInput.placeholder = placeholders[index];
        });
    });

    // Accessibility Text Size (Demo)
    const sizeBtns = document.querySelectorAll('.size-btn');
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Logic to actually change rem base on html would go here
        });
    });
});
