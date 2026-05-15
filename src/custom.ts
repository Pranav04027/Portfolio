document.addEventListener("DOMContentLoaded", () => {
  const initCounters = () => {
    const counters = document.querySelectorAll<HTMLElement>("[data-counter-target]");

    counters.forEach((counter) => {
      const target = Number.parseInt(counter.dataset.counterTarget ?? "", 10);

      if (Number.isNaN(target)) {
        return;
      }

      let current = 0;

      const interval = window.setInterval(() => {
        if (current < target) {
          current += Math.ceil(target / 100);
          if (current > target) {
            current = target;
          }
          counter.textContent = current.toLocaleString();
          return;
        }

        window.clearInterval(interval);
      }, 20);
    });
  };

  const initLogoAnimation = () => {
    const logo = document.getElementById("hacker-logo");
    if (!logo) {
      return;
    }

    logo.style.display = "flex";
    logo.style.opacity = "0";
    logo.style.transform = "translate3d(50px, 20px, 0) rotate(5deg)";
    logo.style.transition = "all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)";

    requestAnimationFrame(() => {
      logo.style.opacity = "1";
      logo.style.transform = "translate3d(0, 0, 0) rotate(0deg)";
    });
  };

  window.setTimeout(initLogoAnimation, 300);
  window.setTimeout(initCounters, 1000);
});
