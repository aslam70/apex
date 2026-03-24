// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);
reveals.forEach((el) => observer.observe(el));


// ── CART COUNTER ──
let cartCount = 0;
const cartBtn = document.querySelector(".nav-cart-btn");

document.querySelectorAll(".quick-add").forEach((btn) => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartBtn.textContent = `Bag (${cartCount})`;
  });
});

// ── WISHLIST TOGGLE ──
document.querySelectorAll(".wishlist-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isActive = btn.textContent === "♥";
    btn.textContent = isActive ? "♡" : "♥";
    btn.style.color = isActive ? "" : "var(--accent)";
    btn.style.borderColor = isActive ? "" : "var(--accent)";
  });
});

// ── COLOR DOT ACTIVE STATE ──
document.querySelectorAll(".product-card").forEach((card) => {
  card.querySelectorAll(".c-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      card.querySelectorAll(".c-dot").forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });
});

// ── MOBILE HAMBURGER MENU ──
const hamburger = document.createElement("button");
hamburger.className = "hamburger";
hamburger.innerHTML = "☰";
hamburger.style.cssText = `
  display: none;
  background: none;
  border: none;
  color: var(--white);
  font-size: 22px;
  cursor: pointer;
`;
document.querySelector(".nav-actions").prepend(hamburger);

hamburger.addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-links");
  const isOpen = navLinks.classList.toggle("mobile-open");
  hamburger.innerHTML = isOpen ? "✕" : "☰";
});