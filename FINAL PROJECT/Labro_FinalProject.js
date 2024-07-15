// Labro_FinalProject.js

function handleHeaderVisibility() {
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.classList.add('hide-header');
        } else {
            header.classList.remove('hide-header');
        }

        lastScrollTop = scrollTop;
    });
}

function smoothScroll() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}
handleHeaderVisibility();
smoothScroll();
