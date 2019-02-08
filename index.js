const display = document.querySelector('.calculator input[name=display]');

document.querySelectorAll('.digits button, .opers button').forEach(btn => btn.addEventListener('click', digitOperPressed));

function digitOperPressed(e) {
    let disArr = display.value.split('');
    const opers = ['*', '/', '+', '-'];
    if ((~opers.indexOf(disArr[disArr.length-1])) && (~opers.indexOf(e.target.innerText))){
        display.value = disArr.slice(0, -1).join('');
    } else {
        display.value += e.target.innerText;
    }
};

document.querySelector('.result').addEventListener('click', function () {
    display.value = eval(display.value);
});

document.querySelector('.clear').addEventListener('click', function () {
    display.value = '';
});

document.getElementById('sqrt').addEventListener('click', sqrtMath);

function sqrtMath(){
    display.value = Math.sqrt(display.value);
}