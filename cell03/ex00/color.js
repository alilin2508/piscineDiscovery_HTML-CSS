let btn = document.querySelector('button');

btn.addEventListener('click', changeColor);

function changeColor(){
	document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
	console.log(document.body.style.backgroundColor);
}