// Redirect to the "10 reasons" page when button is clicked
document.getElementById('giftButton').addEventListener('click', function() {
    window.location.href = "Christmass.html";
});

// Generate snowflakes and hearts
const snowCount = 25;
const heartCount = 10;

for (let i = 0; i < snowCount; i++) {
  let snow = document.createElement('div');
  snow.classList.add('snowflake');
  snow.textContent = '❄';
  snow.style.left = Math.random() * 100 + 'vw';
  snow.style.animationDuration = (5 + Math.random() * 5) + 's';
  snow.style.fontSize = (10 + Math.random() * 20) + 'px';
  document.body.appendChild(snow);
}

for (let i = 0; i < heartCount; i++) {
  let heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (4 + Math.random() * 4) + 's';
  heart.style.fontSize = (15 + Math.random() * 25) + 'px';
  document.body.appendChild(heart);
}

// Add snowmen at the bottom
const snowmenCount = 5;
for (let i = 0; i < snowmenCount; i++) {
  let snowman = document.createElement('div');
  snowman.classList.add('snowman');
  snowman.textContent = '⛄';
  snowman.style.left = (i * 18) + 'vw';
  document.body.appendChild(snowman);
}
