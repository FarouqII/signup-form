const logo = document.getElementById('logo');
const frame = document.getElementById('frame');

// Loading Screen
window.onload = () => {
    setTimeout(() => {
      logo.style.transform = "translate(-135px, 175px) scale(0.5)";
      frame.style.opacity = '1';
    }, 2000);
  };

// Owl Animation
frame.src = "./assets/owl-animation/pixil-frame-0.png";

function blink() {
  frame.src = "./assets/owl-animation/pixil-frame-1.png"

  setTimeout(() => {
    frame.src = "./assets/owl-animation/pixil-frame-0.png"

    const nextBlink = Math.floor(Math.random() * 4000) + 2000;
    setTimeout(blink, nextBlink);
  }, 150)
}
setTimeout(blink, 2000);