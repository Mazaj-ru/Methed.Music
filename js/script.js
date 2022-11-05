const dataMusic = [
  {
    id: '1',
    artist: 'The weeknd',
    track: 'Save your tears',
    poster: './../blocks/track/img/cover-01.png',
    mp3: 'audio/The Weeknd - Save Your Tears.mp3',
  },
  {
    id: '2',
    artist: 'Imagine Dragons',
    track: 'Follow You',
    poster: './../blocks/track/img/cover-02.png',
    mp3: 'audio/Imagine Dragons - Follow You.mp3',
  },
  {
    id: '3',
    artist: 'Tove Lo',
    track: 'How Long',
    poster: './../blocks/track/img/cover-03.png',
    mp3: 'audio/Tove Lo - How Long.mp3',
  },
  {
    id: '4',
    artist: 'Tom Odell',
    track: 'Another Love',
    poster: './../blocks/track/img/cover-04.png',
    mp3: 'audio/Tom Odell - Another Love.mp3',
  },
  {
    id: '5',
    artist: 'Lana Del Rey',
    track: 'Born To Die',
    poster: './../blocks/track/img/cover-05.png',
    mp3: 'audio/Lana Del Rey - Born To Die.mp3',
  },
  {
    id: '6',
    artist: 'Adele',
    track: 'Hello',
    poster: './../blocks/track/img/cover-06.png',
    mp3: 'audio/Adele - Hello.mp3',
  },
  {
    id: '7',
    artist: 'Tom Odell',
    track: "Can't Pretend",
    poster: './../blocks/track/img/cover-07.png',
    mp3: "audio/Tom Odell - Can't Pretend.mp3",
  },
  {
    id: '8',
    artist: 'Lana Del Rey',
    track: 'Young And Beautiful',
    poster: './../blocks/track/img/cover-08.png',
    mp3: 'audio/Lana Del Rey - Young And Beautiful.mp3',
  },
  {
    id: '9',
    artist: 'Adele',
    track: 'Someone Like You',
    poster: './../blocks/track/img/cover-09.png',
    mp3: 'audio/Adele - Someone Like You.mp3',
  },
  {
    id: '10',
    artist: 'Imagine Dragons',
    track: 'Natural',
    poster: './../blocks/track/img/cover-10.png',
    mp3: 'audio/Imagine Dragons - Natural.mp3',
  },
  {
    id: '11',
    artist: 'Drake',
    track: 'Laugh Now Cry Later',
    poster: './../blocks/track/img/cover-11.png',
    mp3: 'audio/Drake - Laugh Now Cry Later.mp3',
  },
  {
    id: '12',
    artist: 'Madonna',
    track: 'Frozen',
    poster: './../blocks/track/img/cover-12.png',
    mp3: 'audio/Madonna - Frozen.mp3',
  },
];

const audio = new Audio()
const tracksCard = document.getElementsByClassName('track');
const player = document.querySelector('.player')
const pauseBtn = document.querySelector('.player__controller-pause');
const stopBtn = document.querySelector('.player__controller-stop');
const catalogContainer = document.querySelector('.catalog__wrap');


const pausePlayer = () => {
  const trackActive = document.querySelector('.track--active');

  if(audio.paused) {
    audio.play();
    pauseBtn.classList.remove('player__icon--play');
    trackActive.classList.remove('track--active-pause');
  } else {
    audio.pause();
    pauseBtn.classList.add('player__icon--play');
    trackActive.classList.add('track--active-pause');
  }
}

const playMusic = (event) => {
  event.preventDefault();
  const trackActive = event.currentTarget;

if (trackActive.classList.contains('track--active')) {
  pausePlayer(trackActive);
  return
}

  const id = trackActive.dataset.idTrack;
  const track = dataMusic.find(item => id === item.id);
  audio.src = track.mp3;

  audio.play();
  pauseBtn.classList.remove('player__icon--play');
  player.classList.add('player--active');
  
  for (let i = 0; i < tracksCard.length; i++) {
    tracksCard[i].classList.remove('track--active');
  }
  trackActive.classList.add('track--active');
}

const addHandlerTrack = () => {
  for (let i = 0; i < tracksCard.length; i++) {
    tracksCard[i].addEventListener('click', playMusic);
  }
}

pauseBtn.addEventListener('click', pausePlayer);

stopBtn.addEventListener('click', () => {
  player.classList.remove('player--active');
  audio.src = '';
  for (let i = 0; i < tracksCard.length; i++) {
    tracksCard[i].classList.remove('track--active');
  }
  //! скрыть player и удалить из src трек
});

const createCard = (data) => {
  const button = document.createElement('button');
  button.classList.add('catalog__item', 'track');
  button.dataset.idTrack = data.id;
  button.innerHTML = 
  `
    <img class="track__cover" src="${data.poster}" alt="${data.artist} - ${data.track}">
    <span class="track__title">${data.track}</span>
    <span class="track__artist">${data.artist}</span>
  `;
  return button;
};

const renderCatalog = (dataList) => {
  catalogContainer.textContent = '';
  const listCards = dataList.map(createCard)
  catalogContainer.append(...listCards);
  addHandlerTrack();
}

const checkCoutn = (i = 1) => {
  tracksCard[0];
  if (catalogContainer.clientHeight > tracksCard[0].clientHeight * 3) {
    tracksCard[tracksCard.length - i].style.display = 'none';
    checkCoutn(i + 1);
  }
  
}

const init = () => {
  renderCatalog(dataMusic);
  checkCoutn();
};

init();