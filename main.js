const translations = {
    en: {
        name: "Mohamed Nashat",
        portfolioTitle: "My Portfolio",
        contactTitle: "Contact Me",
        contactText: "Ready to bring your vision to life? Let's collaborate!",
        btnText: "Translate to Arabic",
        btnTextAlt: "إعادة الترجمة إلى الإنجليزية"
    },
    ar: {
        name: "محمد نشأت",
        portfolioTitle: "محفظتي",
        contactTitle: "تواصل معي",
        contactText: "جاهز لتحقيق رؤيتك؟ دعنا نتعاون!",
        btnText: "Translate to Arabic",
        btnTextAlt: "إعادة الترجمة إلى الإنجليزية"
    }
};

let currentLang = 'en';

function animateName(text) {
    const nameElement = document.getElementById('name');
    nameElement.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i] !== ' ' ? text[i] : '\u00A0'; // Non-breaking space for spaces
        nameElement.appendChild(span);
        setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        }, i * 100); // Delay each letter by 100ms
    }
}

document.addEventListener('DOMContentLoaded', function() {
    animateName(translations[currentLang].name);

    const translateBtn = document.getElementById('translateBtn');
    translateBtn.addEventListener('click', function() {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        const lang = translations[currentLang];

        document.getElementById('portfolioTitle').innerText = lang.portfolioTitle;
        document.getElementById('contactTitle').innerText = lang.contactTitle;
        document.getElementById('contactText').innerText = lang.contactText;
        document.getElementById('translateBtn').innerText = lang.btnTextAlt;

        // Animate the name letter by letter during translation
        animateName(lang.name);
    });
});

// Additional interactive effect for portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');
let delay = 0;
portfolioItems.forEach(item => {
    setTimeout(() => {
        item.style.opacity = '1';
    }, delay);
    delay += 100; // Stagger items
    item.addEventListener('mouseenter', () => {
        item.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
});