let dodger = document.getElementById("dodger");
let box = document.getElementById("game")

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
});



function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

console.log(box.style.left)
console.log(dodger.style.width)
console.log(dodger.width)

function moveDodgerRight() {

    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    // let widthNumbers = dodger.style.width.replace("px", "");
    // console.log(widthNumbers)
    // let width = parseInt(widthNumbers, 10)
    // console.log(left)
    // console.log(width)

    // if ((left + width) < box.style.width) {
    //     dodger.style.left = `${left + 1}px`
    // }

    if (left < 360) {
        dodger.style.left = `${left + 1}px`
    }
}