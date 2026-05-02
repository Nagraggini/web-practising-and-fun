'use strict';
/*
Strict mode segít:

hibákat korábban észrevenni
tisztább, biztonságosabb kódot írni
elkerülni rejtett bugokat
*/

/*
//A querySelector-al tudunk hozzáférni a DOM fához, amit a html-ben hoztunk létre. A tag-ek a node-ok.

//p class=message
console.log(document.querySelector(".message")); //<p class="message">Start guessing...</p>

//Balról jobbra dolgozza fel a sort az IDE, emiatt lefut az első rész a pont utána, aztán kicseréli a második részra a pont utánira.
console.log(document.querySelector(".message").textContent); //message">Start guessing...

document.querySelector(".message").textContent = "Correct Number!";

//Elem szövegét módosítjuk. pl.: div,p , span
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

//Szám beállítása az input mezőben. ez lehet input, vagy textarea
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

/*
const x = function () {
  console.log(23);
};
*/

// Random szám generálás
// Minimum: 0 (előfordulhat)
// Maximum: 0.999999... (de 1 sosem lesz)
// Math.random();

let secretNumber = Math.trunc(Math.random() * 20) + 1; // 1-20 közötti szám kreálása.
//A +1 azért kell, hogy lehessen 20 is az eredmény.
//Teszthez.
console.log('The number is: ' + secretNumber);

//Eredmény módosításához.
let score = 20; //Nem lehet const, mert csökkenteni kell az értékét.
let highscore;

if (localStorage.getItem('highscore') != '0') {
  highscore = localStorage.getItem('highscore');
} else {
  highscore = 0;
}

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// <button class="btn check">Check!</button>
//A btn class-on belül a check gombot kérjük le.
document.querySelector('.check').addEventListener('click', function () {
  //lokális visszatérési érték nélküli függvény
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (guess < 1 || guess > 20) {
    displayMessage('Number must be between 1-20!');
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage('🎆 You are a winner!');

    //Háttérszín és stílus megváltoztatása. Ezek inline stílusok lesznek a htmlben, a css fájlban nem fog megváltozni semmi sem.
    document.querySelector('body').style.backgroundColor = '#ff66ff';
    //Csak egy elemet módosít (az első találatot)
    document.querySelector('.number').style.width = '30rem'; //rem: Egy relatív mértékegység a html font-size-hoz viszonyítva.
    //font-size: 10px -> 30rem = 30 × 10px = 300px

    displayFirework();

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;

      //Mentés
      localStorage.setItem('highscore', highscore);
    }
    //Amikor a tipp helytelen.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //Ternális operátor feltétel ? "igaz ág":"hamis ág"
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--; //Hibás tippnél csökkentjük a pontot.
      document.querySelector('.score').textContent = score;
    } else {
      //A score=0.
      displayMessage("Don't worry about it!");
      document.querySelector('.score').textContent = 0;
    }
  }
});

function displayReset() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //Teszthez.
  console.log('The number is: ' + secretNumber);
  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;

  displayNumber('?');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}

//Egy soros utasításnál nem kell a függvény mögő tenni a zárójeleket, ha kiteszed, akkor az oldalbetültésekor egyből lefut.
document.querySelector('.again').addEventListener('click', displayReset);

//Összes előzmény törlése és kezdőképernyő beállítása.
document.querySelector('.clear').addEventListener('click', () => {
  localStorage.clear();
  document.querySelector('.highscore').textContent = '0';
  highscore = 0;
  displayReset();
});

// Tűzijáték animáció
function displayFirework() {
  // Egyszerű tűzijáték animáció canvas-szal
  let firework = document.createElement('canvas');
  firework.id = 'firework-canvas';
  firework.width = window.innerWidth;
  firework.height = window.innerHeight;
  firework.style.position = 'fixed';
  firework.style.top = '0';
  firework.style.left = '0';
  firework.style.pointerEvents = 'none';
  firework.style.zIndex = '10000';
  document.body.appendChild(firework);

  const ctx = firework.getContext('2d');
  let particles = [];

  function randomColor() {
    return `hsl(${Math.random() * 360}, 100%, 60%)`;
  }

  function createFirework(x, y) {
    // Több tűzijáték-pont, különböző helyekre és színekre
    for (let j = 0; j < 5; j++) {
      const centerX = x + Math.cos((2 * Math.PI * j) / 5) * 200;
      const centerY = y + Math.sin((2 * Math.PI * j) / 5) * 120;
      for (let i = 0; i < 30; i++) {
        const angle = (Math.PI * 2 * i) / 30;
        const speed = Math.random() * 4 + 2;
        particles.push({
          x: centerX,
          y: centerY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: randomColor(),
        });
      }
    }
  }

  createFirework(firework.width / 2, firework.height / 2);

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, firework.width, firework.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.04; // gravitáció
      p.alpha -= 0.012;
      ctx.globalAlpha = Math.max(p.alpha, 0);
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    particles = particles.filter(p => p.alpha > 0);
    frame++;
    if (particles.length > 0 && frame < 120) {
      requestAnimationFrame(animate);
    } else {
      firework.remove();
    }
  }
  animate();
}
