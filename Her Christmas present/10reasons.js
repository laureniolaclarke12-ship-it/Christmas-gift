// Generate normal falling snowflakes
const snowCount = 30;
for (let i = 0; i < snowCount; i++) {
  const snow = document.createElement('div');
  snow.classList.add('snowflake');
  snow.textContent = '❄';
  snow.style.left = Math.random() * 100 + 'vw';
  snow.style.top = Math.random() * 50 + 'vh';
  snow.style.fontSize = (10 + Math.random() * 20) + 'px';
  snow.style.animationDuration = (5 + Math.random() * 5) + 's';
  document.body.appendChild(snow);
}
