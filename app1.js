const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
        } else {
            entry.target.classList.remove('show2');
        }
    });
}, {
    rootMargin: '0px 0px 5% 0px'
});

const hiddenElements = document.querySelectorAll('.descPic');
hiddenElements.forEach(el => observer1.observe(el));
