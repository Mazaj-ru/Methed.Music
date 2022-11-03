const audio = new Audio()
const tracksCard = document.getElementsByClassName('track');
const player = document.querySelector('.player')
const pauseBtn = document.querySelector('.player__controller-pause');
const stopBtn = document.querySelector('.player__controller-stop');
const content = document.querySelector('#tool', ':after');
console.log('content: ', content);


const playMusic = (event) => {
  const trackActive = event.currentTarget;

  audio.src = trackActive.dataset.track;
  audio.play();
  pauseBtn.classList.remove('player__icon--play');
  player.classList.add('player--active');
  
  for (let i = 0; i < tracksCard.length; i++) {
    tracksCard[i].classList.remove('track--active');
  }
  trackActive.classList.add('track--active');
}

for (let i = 0; i < tracksCard.length; i++) {
  tracksCard[i].addEventListener('click', playMusic);
}

pauseBtn.addEventListener('click', () => {
  playMusic("audio/Madonna - Frozen.mp3");
});

pauseBtn.addEventListener('click', () => {
  if(audio.paused) {
    audio.play();
    pauseBtn.classList.remove('player__icon--play');
    
    for (let i = 0; i < tracksCard.length; i++) {
      tracksCard[i].classList.remove('track--active-pause');
    }
  } else {
    audio.pause();
    pauseBtn.classList.add('player__icon--play');

    for (let i = 0; i < tracksCard.length; i++) {
      tracksCard[i].classList.add('track--active-pause');
    }
  }
});

stopBtn.addEventListener('click', () => {
  player.classList.remove('player--active');
  audio.src = '';
  for (let i = 0; i < tracksCard.length; i++) {
    tracksCard[i].classList.remove('track--active');
  }
  //! скрыть player и удалить из src трек
});