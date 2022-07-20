const idInput = document.querySelector(".idInput");
const idBtn = document.getElementsByClassName("idBtn");
const idResult = document.querySelector(".idResult");

const idValidate = /^0\d{13}$|1\d{13}$/;
idBtn[0].addEventListener("click", () => {
    if (idValidate.test(idInput.value)){
        idResult.innerText = "OK";
    }
    else {
        idResult.innerText = "not ok"
    }
})

const block = document.querySelector (".block2")
let num = 0;
const plus = function(leftBlock){
    num++;
    block.style.left = `${num}px`;
    if (num < 50) {
        return plus();
        
    }
    else if (num > 349) {
        num = 0;
    }
    else {
        num += 50;
    }
    leftBlock();
}

block.addEventListener("click", plus)