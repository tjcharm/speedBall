export class Paddle {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.width = 150;
    this.height = 20;

    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 10,
    };

    this.speed = 0;
    this.maxSpeed = 20;
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }
  moveRight() {
    this.speed = this.maxSpeed;
  }

  maxSpeedUp() {
    this.maxSpeed++;
  }

  maxSpeedDown() {
    this.maxSpeed--;
  }
  stop() {
    this.speed = 0;
  }

  draw(context) {
    context.fillStyle = "#0ff";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    this.position.x += this.speed;
  }
}
