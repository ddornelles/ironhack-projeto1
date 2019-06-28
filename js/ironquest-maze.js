const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

class Component {
  constructor(src, posX, posY, width, height) {
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.image = new Image();
    this.src = src;
  }

  draw() {
    this.image.src = this.src;
    ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
  }
}

const conqArray = [
  new Component('imgs/quests/vscode-quest.png', 10 * 20, 21 * 20, 20, 20),
  new Component('imgs/quests/git-quest.png', 3 * 20, 17 * 20, 20, 20),
  new Component('imgs/quests/github-quest.png', 3 * 20, 10 * 20, 20, 20),
  new Component('imgs/quests/codepen-quest.png', 21 * 20, 21 * 20, 20, 20),
  new Component('imgs/quests/html-quest.png', 19 * 20, 10 * 20, 20, 20),
  new Component('imgs/quests/css-quest.png', 13 * 20, 17 * 20, 20, 20),
  new Component('imgs/quests/js-quest.png', 11 * 20, 5 * 20, 20, 20),
  new Component('imgs/quests/codewars-quest.png', 3 * 20, 8 * 20, 20, 20),
  new Component('imgs/quests/bootstrap-quest.png', 6 * 20, 3 * 20, 20, 20),
  new Component('imgs/quests/jquery-quest.png', 14 * 20, 6 * 20, 20, 20),
  new Component('imgs/quests/canvas-quest.png', 17 * 20, 10 * 20, 20, 20),
  new Component('imgs/quests/nodejs-quest.png', 19 * 20, 3 * 20, 20, 20)
];

/* const conqueredList = (player) => {
  if (player.actualPath[1] === [conqArray[0].posX, conqArray[0].posY]) {
    console.log(player.actualPath[1]);
    document.getElementById('quest1').removeAttribute('hidden');
  }
}
conqueredList(player); */

let conqsNumbers = 0;

const conqsCollected = (player) => {
  conqArray.forEach((element, index) => {
    if (
      element.posX < player.posX + player.width + 20
      && element.posX + element.width > player.posX - 20
      && element.posY < player.posY + player.height + 20
      && element.posY + element.height > player.posY - 20
    ) {
      conqArray.splice(index, 1);
      timeleft += 3;
      const conquered = document.getElementById('number1');
      conquered.innerHTML = conqsNumbers += 1;
    } else if (index > 0) {
      conqArray[index - 1].draw();
    }
    element.draw();
  });
};

let canvasBoy;
let timeleft = 30;
const finishLine = new Component('imgs/finish-line.png', 480, 60, 20, 20);
const playerWinsImg = new Component('imgs/you-win.png', 10, 10, 480, 480);
const gameOverImg = new Component('imgs/game-over.png', 10, 118, 480, 263);

document.getElementById('start-game').onclick = function () {
  drawBoard();

  const canvasBg = document.getElementById('maze');
  canvasBg.setAttribute('class', 'canvas-after');
  canvasBg.classList.remove('class-before');

  canvasBoy = new Component('imgs/user-right-20x20.png', player.actualPath[0][1] * 20, player.actualPath[0][0] * 20, 20, 20);
  canvasBoy.draw();

  finishLine.draw();

  const countdownTimer = setInterval(() => {
    document.getElementById('countseconds').innerHTML = `[ <span id="number2">${timeleft}</span> ] <br>segundos restantes`;
    timeleft -= 1;
    if (timeleft <= -1) {
      clearInterval(countdownTimer);
      gameOver();
    }
    if (canvasBoy.posX === finishLine.posX && canvasBoy.posY === finishLine.posY || conqsNumbers === 12) {
      clearInterval(countdownTimer);
      playerWins();
    }
  }, 1000);

  conqArray.forEach((element) => {
    element.draw();
  });
};

document.onkeydown = (e) => {
  switch (e.keyCode) {
    case 37:
      walkLeft();
      updateMaze();
      conqsCollected(canvasBoy);

      canvasBoy.src = 'imgs/user-left-20x20.png';
      canvasBoy.posX = player.actualPath[0][1] * 20;
      canvasBoy.draw();
      break;
    case 38:
      walkUp();
      updateMaze();
      conqsCollected(canvasBoy);

      canvasBoy.src = 'imgs/user-back-20x20.png';
      canvasBoy.posY = player.actualPath[0][0] * 20;
      canvasBoy.draw();
      break;
    case 39:
      walkRight();
      updateMaze();
      conqsCollected(canvasBoy);

      canvasBoy.src = 'imgs/user-right-20x20.png';
      canvasBoy.posX = player.actualPath[0][1] * 20;
      canvasBoy.draw();
      break;
    case 40:
      walkDown();
      updateMaze();
      conqsCollected(canvasBoy);

      canvasBoy.src = 'imgs/user-front-20x20.png';
      canvasBoy.posY = player.actualPath[0][0] * 20;
      canvasBoy.draw();
      break;
  }
};

const clear = () => {
  ctx.clearRect(0, 0, 500, 500);
};

const drawBoard = () => {
  for (let i = 0; i < mazeGridAll.length; i += 1) {
    for (let j = 0; j < mazeGridAll.length; j += 1) {
      if (mazeGridAll[i][j] === 'wall') {
        const wall = new Component('imgs/maze_wall.jpg', j * 20, i * 20, 20, 20);
        wall.draw();
      }
    }
  }
};

const updateMaze = () => {
  clear();
  drawBoard();
  finishLine.draw();
};

const playerWins = () => {
  clear();
  drawBoard();
  playerWinsImg.draw();
};
const gameOver = () => {
  clear();
  drawBoard();
  gameOverImg.draw();
};
