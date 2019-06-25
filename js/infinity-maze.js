const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

window.onload = function () {
  document.getElementById('start-game').onclick = function () {
    drawBoard();
    const playerRight = new Image();
    playerRight.src = '../imgs/user-right-20x20.png';
    ctx.drawImage(playerRight, player.actualPath[0][1] * 20, player.actualPath[0][0] * 20);
  };
};

const drawBoard = () => {
  for (let i = 0; i < mazeGridAll.length; i += 1) {
    for (let j = 0; j < mazeGridAll.length; j += 1) {
      if (mazeGridAll[i][j] === 'wall') {
        const wall = new Image();
        wall.src = '../imgs/maze_wall.jpg';
        ctx.drawImage(wall, j * 20, i * 20);
      }
    }
  }
};

const clear = () => {
  ctx.clearRect(0, 0, 460, 460);
};

const updateMaze = () => {
  clear();
  drawBoard();
  updatePlayer();
};

const updatePlayer = () => {
  const playerRight = new Image();
  playerRight.src = '../imgs/user-right-20x20.png';
  ctx.drawImage(playerRight, player.actualPath[0][1] * 20, player.actualPath[0][0] * 20);

  console.log('entrei no updatePlayer');
  /* if (player.direction === 'East' && playerActions === 'l') {
    console.log('entrei no updatePlayer East turn Left');

    const playerBack = new Image();
    playerBack.src = '../imgs/user-back-20x20.png';
    ctx.drawImage(playerBack, player.actualPath[0][1] * 20, player.actualPath[0][0] * 20);
  } else if (player.direction === 'East' && playerActions === 'r') {
    const playerFront = new Image();
    playerFront.src = '../imgs/user-front-20x20.png';
    ctx.drawImage(playerFront, player.actualPath[0][1] * 20, player.actualPath[0][0] * 20);
  } else if (player.direction === 'West' && playerActions === 'l') {
    const playerFront = new Image();
    playerFront.src = '../imgs/user-front-20x20.png';
    ctx.drawImage(playerFront, player.actualPath[0][1] * 20, player.actualPath[0][0] * 20);
  } else if (player.direction === 'West' && playerActions === 'r') {
    const playerBack = new Image();
    playerBack.src = '../imgs/user-back-20x20.png';
    ctx.drawImage(playerBack, player.actualPath[0][1] * 20, player.actualPath[0][0] * 20);
  } else if (player.direction === 'North' && playerActions === 'l') {
    const playerLeft = new Image();
    playerLeft.src = '../imgs/user-left-20x20.png';
    ctx.drawImage(playerLeft, player.actualPath[0][1] * 20, player.actualPath[0][0] * 20);
  } else if (player.direction === 'North' && playerActions === 'r') {
    const playerRight = new Image();
    playerRight.src = '../imgs/user-right-20x20.png';
    ctx.drawImage(playerRight, player.actualPath[0][1] * 20, player.actualPath[0][0] * 20);
  } else if (player.direction === 'South' && playerActions === 'l') {
    const playerRight = new Image();
    playerRight.src = '../imgs/user-right-20x20.png';
    ctx.drawImage(playerLeft, player.actualPath[0][1] * 20, player.actualPath[0][0] * 20);
  } else if (player.direction === 'South' && playerActions === 'r') {
    const playerLeft = new Image();
    playerLeft.src = '../imgs/user-left-20x20.png';
    ctx.drawImage(playerLeft, player.actualPath[0][1] * 20, player.actualPath[0][0] * 20);
  } */
};

document.onkeydown = function (e) {
  console.log(e.key, e.keyCode);
  switch (e.keyCode) {
    case 37:
      console.log(e.key);
      goForward('l');
      updateMaze();
      break;
    case 38:
      console.log(e.key);
      goForward('f');
      updateMaze();
      break;
    case 39:
      console.log(e.key);
      goForward('r');
      updateMaze();
      updatePlayerRight
      break;
  }
}