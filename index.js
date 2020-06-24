// Your code here
let dodger = document.getElementById('dodger')
dodger.style.backgroundColor ='#FF69B4'
dodger.style.bottom = "0px"

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace('px', '')
    let left = parseInt(leftNumbers, 10)

    if(left > 0){
        dodger.style.left = `${left -1}px`
    }
}

function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace('px', '')
    let left = parseInt(rightNumbers, 10)

    if(left > 0){
        dodger.style.left = `${left + 1}px`
    }

}

document.addEventListener('keydown', function(event) {
    if(event.key === "ArrowLeft"){
       moveDodgerLeft()
    }
    if(event.key === "ArrowRight"){
       moveDodgerRight()
    }
})
