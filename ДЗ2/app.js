const block = document.querySelector(".block");

let position = 0;
let topPosition = 0;

const move = () => {
  if (position <= 360 && topPosition == 0) {
    position += 16;
    block.style.left = `${position}px`;
    setTimeout(move, 200);
  } else if (position >= 360 && topPosition <= 360) {
    topPosition += 16;
    block.style.top = `${topPosition}px`;
    setTimeout(move, 200);
  } else if (topPosition >= 360 && position != 0) {
    position -= 16;
    block.style.left = `${position}px`;
    setTimeout(move, 200);
  } else if (position == 0 && topPosition != 0) {
    topPosition -= 16;
    block.style.top = `${topPosition}px`;
    setTimeout(move, 200);
  }
};

move();
let i = 0;
function any() {
  i++;
  console.log(i + " сек.");
}

id = setInterval(any, 1000);
