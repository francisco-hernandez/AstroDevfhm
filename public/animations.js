document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);
    
    // --- 1. Hero Title Reveal ---
    const revealLines = document.querySelectorAll(".reveal-line");
    if (revealLines.length > 0) {
      gsap.from(revealLines, {
        y: "100%",
        autoAlpha: 0,
        rotateX: -20,
        duration: 1.5,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2
      });
    }

    // --- 2. Magnetic Buttons ---
    const magneticButtons = document.querySelectorAll("a, button, .nav-link");
    magneticButtons.forEach(btn => {
        btn.addEventListener("mousemove", (e) => {
            const rect = btn.getBoundingClientRect();
            // Restrict magnetic pull to large elements or defined limits
            if(rect.width > 300) return; 
            const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
            gsap.to(btn, { x: x, y: y, duration: 0.3, ease: "power2.out", overwrite: "auto" });
        });
        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)", overwrite: "auto" });
        });
    });

    // --- 3. Text Reveal (Editorial Masking) ---
    const headings = document.querySelectorAll("h1, h2");
    headings.forEach(h => {
        if(h.classList.contains("marquee-title") || h.classList.contains("hero-title") || h.innerText.trim() === "404") return; 
        gsap.fromTo(h, 
            { y: 80, autoAlpha: 0, clipPath: "inset(100% 0% 0% 0%)" },
            { 
                y: 0, 
                autoAlpha: 1, 
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1.2, 
                ease: "power4.out",
                scrollTrigger: {
                    trigger: h,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // --- 4. Image Inner Parallax ---
    const cards = document.querySelectorAll(".group, .overflow-hidden");
    cards.forEach(card => {
        const img = card.querySelector("img");
        if (img && !img.classList.contains("hero-image")) {
            gsap.set(img, { scale: 1.15 });
            gsap.to(img, {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom", 
                    end: "bottom top",
                    scrub: true
                } 
            });
        }
    });

    // --- 5. Hover 3D Parallax on Specific Cards ---
    const bentoCards = document.querySelectorAll("article, .bg-\\[\\#1A1C1C\\], .bg-\\[\\#2D5BFF\\], .bg-\\[\\#C1FF00\\], .bg-surface-container-highest");
    bentoCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const nx = (e.clientX - rect.left) / rect.width - 0.5;
            const ny = (e.clientY - rect.top) / rect.height - 0.5;
            
            gsap.to(card, {
                rotationY: nx * 15,
                rotationX: -ny * 15,
                transformPerspective: 1000,
                ease: "power2.out",
                duration: 0.5
            });
        });
        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                rotationY: 0,
                rotationX: 0,
                ease: "power3.out",
                duration: 0.7
            });
        });
    });

    // --- 6. Velocity Dynamic Skew (Marquee / Section Shift) ---
    const marquees = document.querySelectorAll(".marquee-container");
    if(marquees.length > 0) {
        let skewSetter = gsap.quickSetter(marquees, "skewY", "deg");
        let proxy = { skew: 0 };
        
        ScrollTrigger.create({
            onUpdate: (self) => {
                let skew = Math.min(Math.max(-self.getVelocity() / 300, -5), 5);
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                    proxy.skew = skew;
                    gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
                }
            }
        });
    }

});
