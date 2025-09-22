// Add rainbow throw and delayed redirect for buttons on tela_1

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.all a').forEach(function(link) {
    const button = link.querySelector('button');
    if (!button) return;
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const emojis = ['🌈', '🏳️‍🌈', '✨', '🔥', '💖', '🎉', '⭐', '🦄'];
      const emojiCount = 6 + Math.floor(Math.random() * 3); // 6-8 emojis
      const buttonRect = button.getBoundingClientRect();
      const parentRect = button.parentElement.getBoundingClientRect();
      for (let i = 0; i < emojiCount; i++) {
        const emoji = document.createElement('span');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'absolute';
        // Random X around button center
        const xOffset = (button.offsetLeft + button.offsetWidth/2) + (Math.random() - 0.5) * button.offsetWidth * 0.8;
        emoji.style.left = xOffset + 'px';
        // Random Y near top of button
        const yOffset = button.offsetTop - 10 + (Math.random() - 0.5) * 10;
        emoji.style.top = yOffset + 'px';
        emoji.style.fontSize = (1.7 + Math.random() * 0.7) + 'rem';
        emoji.style.pointerEvents = 'none';
        emoji.style.transition = 'transform 0.9s cubic-bezier(.17,.67,.83,.67), opacity 0.9s';
        emoji.style.transform = 'translateY(0) scale(1)';
        emoji.style.opacity = '1';
        emoji.style.zIndex = '10';
        button.parentElement.appendChild(emoji);
        // Animate each emoji separately
        setTimeout(function() {
          const xRand = (Math.random() - 0.5) * 60;
          const yRand = -70 - Math.random() * 40;
          emoji.style.transform = `translate(${xRand}px, ${yRand}px) scale(${1.2 + Math.random() * 0.7}) rotate(${(Math.random()-0.5)*60}deg)`;
          emoji.style.opacity = '0';
        }, 10 + Math.random() * 120);
        // Remove after animation
        setTimeout(function() {
          emoji.remove();
        }, 1000 + Math.random() * 200);
      }
      setTimeout(function() {
        window.location.href = link.href;
      }, 1000);
    });
  });
});
