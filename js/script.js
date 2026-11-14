
// ================================
// MOBILE NAVIGATION
// ================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});


// ================================
// MONTHLY / YEARLY PRICING
// ================================

const billingButtons = document.querySelectorAll(".billing-btn");
const prices = document.querySelectorAll(".price");

billingButtons.forEach(button => {
    button.addEventListener("click", () => {

        const selectedPlan = button.dataset.plan;

        billingButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        prices.forEach(price => {
            const amount = price.dataset[selectedPlan];
            price.textContent = "$" + amount;
        });
    });
});


// ================================
// FAQ ACCORDION
// ================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        faqItems.forEach(faq => {
            faq.classList.remove("active");
        });

        if (!isActive) {
            item.classList.add("active");
        }
    });
});


// ================================
// SMOOTH SCROLLING
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ================================
// CONSOLE MESSAGE
// ================================

console.log("Flowly SaaS Landing Page Loaded Successfully!");
