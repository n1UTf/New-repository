let x = 1;
let y = 1;
let tile = document.querySelector(`tr:nth-child(${y}) td:nth-child(${x}) img`);
tile.src = "chudjak.png";

function move(e){
tile.src = "t.png";

switch(e.key){
case "ArrowRight":
	x++;
	break;
case "ArrowLeft":
	x--;
	break;
case "ArrowDown":
	y++;
	break;
case "ArrowUp":
	y--;
	break;
}

tile = document.querySelector(`tr:nth-child(${y}) td:nth-child(${x}) img`);
tile.src = "chudjak.png";
}

document.addEventListener("keydown", move);