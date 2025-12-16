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
            alert('Please fill in all fields.');
        }
    });

    // --- Insights Dynamic Rendering (TorqueTalk) ---
    const insightsGrid = document.getElementById('insights-grid');
    if (insightsGrid && typeof insightsData !== 'undefined') {
        const renderInsights = (filter = 'all') => {
            insightsGrid.innerHTML = '';

            insightsData.forEach(item => {
                if (filter === 'all' || item.category === filter) {
                    const card = document.createElement('article');
                    card.className = `glass p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 border-t-2 border-transparent hover:border-accent group fade-in-up cursor-pointer`;
                    card.setAttribute('data-category', item.category);
                    card.onclick = () => openModal(item);

                    // Simple Icon Logic based on Category
                    let iconPath = '';
                    if (item.category === 'market') iconPath = 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z';
                    else if (item.category === 'ev') iconPath = 'M13 10V3L4 14h7v7l9-11h-7z';
                    else iconPath = 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z';

                    card.innerHTML = `
                        <div class="mb-4 text-accent">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="${iconPath}"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold font-[Poppins] mb-3 group-hover:text-accent transition-colors">${item.title}</h3>
                        <p class="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">${item.summary}</p>
                        <span class="inline-flex items-center text-sm font-semibold text-accent group-hover:underline">read study <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span>
                    `;
                    insightsGrid.appendChild(card);
                }
            });
        };

        // Initial Render
        renderInsights();

        // Filter Logic Re-integration
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active', 'bg-accent/10', 'text-accent', 'border-accent'));
                filterBtns.forEach(b => b.classList.add('text-gray-400', 'border-white/10'));

                btn.classList.add('active', 'bg-accent/10', 'text-accent', 'border-accent');
                btn.classList.remove('text-gray-400', 'border-white/10');

                renderInsights(btn.getAttribute('data-filter'));
            });
        });
    }

    // --- Modal Logic ---
    const modal = document.getElementById('insight-modal');
    const closeBtn = document.getElementById('close-modal');
    const backdrop = document.getElementById('modal-backdrop');

    function openModal(data) {
        if (!modal) return;

        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-category').innerText = data.category;
        document.getElementById('modal-date').innerText = data.date;
        document.getElementById('modal-image').src = data.image;
        document.getElementById('modal-content').innerHTML = data.content;

        modal.classList.remove('hidden');
        // Animate in
        setTimeout(() => {
            document.getElementById('modal-card').classList.remove('scale-95', 'opacity-0');
            document.getElementById('modal-card').classList.add('scale-100', 'opacity-100');
        }, 10);

        document.body.style.overflow = 'hidden'; // Stop scrolling
    }

    function closeModal() {
        if (!modal) return;

        document.getElementById('modal-card').classList.remove('scale-100', 'opacity-100');
        document.getElementById('modal-card').classList.add('scale-95', 'opacity-0');

        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 300);
    }

    if (closeBtn) closeBtn.onclick = closeModal;
    if (backdrop) backdrop.onclick = closeModal;

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
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
