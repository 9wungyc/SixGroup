
  document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".title");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            title.classList.add("active");
            // remove observer if you want animation to trigger only once
            observer.unobserve(title);
          }
        });
      },
      { threshold: 0.5 } // 50% visible
    );

    observer.observe(title);
  });
