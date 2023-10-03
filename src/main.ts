const canvas = document.createElement('canvas');
canvas.width = 1000;
canvas.height = 700;
const context = canvas.getContext('2d')!;
document.querySelector('#app')!.append(canvas);

type Ball = {
    radius: number,
    x: number,
    y: number,
    fillColor: string,
    strokeColor: string,
    strokeWidth: number,
    visible: boolean
};

const balls: Ball[] = [
    {
      radius: 70,
      x: 200,
      y: 320,
      fillColor: 'pink',
      strokeColor: 'darkred',
      strokeWidth: 8,
      visible: false
    },
    {
      radius: 70,
      x: 500,
      y: 320,
      fillColor: 'lightblue',
      strokeColor: 'blue',
      strokeWidth: 8,
      visible: false
    },
    {
      radius: 70,
      x: 800,
      y: 320,
      fillColor: 'lightgreen',
      strokeColor: 'limegreen',
      strokeWidth: 8,
      visible: false
    },
];

let time = 0;

requestAnimationFrame(gameLoop);
let previousElapsed: number = 0;

function gameLoop(elapsed: number) {
  const deltaTime = (elapsed - previousElapsed) / 1000;
  previousElapsed = elapsed;
  requestAnimationFrame(gameLoop);
  update(deltaTime);
  render();
};

function update(deltaTime: number) {
  time += deltaTime;
};

function render() {
    for(let i = 0; i < balls.length; i++) {
        if(Math.floor(time) == i + 1) {
           balls[i].visible = true 
        }
        
        if (balls[i].visible == true) {
            drawCircle(balls[i].x, balls[i].y, balls[i].radius, balls[i].fillColor, balls[i].strokeColor, balls[i].strokeWidth);
        };
    };
};

function drawCircle(x: number, y: number, radius: number, fillColor: string, strokeColor: string, strokeWidth: number) {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fillStyle = fillColor;
  context.fill();
  context.strokeStyle = strokeColor;
  context.lineWidth = strokeWidth;
  context.stroke();
  context.closePath()
};