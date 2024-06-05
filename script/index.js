let inp = document.querySelector('input')
let btn = document.querySelector('button')
let ans = document.querySelector('span')
let i = 0

btn.addEventListener('click',nextNum)

function nextNum(){
    let ranNum = inp.value.split(',').map(Number);
    if(i<ranNum.length){
        ans.innerText = ranNum[i]
    }
    i++
}



