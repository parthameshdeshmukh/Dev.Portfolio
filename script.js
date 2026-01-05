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
            let index = 0; // Initialize index for layout logic

            insightsData.forEach(item => {
                if (filter === 'all' || item.category === filter) {
                    const card = document.createElement('article');

                    // --- SONIC STYLE CARD LOGIC ---
                    // Dark, Glow-on-hover, Clean Typography
                    let colSpanClass = 'col-span-12 md:col-span-4'; // Default to 3-up
                    let heightClass = 'min-h-[300px]';
                    let titleSizeClass = 'text-xl';

                    if (filter === 'all') {
                        if (index === 0) {
                            // HERO CARD: Full Width, Centered, Impactful
                            colSpanClass = 'col-span-12';
                            heightClass = 'min-h-[450px]';
                            titleSizeClass = 'text-4xl md:text-6xl text-center';
                        } else if (index === 1 || index === 2) {
                            colSpanClass = 'col-span-12 md:col-span-6'; // Split
                            heightClass = 'min-h-[350px]';
                            titleSizeClass = 'text-2xl md:text-3xl';
                        }
                    }

                    card.className = `${colSpanClass} relative group cursor-pointer flex flex-col p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-accent/50 hover:shadow-[0_0_50px_rgba(0,170,255,0.15)] transition-all duration-500 ease-out rounded-2xl overflow-hidden`;
                    card.setAttribute('data-category', item.category);
                    card.onclick = () => openModal(item);

                    // Category Colors (Glowing Pills)
                    let catColor = 'text-gray-400 border-gray-700';
                    if (item.category === 'market') catColor = 'text-green-400 border-green-500/30 shadow-[0_0_10px_rgba(74,222,128,0.2)]';
                    if (item.category === 'engineering') catColor = 'text-blue-400 border-blue-500/30 shadow-[0_0_10px_rgba(96,165,250,0.2)]';
                    if (item.category === 'strategy') catColor = 'text-purple-400 border-purple-500/30 shadow-[0_0_10px_rgba(192,132,252,0.2)]';

                    // Alignment Logic
                    let alignClass = (index === 0 && filter === 'all') ? 'items-center text-center' : 'items-start text-left';
                    let summaryClass = (index === 0 && filter === 'all') ? 'mx-auto text-center' : '';

                    card.innerHTML = `
                        <div class="w-full flex ${index === 0 && filter === 'all' ? 'justify-center' : 'justify-start'} mb-6">
                            <span class="px-3 py-1 border ${catColor} bg-white/5 text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-sm">${item.category}</span>
                        </div>
                        
                        <div class="flex-grow flex flex-col ${alignClass} w-full relative z-10">
                            <h3 class="${titleSizeClass} font-bold font-[Poppins] text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all leading-[1.1] tracking-tight">
                                ${item.title}
                            </h3>
                            
                            <p class="text-gray-400 text-lg leading-relaxed mb-6 max-w-3xl ${summaryClass}">
                                ${item.summary}
                            </p>
                        </div>
                        
                        <!-- Footer -->
                        <div class="mt-auto w-full flex items-center ${index === 0 && filter === 'all' ? 'justify-center' : 'justify-between'} border-t border-white/5 pt-6 opacity-60 group-hover:opacity-100 transition-opacity">
                            <span class="text-xs font-mono text-gray-500">${item.date || 'LATEST'}</span>
                            <span class="flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-wide group-hover:translate-x-1 transition-transform">
                                Read Case Study <span class="text-lg">→</span>
                            </span>
                        </div>
                    `;
                    insightsGrid.appendChild(card);

                    index++; // Increment index for layout logic
                }
            });
        };

        // Initial Render
        renderInsights();

        // Filter Logic Re-integration
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Reset all buttons to default state
                filterBtns.forEach(b => {
                    b.classList.remove('active', 'text-accent', 'font-bold');
                    b.classList.add('text-gray-600', 'font-medium');
                });

                // Activate clicked button
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
