const throttle = (callee, timeout) => {
  let timer = null;
  return function perform(...args) {
    if (timer) return
    timer = setTimeout(() => {
      callee(...args)
      clearTimeout(timer)
      timer = null
    }, timeout)
  }
}

const dataMusic = [
  {
    "id": "6005060009",
    "artist": "Jaydan Wolf",
    "track": "Smells Like Teen Spirit",
    "poster": "img/6005060009.jpg",
    "mp3": "mp3/6005060009.mp3"
  },
  {
    "id": "7709396708",
    "artist": "The Kid LAROI, Justin Bieber",
    "track": "STAY",
    "poster": "img/7709396708.jpg",
    "mp3": "mp3/7709396708.mp3"
  },
  {
    "id": "5987614638",
    "artist": "Дора",
    "track": "Втюрилась",
    "poster": "img/5987614638.jpg",
    "mp3": "mp3/5987614638.mp3"
  },
  {
    "id": "0851929096",
    "artist": "HammAli & Navai",
    "track": "Птичка",
    "poster": "img/0851929096.jpg",
    "mp3": "mp3/0851929096.mp3"
  },
  {
    "id": "3820960149",
    "artist": "RSAC",
    "track": "NBA",
    "poster": "img/3820960149.jpg",
    "mp3": "mp3/3820960149.mp3"
  },
  {
    "id": "8081902003",
    "artist": "NЮ, Асия",
    "track": "Останься",
    "poster": "img/8081902003.jpg",
    "mp3": "mp3/8081902003.mp3"
  },
  {
    "id": "9430910636",
    "artist": "Alis Shuka",
    "track": "Not About Us",
    "poster": "img/9430910636.jpg",
    "mp3": "mp3/9430910636.mp3"
  },
  {
    "id": "7521931988",
    "artist": "Dame Dame ft. Lunis",
    "track": "Beggin'",
    "poster": "img/7521931988.jpg",
    "mp3": "mp3/7521931988.mp3"
  },
  {
    "id": "6432817901",
    "artist": "Макс Корж",
    "track": "Это наш путь",
    "poster": "img/6432817901.jpg",
    "mp3": "mp3/6432817901.mp3"
  },
  {
    "id": "8245478183",
    "artist": "DJ SMASH, NIVESTA",
    "track": "Позвони",
    "poster": "img/8245478183.jpg",
    "mp3": "mp3/8245478183.mp3"
  },
  {
    "id": "0807225230",
    "artist": "Mary Gu",
    "track": "Косички",
    "poster": "img/0807225230.jpg",
    "mp3": "mp3/0807225230.mp3"
  },
  {
    "id": "7029192878",
    "artist": "Zivert",
    "track": "WAKE UP!",
    "poster": "img/7029192878.jpg",
    "mp3": "mp3/7029192878.mp3"
  },
  {
    "id": "5267233768",
    "artist": "Imagine Dragons",
    "track": "Bones",
    "poster": "img/5267233768.jpg",
    "mp3": "mp3/5267233768.mp3"
  },
  {
    "id": "8132573299",
    "artist": "Моя Мишель, Dose",
    "track": "Пташка",
    "poster": "img/8132573299.jpg",
    "mp3": "mp3/8132573299.mp3"
  },
  {
    "id": "7572681218",
    "artist": "Dynoro, Gigi D'Agostino",
    "track": "In My Mind",
    "poster": "img/7572681218.jpg",
    "mp3": "mp3/7572681218.mp3"
  },
  {
    "id": "1289699523",
    "artist": "Shawn Mendes, Camila Cabello",
    "track": "Señorita",
    "poster": "img/1289699523.jpg",
    "mp3": "mp3/1289699523.mp3"
  },
  {
    "id": "5173802955",
    "artist": "Masked Wolf",
    "track": "Astronaut In The Ocean",
    "poster": "img/5173802955.jpg",
    "mp3": "mp3/5173802955.mp3"
  },
  {
    "id": "2031101209",
    "artist": "KALVADOS",
    "track": "Простыни",
    "poster": "img/2031101209.jpg",
    "mp3": "mp3/2031101209.mp3"
  },
  {
    "id": "9736629074",
    "artist": "HENSY",
    "track": "Поболело и прошло",
    "poster": "img/9736629074.jpg",
    "mp3": "mp3/9736629074.mp3"
  },
  {
    "id": "8458449651",
    "artist": "Trippy Music",
    "track": "Derniere Danse",
    "poster": "img/8458449651.jpg",
    "mp3": "mp3/8458449651.mp3"
  },
  {
    "id": "7780715415",
    "artist": "Markul",
    "track": "Стрелы",
    "poster": "img/7780715415.jpg",
    "mp3": "mp3/7780715415.mp3"
  },
  {
    "id": "9238045504",
    "artist": "Fousheé",
    "track": "Deep End",
    "poster": "img/9238045504.jpg",
    "mp3": "mp3/9238045504.mp3"
  },
  {
    "id": "4391068272",
    "artist": "Minelli",
    "track": "Rampampam",
    "poster": "img/4391068272.jpg",
    "mp3": "mp3/4391068272.mp3"
  },
  {
    "id": "7435198574",
    "artist": "Imagine Dragons",
    "track": "Natural",
    "poster": "img/7435198574.jpg",
    "mp3": "mp3/7435198574.mp3"
  },
  {
    "id": "5301092244",
    "artist": "The weeknd",
    "track": "Save your tears",
    "poster": "img/5301092244.jpg",
    "mp3": "mp3/5301092244.mp3"
  },
  {
    "id": "5698907681",
    "artist": "Imagine Dragons",
    "track": "Follow You",
    "poster": "img/5698907681.jpg",
    "mp3": "mp3/5698907681.mp3"
  },
  {
    "id": "4157048810",
    "artist": "Tove Lo",
    "track": "How Long",
    "poster": "img/4157048810.jpg",
    "mp3": "mp3/4157048810.mp3"
  },
  {
    "id": "9762913319",
    "artist": "Tom Odell",
    "track": "Another Love",
    "poster": "img/9762913319.jpg",
    "mp3": "mp3/9762913319.mp3"
  },
  {
    "id": "1626965584",
    "artist": "Lana Del Rey",
    "track": "Born To Die",
    "poster": "img/1626965584.jpg",
    "mp3": "mp3/1626965584.mp3"
  },
  {
    "id": "3959251175",
    "artist": "Adele",
    "track": "Hello",
    "poster": "img/3959251175.jpg",
    "mp3": "mp3/3959251175.mp3"
  },
  {
    "id": "9167087226",
    "artist": "Tom Odell",
    "track": "Can't Pretend",
    "poster": "img/9167087226.jpg",
    "mp3": "mp3/9167087226.mp3"
  },
  {
    "id": "7816469663",
    "artist": "Lana Del Rey",
    "track": "Young And Beautiful",
    "poster": "img/7816469663.jpg",
    "mp3": "mp3/7816469663.mp3"
  },
  {
    "id": "7456829066",
    "artist": "Adele",
    "track": "Someone Like You",
    "poster": "img/7456829066.jpg",
    "mp3": "mp3/7456829066.mp3"
  },
  {
    "id": "8646210713",
    "artist": "Drake",
    "track": "Laugh Now Cry Later",
    "poster": "img/8646210713.jpg",
    "mp3": "mp3/8646210713.mp3"
  },
  {
    "id": "6551053494",
    "artist": "Madonna",
    "track": "Frozen",
    "poster": "img/6551053494.jpg",
    "mp3": "mp3/6551053494.mp3"
  }
];

let playList = [];

const favoriteList = localStorage.getItem('favorite') ? JSON.parse(localStorage.getItem('favorite')) : [];

const audio = new Audio();
const headerLogo = document.querySelector('.header__logo');
const favoriteBtn = document.querySelector('.header__button');
const tracksCard = document.getElementsByClassName('track');
const catalogContainer = document.querySelector('.catalog__wrap');
const player = document.querySelector('.player');
const pauseBtn = document.querySelector('.player__controller-pause');
const stopBtn = document.querySelector('.player__controller-stop');
const prevBtn = document.querySelector('.player__controller-prev');
const nextBtn = document.querySelector('.player__controller-next');
const likeBtn = document.querySelector('.player__controller-like');
const muteBtn = document.querySelector('.player__controller-mute');
const playerProgressInput = document.querySelector('.player__progress-input');
const playerTimePassed = document.querySelector('.player__time-passed');
const playerTiemTotal = document.querySelector('.player__tiem-total');
const playerVolumeInput = document.querySelector('.player__volume-input');
const search = document.querySelector('.search');
const trackTitle = document.querySelector('.track-info__title');
const trackArtist = document.querySelector('.track-info__artist');


const catalogAddBtn = document.createElement('button');
catalogAddBtn.classList.add('catalog__button');
catalogAddBtn.innerHTML = 
`
  <span>Увидеть&nbsp;всё</span>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
  </svg>
`;

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
  let i = 0;
  const id = trackActive.dataset.idTrack;

  const index = favoriteList.indexOf(id);
  if (index !== -1) {
    likeBtn.classList.add('player__icon--like-active');
  } else {
    likeBtn.classList.remove('player__icon--like-active');
  }

  const track = playList.find((item, index) => {
    i = index;
    return id === item.id;
  });
  audio.src = track.mp3;

  trackTitle.textContent = track.track;
  trackArtist.textContent = track.artist;

  audio.play();
  pauseBtn.classList.remove('player__icon--play');
  player.classList.add('player--active');
  player.dataset.idTrack = id;

  const prevTrack = i === 0 ? playList.length - 1 : i - 1;
  const nextTrack = i + 1 === playList.length ? 0 : i + 1;
  prevBtn.dataset.idTrack = playList[prevTrack].id;
  nextBtn.dataset.idTrack = playList[nextTrack].id;
  likeBtn.dataset.idTrack = id;
  
  for (let i = 0; i < tracksCard.length; i++) {
    if (id === tracksCard[i].dataset.idTrack) {
      tracksCard[i].classList.add('track--active');
    } else {
      tracksCard[i].classList.remove('track--active');
    }
  }
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
  document.querySelector('.track--active').classList.remove('track--active');
});

const createCard = (data) => {
  const button = document.createElement('button');
  button.classList.add('catalog__item', 'track');

  if (player.dataset.idTrack === data.id) {
    button.classList.add('track--active');
    if (audio.paused) {
      button.classList.add('track--active', 'track--active-pause');
    }
  }
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
  playList = [...dataList];
  catalogContainer.textContent = '';
  const listCards = dataList.map(createCard)
  catalogContainer.append(...listCards);
  addHandlerTrack();
}

const checkCoutn = (i = 1) => {
  tracksCard[0];
  if (catalogContainer.clientHeight + 20 > tracksCard[0].clientHeight * 3) {
    tracksCard[tracksCard.length - i].style.display = 'none';
    checkCoutn(i + 1);
  } else if (i !== 1) {
      catalogContainer.append(catalogAddBtn);
  }
}

const updateTime = () => {
  const duration = audio.duration;
  const currentTime = audio.currentTime;
  const progress = (currentTime / duration) * playerProgressInput.max;
  playerProgressInput.value = progress ? progress : 0;

  const minutesPassed = Math.floor(currentTime / 60) || '0';
  const secondsPassed = Math.floor(currentTime % 60) || '0';

  const minutesDuration = Math.floor(duration / 60) || '0';
  const secondsDuration = Math.floor(duration % 60) || '0';

  playerTimePassed.textContent = `${minutesPassed}:${secondsPassed < 10 ? '0' + secondsPassed : secondsPassed}`;
  playerTiemTotal.textContent = `${minutesDuration}:${secondsDuration < 10 ? '0' + secondsDuration : secondsDuration}`;
  
}

const init = () => {
  audio.volume = localStorage.getItem('volume') || 1;
  playerVolumeInput.value = audio.volume * 100;

  renderCatalog(dataMusic);
  checkCoutn();

  catalogAddBtn.addEventListener('click', () => {
    [...tracksCard].forEach((trackCard) => {
      trackCard.style.display = '';
      catalogAddBtn.remove(); 
    });
  });

  prevBtn.addEventListener('click', playMusic);
  nextBtn.addEventListener('click', playMusic);
  audio.addEventListener('ended', () => {
    nextBtn.click();
  });

  const updateTimeThrottle = throttle(updateTime, 500);

  audio.addEventListener('timeupdate', updateTimeThrottle);

  playerProgressInput.addEventListener('change', () => {
    const progress = playerProgressInput.value;
    audio.currentTime = (progress / playerProgressInput.max) * audio.duration;
  });

  favoriteBtn.addEventListener('click', () => {
    const data = dataMusic.filter((item) => favoriteList.includes(item.id));
    renderCatalog(data);
    checkCoutn();
  });

  headerLogo.addEventListener('click', () => {
    renderCatalog(dataMusic);
    checkCoutn();
  });

  likeBtn.addEventListener('click', () => {
    const index = favoriteList.indexOf(likeBtn.dataset.idTrack)
    if (index === -1) {
      favoriteList.push(likeBtn.dataset.idTrack);
      likeBtn.classList.add('player__icon--like-active');
    } else {
      favoriteList.splice(index, 1);
      likeBtn.classList.remove('player__icon--like-active');
    }
    localStorage.setItem('favorite', JSON.stringify(favoriteList))
  });

  playerVolumeInput.addEventListener('input', () => {
    const value = playerVolumeInput.value;
    audio.volume = value / 100;
    localStorage.setItem('volume', audio.volume);
    if (audio.volume === 0) {
      muteBtn.classList.add('player__icon--mute-off');
    } else {
      muteBtn.classList.remove('player__icon--mute-off');
    }
  });

  muteBtn.addEventListener('click', () => {
    if (audio.volume) {
      localStorage.setItem('volume', audio.volume);
      audio.volume = 0;
      muteBtn.classList.add('player__icon--mute-off');
      playerVolumeInput.value = 0;
    } else {
      audio.volume = localStorage.getItem('volume');
      muteBtn.classList.remove('player__icon--mute-off');
      playerVolumeInput.value = audio.volume * 100;
    }
  });

  search.addEventListener('submit', event => {
    event.preventDefault();
    renderCatalog(playList);
    checkCoutn();
  });

};

init();