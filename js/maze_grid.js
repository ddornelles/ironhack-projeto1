const mazeGridAll = [
  ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path'],
  ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'path'],
  ['wall', 'wall', 'wall', 'path', 'path', 'path', 'path', 'wall', 'wall', 'path', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'wall', 'path', 'path', 'wall', 'path', 'path', 'path', 'path'],
  ['wall', 'wall', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'path', 'path', 'wall', 'wall', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'wall', 'path', 'wall', 'path', 'path'],
  ['wall', 'wall', 'wall', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'wall', 'path', 'wall', 'path', 'wall', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'wall', 'path'],
  ['wall', 'wall', 'wall', 'path', 'path', 'path', 'wall', 'wall', 'wall', 'wall', 'path', 'path', 'wall', 'path', 'path', 'wall', 'path', 'wall', 'wall', 'path', 'wall', 'path', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'path', 'path', 'path', 'wall', 'wall', 'path', 'path', 'path', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'path', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'path', 'wall', 'path', 'path', 'path', 'wall', 'path', 'wall', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'path', 'path', 'axis', 'path', 'path', 'path', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'path', 'wall', 'path', 'path', 'path', 'path', 'path', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'path', 'path', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'path', 'path', 'path', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'path', 'path', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'wall', 'path', 'wall', 'path', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'path', 'path', 'wall', 'path', 'path', 'path', 'wall', 'path', 'path', 'wall', 'path', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'path', 'wall', 'wall', 'wall'],
  ['path', 'wall', 'wall', 'path', 'path', 'path', 'wall', 'path', 'path', 'wall', 'path', 'path', 'path', 'wall', 'path', 'path', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'wall', 'wall'],
  ['path', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'wall', 'path', 'wall', 'wall', 'wall'],
  ['path', 'path', 'path', 'path', 'wall', 'path', 'path', 'path', 'path', 'path', 'path', 'wall', 'path', 'path', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'wall', 'wall'],
  ['path', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
  ['path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
]

const allDirections = ['North', 'South', 'East', 'West'];

const player = {
  direction: allDirections[2], // East
  x: 21,
  y: 0,
  obstacle: ['wall'],
  actualPath: [[21, 0]]
};

function walkUp() {
  if (mazeGridAll[player.x - 1][player.y] === 'wall') {
    console.log('You are facing a wall.');
  } else {
    player.x -= 1;
  }
  player.actualPath.unshift([player.x, player.y]);
}

function walkDown() {
  if (mazeGridAll[player.x + 1][player.y] === 'wall') {
    console.log('You are facing a wall.');
  } else {
    player.x += 1;
  }
  player.actualPath.unshift([player.x, player.y]);
}

function walkRight() {
  if (mazeGridAll[player.x][player.y + 1] === 'wall' || player.y === 24) {
    console.log('You are facing a wall.');
  } else {
    player.y += 1;
  }
  player.actualPath.unshift([player.x, player.y]);
}

function walkLeft() {
  if (mazeGridAll[player.x][player.y - 1] === 'wall' || player.y === 0) {
    console.log('You are facing a wall.');
  } else {
    player.y -= 1;
  }
  player.actualPath.unshift([player.x, player.y]);
}

const playerActions = ['KeyUp', 'KeyDown', 'KeyRight', 'KeyLeft'];
