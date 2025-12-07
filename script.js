document.addEventListener('DOMContentLoaded', () => {
    // Typewriter Effect
    const textElement = document.getElementById('typewriter-text');
    const textToType = "Frontend Developer • MERN Stack • Automotive Enthusiast";
    let index = 0;

    function typeWriter() {
        if (index < textToType.length) {
            textElement.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }

    // Start typewriter slightly after load
    setTimeout(typeWriter, 200);

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        // Simple icon toggle logic or animation can be added here
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Scroll Reveal Animation (Interaction Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                entry.target.classList.remove('opacity-0'); // Ensure visibility
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        el.style.opacity = '0'; // Initial state
        observer.observe(el);
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Sending...';
            btn.disabled = true;

            const formData = new FormData(contactForm);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    btn.innerText = 'Sent!';
                    btn.classList.add('bg-green-500', 'text-white');
                    contactForm.reset();

                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.classList.remove('bg-green-500', 'text-white');
                        btn.disabled = false;
                        alert('Message sent successfully!');
                    }, 3000);
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                btn.innerText = 'Error!';
                btn.classList.add('bg-red-500', 'text-white');
                alert('Something went wrong. Please try again.');

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.classList.remove('bg-red-500', 'text-white');
                    btn.disabled = false;
                }, 3000);
            }
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Navbar scroll effect
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-white/10');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-white/10');
            navbar.classList.add('bg-transparent');
        }
    });
});
