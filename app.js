const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    // Configure the root margin as needed to trigger the intersection
    rootMargin: '0px 0px 5% 0px' // Adjust the bottom margin based on your needs
});

const hiddenElements1 = document.querySelectorAll('.sociallogo'); // Rename this constant
hiddenElements1.forEach((el) => observer.observe(el));

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

const hiddenElements2 = document.querySelectorAll('.descPic'); // Rename this constant
hiddenElements2.forEach(el => observer1.observe(el));

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show3');
        } else {
            entry.target.classList.remove('show3');
        }
    });
}, {
    rootMargin: '0px 0px 5% 0px'
});

const hiddenElements3 = document.querySelectorAll('.kiiri2'); // Rename this constant
hiddenElements3.forEach(el => observer2.observe(el));