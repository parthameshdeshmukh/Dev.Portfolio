document.addEventListener('DOMContentLoaded', () => {
    // Typewriter Effect (Faster & Looping)
    const textElement = document.getElementById('typewriter-text');
    const textToType = "Frontend Developer • MERN Stack • Automotive Enthusiast ";
    let index = 0;
    let isDeleting = false;

    function typeWriter() {
        if (!isDeleting) {
            // Typing forward
            if (index < textToType.length) {
                textElement.innerHTML = textToType.substring(0, index + 1);
                index++;
                setTimeout(typeWriter, 50);
            } else {
                // Finished typing
                isDeleting = true;
                setTimeout(typeWriter, 2000);
            }
        } else {
            // Deleting backward
            if (index > 0) {
                textElement.innerHTML = textToType.substring(0, index - 1);
                index--;
                setTimeout(typeWriter, 30);
            } else {
                // Finished deleting
                isDeleting = false;
                setTimeout(typeWriter, 500);
            }
        }
    }

    // Start typewriter immediately
    typeWriter();

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

    // --- Insights Dynamic Rendering (TorqueTalk) ---
    const insightsGrid = document.getElementById('insights-grid');
    if (insightsGrid && typeof insightsData !== 'undefined') {
        const renderInsights = (filter = 'all') => {
            insightsGrid.innerHTML = '';
            let layoutIndex = 0; // For tracking layout position

            insightsData.forEach((item, index) => {
                // Determine if we should show this item
                if (filter !== 'all' && item.category !== filter) return;

                const card = document.createElement('article');

                // --- ASYMMETRIC LAYOUT LOGIC ---
                let colSpanClass = 'col-span-12 md:col-span-4';
                let heightClass = 'min-h-[300px]';
                let titleSizeClass = 'text-xl';
                let flexDir = 'flex-col';
                let isFeatured = false;

                if (filter === 'all') {
                    if (layoutIndex === 0) {
                        // 1. FEATURED (Hero)
                        colSpanClass = 'col-span-12';
                        heightClass = 'min-h-[500px]';
                        titleSizeClass = 'text-4xl md:text-6xl';
                        isFeatured = true;
                    } else if (layoutIndex === 1) {
                        // 2. WIDE (Secondary Focus)
                        colSpanClass = 'col-span-12';
                        heightClass = 'min-h-[350px]';
                        titleSizeClass = 'text-3xl md:text-4xl';
                    } else {
                        // 3. SPLIT (Standard)
                        colSpanClass = 'col-span-12 md:col-span-6';
                        heightClass = 'min-h-[350px]';
                        titleSizeClass = 'text-2xl';
                    }
                } else {
                    // Filtered view: Standard grid
                    colSpanClass = 'col-span-12 md:col-span-6';
                    titleSizeClass = 'text-2xl';
                }

                card.className = `${colSpanClass} relative group cursor-pointer flex ${flexDir} p-8 md:p-12 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all duration-500 ease-out rounded-xl overflow-hidden ${heightClass}`;
                card.setAttribute('data-category', item.category);
                card.onclick = () => openModal(item);

                // Background Image (Subtle, Darkened) for larger cards
                let bgImageStyle = '';
                if (isFeatured || (layoutIndex === 1 && filter === 'all')) {
                    // Add a subtle background image overlay
                    card.innerHTML += `
                        <div class="absolute inset-0 z-0">
                            <img src="${item.image}" class="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700 ease-out" alt="">
                            <div class="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent"></div>
                            <div class="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/50 to-transparent"></div>
                        </div>
                    `;
                }

                // Category Colors
                let catColor = 'text-gray-400 border-gray-700';
                if (item.category === 'market') catColor = 'text-emerald-400 border-emerald-500/30';
                if (item.category === 'engineering') catColor = 'text-blue-400 border-blue-500/30';
                if (item.category === 'strategy') catColor = 'text-purple-400 border-purple-500/30';

                // Content Structure
                const contentWrapper = document.createElement('div');
                contentWrapper.className = "relative z-10 flex flex-col items-start h-full w-full max-w-4xl";

                contentWrapper.innerHTML = `
                    <div class="mb-6 flex items-center gap-4">
                        <span class="px-3 py-1 border ${catColor} bg-black/20 text-xs font-mono font-bold uppercase tracking-widest rounded-full backdrop-blur-sm">
                            ${item.category}
                        </span>
                        ${isFeatured ? '<span class="text-white text-xs font-mono uppercase tracking-widest animate-pulse">Featured Analysis</span>' : ''}
                    </div>

                    <h3 class="${titleSizeClass} font-bold font-[Poppins] text-white mb-6 group-hover:text-cyan-400 transition-colors leading-[1.1]">
                        ${item.title}
                    </h3>
                    
                    <p class="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl line-clamp-3 group-hover:text-gray-300 transition-colors">
                        ${item.summary}
                    </p>
                    
                    <div class="mt-auto pt-6 border-t border-white/10 w-full flex justify-between items-center opacity-70 group-hover:opacity-100 transition-opacity">
                        <div class="flex flex-col">
                            <span class="text-xs font-mono text-gray-500 uppercase">Published</span>
                            <span class="text-sm text-white font-mono">${item.date}</span>
                        </div>
                        <button class="flex items-center gap-2 text-cyan-400 text-sm font-bold uppercase tracking-wide group-hover:gap-4 transition-all">
                            Read Full Report <span class="text-xl">→</span>
                        </button>
                    </div>
                `;

                card.appendChild(contentWrapper);
                insightsGrid.appendChild(card);

                layoutIndex++;
            });
        };

        // Initial Render
        renderInsights();

        // Filter Logic Re-integration
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.classList.remove('active', 'text-accent', 'font-bold');
                    b.classList.add('text-gray-600', 'font-medium');
                });
                btn.classList.add('active', 'text-accent', 'font-bold');
                btn.classList.remove('text-gray-600', 'font-medium');
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

    // Function to update navbar state
    const updateNavbar = () => {
        if (window.scrollY > 20) {
            navbar.classList.add('bg-black/60', 'backdrop-blur-md', 'border-b', 'border-white/10');
            navbar.classList.remove('bg-transparent', 'py-4');
            navbar.classList.add('py-3'); // Shrink slightly
        } else {
            navbar.classList.remove('bg-black/60', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-3');
            navbar.classList.add('bg-transparent', 'py-4');
        }
    };

    window.addEventListener('scroll', updateNavbar);
    updateNavbar(); // Check on load
});
