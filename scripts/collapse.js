document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');

        if (navbar.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbar);
            bsCollapse.hide();
        }
    });
});