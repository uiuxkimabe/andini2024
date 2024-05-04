const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.x - 100}px`;
    cursor.style.top = `${e.y - 100}px`;
    // console.log(e.x)
})



const card = document.querySelector('.card')
const cardCover = document.querySelector('.card .card-cover')
const cardContent = document.querySelector('.card .card-content')
const audio = document.querySelector('audio')
const hiddenMsglink = document.querySelector('.hiddenNext')
const hiddenMsg = document.querySelector('#hiddenmsg')
const body = document.querySelector('body')
card.addEventListener('click', () => {
    audio.play()
    cardCover.style.transform = 'rotate(10deg) scale(1.1) translateX(-100%)'
    cardContent.style.transform = 'rotate(10deg) scale(1.1)'
    body.classList.toggle('start')
    // Firework Confetti
  const duration = 44 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
  
  setTimeout(() => {
      hiddenMsglink.style.visibility = 'visible';
      hiddenMsg.style.display = 'flex'
      alert('tap sembarang pada background hitam')
    }, 44000);
})

