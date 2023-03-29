const container = document.querySelector('content');
const color = document.querySelector('input');

const defaultColor = '#fff';
content.style.backgroundColor = `${defaultColor}`;

function mudarCor(){
    content.style.backgroundColor = `${color.value}`
}

console.log(mudarCor)