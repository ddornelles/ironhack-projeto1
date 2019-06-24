const mazeGridAll = [
  ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'path', 'path', 'path', 'path', 'wall', 'wall', 'path', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'wall', 'path', 'path', 'wall', 'path', 'path'],
  ['wall', 'path', 'wall', 'wall', 'wall', 'wall', 'path', 'path', 'wall', 'wall', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'wall', 'path', 'wall'],
  ['wall', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'wall', 'path', 'wall', 'path', 'wall', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall'],
  ['wall', 'path', 'path', 'path', 'wall', 'wall', 'wall', 'wall', 'path', 'path', 'wall', 'path', 'path', 'wall', 'path', 'wall', 'wall', 'path', 'wall', 'path', 'wall'],
  ['wall', 'path', 'wall', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'path', 'wall', 'path', 'wall', 'path', 'wall'],
  ['wall', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'path', 'path', 'path', 'wall', 'wall', 'path', 'path', 'path', 'wall'],
  ['wall', 'wall', 'wall', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'path', 'wall', 'wall', 'wall', 'path', 'wall'],
  ['wall', 'path', 'wall', 'path', 'path', 'path', 'wall', 'path', 'wall', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'wall'],
  ['wall', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'path', 'path', 'axis', 'path', 'path', 'path', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'wall'],
  ['wall', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'path', 'wall', 'path', 'path', 'path', 'path', 'path', 'wall'],
  ['wall', 'path', 'path', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'path', 'wall', 'wall', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'path', 'path', 'path', 'wall'],
  ['wall', 'path', 'path', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'path', 'wall'],
  ['wall', 'wall', 'path', 'wall', 'path', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'wall'],
  ['wall', 'path', 'path', 'wall', 'path', 'path', 'path', 'wall', 'path', 'path', 'wall', 'path', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall'],
  ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'path', 'wall'],
  ['wall', 'path', 'path', 'path', 'wall', 'path', 'path', 'wall', 'path', 'path', 'path', 'wall', 'path', 'path', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall'],
  ['wall', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'wall', 'path', 'wall'],
  ['path', 'path', 'wall', 'path', 'path', 'path', 'path', 'path', 'path', 'wall', 'path', 'path', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall'],
  ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
]

const allDirections = ['North', 'South', 'East', 'West'];

const player = {
  direction: allDirections[2], // East
  x: 19,
  y: 0,
  obstacle: ['wall'],
  actualPath: [],
  lastPath: [],
};

function left() {
  if (player.direction === allDirections[0]) {
    player.direction = allDirections[3];
  } else if (player.direction === allDirections[3]) {
    player.direction = allDirections[1];
  } else if (player.direction === allDirections[1]) {
    player.direction = allDirections[2];
  } else if (player.direction === allDirections[2]) {
    player.direction = allDirections[0];
  }
};

function right() {
  if (player.direction === allDirections[0]) {
    player.direction = allDirections[2];
  } else if (player.direction === allDirections[2]) {
    player.direction = allDirections[1];
  } else if (player.direction === allDirections[1]) {
    player.direction = allDirections[3];
  } else if (player.direction === allDirections[3]) {
    player.direction = allDirections[0];
  }
};

function walkOn() {
  switch (player.direction) {
    case allDirections[0]:
      if (mazeGridAll[player.x - 1][player.y] === 'wall') {
        console.log('You are facing a wall.');
      } else {
        player.x -= 1;
      }
      break;
    case allDirections[1]:
      if (mazeGridAll[player.x + 1][player.y] === 'wall') {
        console.log('You are facing a wall.');
      } else {
        player.x += 1;
      }
      break;
    case allDirections[2]:
      if (mazeGridAll[player.x][player.y + 1] === 'wall') {
        console.log('You are facing a wall.');
      } else {
        player.y += 1;
      }
      break;
    case allDirections[3]:
      if (mazeGridAll[player.x][player.y - 1] === 'wall') {
        console.log('You are facing a wall.');
      } else {
        player.y -= 1;
      }
      break;
  }
  player.travelLog.push([player.x, player.y]);
}

const playerActions = ['front', 'right', 'left'];

function goForward(playerActions) {
  for (let c = 0; c < playerActions.length; c += 1) {
    switch (playerActions[c]) {
      case 'front':
        walkOn();
        break;
      case 'right':
        right();
        break;
      case 'left':
        left();
        break;
    }
  }
}