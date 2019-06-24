/* const mazeGrid = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.context = this.canvas.getContext('2d');
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {

  },
};

class MazeGrid {
  constructor(width, heigth, posX, posY) {
    this.width = width;
    this.heigth = heigth;
    this.posX = posX;
    this.posY = posY;
  }
} */

/* const drawGrid = function(w, h, id) {
  ctx.canvas.width = w;
  ctx.canvas.height = h;

  for (x = 0; x <= w; x += 20) {
    for (y = 0; y <= h; y += 20) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
  }
};

drawGrid(400, 400, 'maze'); */

/* const boudaries = () => {
  const drawWall = new Image();
  newCar.src = '../imgs/maze_wall.jpg';
  ctx.drawImage(drawWall, 0, 0, 20, 20);
};

boudaries(); */

/* function draw() {
  const ctx = document.getElementById('maze').getContext('2d');
  for (let i = 0; i < 20; i += 1) {
    for (let j = 0; j < 20; j += 1) { */
      const mazeFloor = new Image();
      mazeFloor.src = '../imgs/maze_floor.jpg';

      let mazeFloorX = 0;
      let mazeFloorY = 0;

      function draw(x, y){
      // use id "example" to get <canvas></canvas> tag
      const theCanvas = document.getElementById("maze");

      // capture 2d context where everything happens in canvas
      // context has all the methods for drawing things
      const ctx = theCanvas.getContext("2d");

      // ctx.drawImage(whichImage, x, y, width, height);
      ctx.drawImage(mazeFloor, mazeFloorX, mazeFloorY, 20, 20);
    /* }
  }
}
draw(); */
