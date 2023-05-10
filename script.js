const btnVolumeRectangle = document.querySelector(".btn-volume-rectangle");
const btnAreaRectangle = document.querySelector(".btn-area-rectangle");
const btnVolumeSquare = document.querySelector(".btn-volume-square");
const btnAreaSquare = document.querySelector(".btn-area-square");
const btnVolumeCircle = document.querySelector(".btn-volume-circle");
const btnAreaCircle = document.querySelector(".btn-area-circle");
const btnVolumeTriangle = document.querySelector(".btn-volume-triangle");
const btnAreaTriangle = document.querySelector(".btn-area-triangle");
const btnCTriangle = document.querySelector(".btn-volume-c");

const pi = 3.1415;
const rectangleVolumeP = document.getElementById("rectangle-p-volume");
const rectangleAreaP = document.getElementById("rectangle-p-area");

// Rectangle functions
btnVolumeRectangle.addEventListener("click", function () {
  const rectangle_a = Number(document.querySelector(".input-a").value);
  const rectangle_b = Number(document.querySelector(".input-b").value);
  const rectangleVolume = rectangle_a * rectangle_b;
  if (rectangle_a <= 0 || rectangle_b <= 0) {
    alert("Both values must be higher then 0");
  } else {
    document.getElementById(
      "rectangle-p-volume"
    ).textContent = `Volume: ${rectangleVolume}`;
  }
});

btnAreaRectangle.addEventListener("click", function () {
  const rectangle_a = Number(document.querySelector(".input-a").value);
  const rectangle_b = Number(document.querySelector(".input-b").value);
  const rectangleArea = 2 * rectangle_a + 2 * rectangle_b;
  if (rectangle_a <= 0 || rectangle_b <= 0) {
    alert("Both values must be higher then 0");
  } else {
    document.getElementById(
      "rectangle-p-area"
    ).textContent = `Area: ${rectangleArea}`;
  }
});

// Square functions

btnVolumeSquare.addEventListener("click", function () {
  const square_a = Number(document.querySelector(".input-a-square").value);
  // const square_b = Number(document.querySelector(".input-b-square").value);
  const squareVolume = square_a * square_a;
  if (square_a <= 0) {
    alert("A must be greater then 0");
  } else {
    document.getElementById(
      "square-p-volume"
    ).textContent = `Volume: ${squareVolume}`;
  }
});

btnAreaSquare.addEventListener("click", function () {
  const square_a = Number(document.querySelector(".input-a-square").value);
  // const square_b = Number(document.querySelector(".input-b-square").value);
  const squareArea = square_a * 4;
  if (square_a <= 0) {
    alert("A must be greater then 0");
  } else {
    document.getElementById(
      "square-p-area"
    ).textContent = `Area: ${squareArea}`;
  }
});

// Circle functions

btnVolumeCircle.addEventListener("click", function () {
  const circle_r = Number(document.querySelector(".input-r-circle").value);
  // const square_b = Number(document.querySelector(".input-b-square").value);
  const circleVolume = Math.round(circle_r * circle_r * pi);
  if (circle_r <= 0) {
    alert("r must be greater then 0 ");
  } else {
    document.getElementById(
      "circle-p-volume"
    ).textContent = `Volume: ${circleVolume}`;
  }
});

btnAreaCircle.addEventListener("click", function () {
  const circle_r = Number(document.querySelector(".input-r-circle").value);
  // const square_b = Number(document.querySelector(".input-b-square").value);
  const circleArea = Math.round(2 * circle_r * pi);
  if (circle_r <= 0) {
    alert("r must be greater then 0");
  } else {
    document.getElementById(
      "circle-p-area"
    ).textContent = `Area: ${circleArea}`;
  }
});

// Triangle functions

let triangle_c = null;
btnVolumeTriangle.addEventListener("click", function () {
  const triangle_a = Number(document.querySelector(".input-a-triangle").value);
  const triangle_b = Number(document.querySelector(".input-b-triangle").value);
  const triangleVolume = Math.round((triangle_a * triangle_b) / 2);
  if (triangle_a <= 0 || triangle_b <= 0) {
    alert("a or b must be greater then 0 ");
  } else {
    if (triangle_b < triangle_a || triangle_a === triangle_b) {
      alert("b must be bigger then a or they cant be same");
    } else {
      document.getElementById(
        "triangle-p-volume"
      ).textContent = `Volume: ${triangleVolume}`;
    }
  }
});

btnCTriangle.addEventListener("click", function () {
  const triangle_a = Number(document.querySelector(".input-a-triangle").value);
  const triangle_b = Number(document.querySelector(".input-b-triangle").value);
  triangle_c = Math.round(
    Math.sqrt(Math.pow(triangle_a, 2) + Math.pow(triangle_b, 2))
  );
  // const square_b = Number(document.querySelector(".input-b-square").value);
  if (triangle_a <= 0 || triangle_b <= 0) {
    alert("r must be greater then 0");
  } else {
    if (triangle_b < triangle_a || triangle_a === triangle_b) {
      alert("b must be bigger then a or they cant be same");
    } else {
      document.getElementById("triangle-p-c").textContent = `c: ${triangle_c}`;
    }
  }
});

btnAreaTriangle.addEventListener("click", function () {
  // const square_b = Number(document.querySelector(".input-b-square").value);
  const triangle_a = Number(document.querySelector(".input-a-triangle").value);
  const triangle_b = Number(document.querySelector(".input-b-triangle").value);
  const triangleArea = triangle_a + triangle_b + triangle_c;

  if (triangle_c === null) {
    alert("You must calculate c first!");
  } else {
    if (triangle_a <= 0 || triangle_b <= 0) {
      alert("a or b must be greater then 0");
    } else {
      if (triangle_b < triangle_a || triangle_a === triangle_b) {
        alert("b must be bigger then a or they cant be same");
      } else {
        document.getElementById(
          "triangle-p-area"
        ).textContent = `Area: ${triangleArea}`;
      }
    }
  }
});
