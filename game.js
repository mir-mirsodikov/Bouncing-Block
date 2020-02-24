"use strict";

class Cube { // Cube class
  constructor()
  {
    var coin = Math.floor(Math.random() * 3) // random number
    this.speed_x = speed;
    this.speed_y = speed;
    if (coin == 0) { //random directions
      this.speed_x *= -1;
      this.speed_y *= -1;
    }
    else if (coin == 1)
    {
      this.speed_x *= -1
    }
    else if (coin == 2)
    {
      this.speed_y *= -1;
    }

    while (this.position_x % cube.offsetWidth != 0) // set a position for the cube that works with the width of container
      this.position_x = Math.floor(Math.random() * (container.offsetWidth - cube.offsetWidth));
    while (this.position_y % cube.offsetHeight != 0)
      this.position_y = Math.floor(Math.random() * (container.offsetHeight - cube.offsetHeight));
  }

  getPosition_X()
  {
    return this.position_x;
  }

  getPosition_Y()
  {
    return this.position_y;
  }

  getSpeed_X()
  {
    return this.speed_x;
  }

  getSpeed_Y()
  {
    return this.speed_y;
  }

  setSpeed_X(x)
  {
    this.speed_x = x;
  }

  setSpeed_Y(y)
  {
    this.speed_y = y;
  }
}

var cube = document.getElementById("cube");
var container = document.getElementById("container");
var cubeLeft = 0; // horizontal movement
var cubeTop = 0; // vertical movement
var speed = 1;
var gameCube = new Cube();
var move;

window.onload = setUp;

function setUp() // set up the game
{
  cubeLeft = gameCube.getPosition_X();
  cubeTop = gameCube.getPosition_Y();
  cube.style.left = cubeLeft + "px"; // horizontal position
  cube.style.top = cubeTop + "px";  // vertical position

  move = setInterval(moveCube, 1);
}

function moveCube()
{
  cubeLeft += gameCube.getSpeed_X();
  cubeTop += gameCube.getSpeed_Y();

  if (cubeLeft > container.offsetWidth - cube.offsetWidth) // right wall
  {
    cubeLeft -= speed;
    gameCube.setSpeed_X(gameCube.getSpeed_X() * -1); //bounce
  }

  if (cubeLeft < 0) //left wall
  {
    cubeLeft += speed;
    gameCube.setSpeed_X(gameCube.getSpeed_X() * -1); //bounce
  }

  if (cubeTop > container.offsetHeight - cube.offsetHeight) // bottom
  {
    cubeTop -= speed;
    gameCube.setSpeed_Y(gameCube.getSpeed_Y() * -1); //bounce
  }

  if (cubeTop < 0) // top
  {
    cubeTop += speed;
    gameCube.setSpeed_Y(gameCube.getSpeed_Y() * -1); //bounce
  }

  cube.style.left = cubeLeft + "px"; // movement
  cube.style.top = cubeTop + "px";
}
