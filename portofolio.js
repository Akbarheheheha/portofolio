 // Mobile menu toggle
      document
        .getElementById("mobile-menu")
        .addEventListener("click", function () {
          const mobileNav = document.getElementById("mobile-nav");
          mobileNav.classList.toggle("hidden");
        });

      // Smooth scrolling
      function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({
          behavior: "smooth",
        });
      }

      // Navigation link active state
      const navLinks = document.querySelectorAll(".nav-link");
      const sections = document.querySelectorAll("section");

      window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
          }
        });
      });

      // Fade in animation
      // const observerOptions = {
      //   threshold: 0.1,
      //   rootMargin: "0px 0px -50px 0px",
      // };

      // const observer = new IntersectionObserver((entries) => {
      //   entries.forEach((entry) => {
      //     if (entry.isIntersecting) {
      //       entry.target.classList.add("visible");
      //     }
      //   });
      // }, observerOptions);

      // document.querySelectorAll(".fade-in").forEach((el) => {
      //   observer.observe(el);
      // });

      // Typing animation
const typingText = document.getElementById("typing-text");
const texts = [
  "Membuat pengalaman digital yang menakjubkan",
  "Frontend Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 1) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  } else {
    const nextText = texts[textIndex];
    typingText.textContent = nextText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === nextText.length) {
      setTimeout(() => (isDeleting = true), 2000); // tunggu sebelum hapus
    }
  }

  setTimeout(typeWriter, isDeleting ? 50 : 100);
}

// Tambahkan delay di awal, misalnya 1 detik
setTimeout(typeWriter, 2000);



      // Contact form
      document
        .getElementById("contact-form")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          alert(
            "Demo: Pesan Anda telah dikirim! (Ini hanya demo, tidak ada email yang benar-benar terkirim)"
          );
        });

      // Add click handlers for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });
      (function () {
        function c() {
          var b = a.contentDocument || a.contentWindow.document;
          if (b) {
            var d = b.createElement("script");
            d.innerHTML =
              "window.__CF$cv$params={r:'96df7ce617f8fd97',t:'MTc1NDk5NjYyNC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName("head")[0].appendChild(d);
          }
        }
        if (document.body) {
          var a = document.createElement("iframe");
          a.height = 1;
          a.width = 1;
          a.style.position = "absolute";
          a.style.top = 0;
          a.style.left = 0;
          a.style.border = "none";
          a.style.visibility = "hidden";
          document.body.appendChild(a);
          if ("loading" !== document.readyState) c();
          else if (window.addEventListener)
            document.addEventListener("DOMContentLoaded", c);
          else {
            var e = document.onreadystatechange || function () {};
            document.onreadystatechange = function (b) {
              e(b);
              "loading" !== document.readyState &&
                ((document.onreadystatechange = e), c());
            };
          }
        }
      })();

  // Atur opsi IntersectionObserver
  const options = {
    threshold: 0.5, // akan aktif kalau minimal 50% elemen terlihat
  };

  // Buat observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const left = entry.target.querySelector(".left-box");
      const right = entry.target.querySelector(".right-box");

      if (entry.isIntersecting) {
        // Kalau elemen masuk viewport
        if (left) {
          left.classList.add("show");
          left.classList.remove("hide-left");
        }
        if (right) {
          right.classList.add("show");
          right.classList.remove("hide-right");
        }
      } else {
        // Kalau elemen keluar viewport
        if (left) {
          left.classList.remove("show");
          left.classList.add("hide-left");
        }
        if (right) {
          right.classList.remove("show");
          right.classList.add("hide-right");
        }
      }
    });
  }, options);

  // Jalankan observer untuk semua .scroll-section
  document.querySelectorAll(".scroll-section").forEach((section) => {
    observer.observe(section);
  });

  // naight mode

const btnMode = document.getElementById("naightMode");

btnMode.addEventListener("click", function () {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    btnMode.textContent = "🌙 dark mode"; // ubah teks tombol
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    btnMode.textContent = "☀️ light mode"; // ubah teks tombol
  }
});
