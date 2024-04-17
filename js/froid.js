document.querySelector(".menu-desktop a").forEach(link => {
    link.addEventListener("click", function() {
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });