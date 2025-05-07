const openButton = document.getElementById('openButton');
const messageBox = document.getElementById('messageBox');

openButton.addEventListener('click', () => {
  // Show the surprise message
  messageBox.style.display = 'block';
  
  // Trigger confetti effect
  confetti({
    spread: 360,
    angle: 90,
    particleCount: 200,
    origin: { x: 0.5, y: 0.5 }
  });
});
