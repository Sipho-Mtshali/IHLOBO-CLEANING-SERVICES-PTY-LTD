 // Initialize when page loads
        document.addEventListener('DOMContentLoaded', function() {
            // Testimonials slider
            let currentTestimonial = 0;
            const testimonials = document.querySelectorAll('.testimonial-card');
            const dots = document.querySelectorAll('.dot');

            function showTestimonial(n) {
                testimonials.forEach(testimonial => testimonial.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                if (testimonials[n] && dots[n]) {
                    testimonials[n].classList.add('active');
                    dots[n].classList.add('active');
                }
            }

            window.currentSlide = function(n) {
                currentTestimonial = n - 1;
                showTestimonial(currentTestimonial);
            }

            // Auto-slide testimonials
            if (testimonials.length > 0) {
                setInterval(() => {
                    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                    showTestimonial(currentTestimonial);
                }, 5000);
            }

            // Quote calculator
            window.calculateQuote = function() {
                const serviceType = document.getElementById('serviceType')?.value || 'home';
                const propertySize = document.getElementById('propertySize')?.value || 'small';
                const frequency = document.getElementById('frequency')?.value || 'once';

                let basePrice = 0;
                
                // Base prices by service type
                switch(serviceType) {
                    case 'home': 
                    basePrice = 300; 
                    break;
                    case 'office': 
                    basePrice = 700; 
                    break;
                    case 'event': 
                    basePrice = 600; 
                    break;
                    case 'deep': 
                    basePrice = 500; 
                    break;
                }

                // Size multiplier
                const sizeMultiplier = {
                    'small': 1,
                    'medium': 1.5,
                    'large': 2.2
                };

                // Frequency discount
                const frequencyDiscount = {
                    'once': 1,
                    'weekly': 0.8,
                    'monthly': 2.5
                };

                const finalPrice = Math.round(basePrice * sizeMultiplier[propertySize] * frequencyDiscount[frequency]);
                const priceElement = document.getElementById('estimatedPrice');
                if (priceElement) {
                    priceElement.textContent = `R ${finalPrice}`;
                }
            }

            window.requestQuote = function() {
                window.open('tel:0611344045', '_self');
            }

            // Stats counter animation
            function animateStats() {
                const stats = document.querySelectorAll('.stat-number');
                
                stats.forEach(stat => {
                    const target = parseInt(stat.dataset.target);
                    const duration = 2000;
                    const step = target / (duration / 16);
                    let current = 0;
                    
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        stat.textContent = Math.floor(current);
                    }, 16);
                });
            }

            // FAQ toggle
            window.toggleFaq = function(element) {
                const answer = element.nextElementSibling;
                const isActive = answer.classList.contains('active');
                
                // Close all FAQ items
                document.querySelectorAll('.faq-answer').forEach(item => {
                    item.classList.remove('active');
                });
                document.querySelectorAll('.faq-question').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Toggle current item
                if (!isActive) {
                    answer.classList.add('active');
                    element.classList.add('active');
                }
            }

            // Scroll animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            // Enhanced intersection observer for stats
            const statsObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.target.classList.contains('stats')) {
                        animateStats();
                        statsObserver.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observe stats section
            const statsSection = document.querySelector('.stats');
            if (statsSection) {
                statsObserver.observe(statsSection);
            }

            // Observe all fade-in elements
            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });

            // Gallery hover effects
            document.querySelectorAll('.gallery-item').forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });

            // Service cards interactive effects
            document.querySelectorAll('.service-card').forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });

            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Header background change on scroll
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (header) {
                    if (window.scrollY > 100) {
                        header.style.background = 'linear-gradient(135deg, rgba(255, 107, 53, 0.95), rgba(255, 140, 66, 0.95))';
                        header.style.backdropFilter = 'blur(10px)';
                    } else {
                        header.style.background = 'linear-gradient(135deg, #ff6b35, #ff8c42)';
                        header.style.backdropFilter = 'none';
                    }
                }
            });
        });

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Add some interactive effects
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Header background change on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'linear-gradient(135deg, rgba(255, 107, 53, 0.95), rgba(255, 140, 66, 0.95))';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'linear-gradient(135deg, #ff6b35, #ff8c42)';
                header.style.backdropFilter = 'none';
            }
        });