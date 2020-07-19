// IMPORTS PADDLE
import { Paddle } from "./paddle.js";
import { goLeft, goRight } from "./main.js";
// EXPORTS THE INPUT HANDLER CLASS, CALLS ON CERTAIN PADDLE METHODS
// BASED UPON USER INPUT.
export class InputHandler {
  // A CONSTRUCTOR THAT TAKES IN PADDLE.
  // THAN CREATES A EVENT LISTENER FOR THE DOCUMENT, WHICH IS LISTENING FOR
  // A KEYDOWN EVENT, WHICH A FUNCTION IS PASSED AS THE FUNCTION CALLED WHEN
  // A KEYDOWN IS PERFORMED, THE EVENT TAKEN AS ARG, THE EVENT.KEYCODE
  // METHOD RETURNS A 37 FOR LEFT ARROW KEY AND 39 FOR RIGHT ARROW KEY.
  // A SWITCH STATEMENT TAKES IN THE KEYCODE, AND EITHER CALLS THE
  // PADDLE MOVELEFT OR MOVERIGHT FUNCTION, THEN BREAKS.
  constructor(paddle) {
    goLeft.addEventListener("touchstart", function () {
      paddle.moveLeft();
    });
    goRight.addEventListener("touchstart", function () {
      paddle.moveRight();
    });
    goLeft.addEventListener("touchend", function () {
      paddle.stop();
    });
    goRight.addEventListener("touchend", function () {
      paddle.stop();
    });
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 65:
          paddle.moveLeft();
          break;
        case 68:
          paddle.moveRight();
          break;
        case 87:
          paddle.maxSpeedUp();
          break;
        case 83:
          paddle.maxSpeedDown();
          break;
      }
    });
    // USES A KEYUP INSTEAD OF KEYDOWN TO CALL THE PADDLE.STOP METHOD
    // WHENEVER THE KEY IS LIFTED BACK UP, TO STOP THE PADDLE FROM MOVING.
    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 65:
          if (paddle.speed <= 0) paddle.stop();
          break;
        case 68:
          if (paddle.speed >= 0) paddle.stop();
          break;
      }
    });
  }
}
