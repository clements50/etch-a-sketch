//"use strict";

let board = function (size) {
  let sketchBoard = document.querySelector("#board");
  sketchBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let resetBtn = document.querySelector(".reset-btn");
  let eraseBtn = document.querySelector(".eraser-btn ");
  let blackBtn = document.querySelector(".black-btn ");
  let redBtn = document.querySelector(".red-btn ");
  let blueBtn = document.querySelector(".blue-btn ");
  let greenBtn = document.querySelector(".green-btn ");
  let yellowBtn = document.querySelector(".yellow-btn ");

  for (i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.style.border = "1px solid black";
    sketchBoard.appendChild(square);

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    blackBtn.addEventListener("click", () => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      });
    });

    redBtn.addEventListener("click", () => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red";
      });
    });

    blueBtn.addEventListener("click", () => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "blue";
      });
    });

    greenBtn.addEventListener("click", () => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "green";
      });
    });

    yellowBtn.addEventListener("click", () => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "yellow";
      });
    });

    eraseBtn.addEventListener("click", () => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "white";
      });
    });

    resetBtn.addEventListener("click", () => {
      square.style.backgroundColor = "white";
    });
  }
};

board(16);

//gets slider value

let slider = document.getElementById("#board-slider");
let output = document.getElementById(".slider-val");
output.textContent = slider.value;

console.log(slider.value);
