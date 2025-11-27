    const container = document.getElementById('snow-container');
    const snowflakes = ['\u2744', '\u2745', '\u2746'];
    function createSnowflake() {
      const flake = document.createElement('div');
      flake.classList.add('snowflake');
      flake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
      flake.style.left = Math.random() * 100 + 'vw';
      flake.style.animationDuration = Math.random() * 8 + 10 + 's';
      flake.style.opacity = Math.random() * 0.5 + 0.5;
      flake.style.fontSize = Math.random() * 20 + 18 + 'px';
      container.appendChild(flake);
      setTimeout(() => flake.remove(), 20000);
    }
    setInterval(createSnowflake, 160);

    window.addEventListener('scroll', () => document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50));
    document.getElementById('mobileMenu').addEventListener('click', () => document.getElementById('navLinks').classList.toggle('active'));