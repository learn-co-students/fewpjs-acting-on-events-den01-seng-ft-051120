// Your code here
let dodger = document.getElementById("dodger");
// document.addEventListener('keydown', function(e) {console.log(e.key)})

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});

function moveDodgerLeft() {
  let left = fromLeft()

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let left = fromLeft()
  
  if (left < 360) {
      dodger.style.left = `${left + 1}px`;
  }
}

function moveDodgerUp() {
  let bottom = fromBottom()

  if (bottom < 380) {
    dodger.style.bottom = `${bottom + 1}px`
  }
}

function moveDodgerDown() {
  let bottom = fromBottom()

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`
  }
}

function fromLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");

  return parseInt(leftNumbers, 10);
}

function fromBottom() {
  let bottomNumbers = dodger.style.bottom.replace("px", "");

  return parseInt(bottomNumbers, 10);
}
