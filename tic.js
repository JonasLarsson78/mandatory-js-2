let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");

let result = document.querySelector("#result");

let turn = "X";

function onClick(e) {
let element = e.target;
xo(element);
checkWinO();	
checkWinX();	
	
function checkWinX(){
	
	let vinstX = "Vinst till X !!";
	
	if (btn1.value === "X" && btn2.value === "X" && btn3.value === "X"){
	$ (result).text(vinstX);
	}
	else if (btn4.value === "X" && btn5.value === "X" && btn6.value === "X"){
	$ (result).text(vinstX);
	}
	else if (btn7.value === "X" && btn8.value === "X" && btn9.value === "X"){
	$ (result).text(vinstX);
	}
	else if (btn1.value === "X" && btn4.value === "X" && btn7.value === "X"){
	$ (result).text(vinstX);
	}
	else if (btn2.value === "X" && btn5.value === "X" && btn8.value === "X"){
	$ (result).text(vinstX);
	}
	else if (btn3.value === "X" && btn6.value === "X" && btn9.value === "X"){
	$ (result).text(vinstX);
	}
	else if (btn1.value === "X" && btn5.value === "X" && btn9.value === "X"){
	$ (result).text(vinstX);
	}
	else if (btn3.value === "X" && btn5.value === "X" && btn7.value === "X"){
	$ (result).text(vinstX);
	}
	else if (btn1.value !== " " && btn2.value !== " " && btn3.value !== " " && btn4.value !== " " && btn5.value !== " " && btn6.value !== " " && btn7.value !== " " && btn8.value !== " " && btn9.value !== " "){
		$ (result).text("Ingen har vunnit.");
	}
}	

function checkWinO(){
	
	let vinstY = "Vinst till O !!";
	
	if (btn1.value === "O" && btn2.value === "O" && btn3.value === "O"){
	$ (result).text(vinstY);
	}
	else if (btn4.value === "O" && btn5.value === "O" && btn6.value === "O"){
	$ (result).text(vinstY);
	}
	else if (btn7.value === "O" && btn8.value === "O" && btn9.value === "O"){
	$ (result).text(vinstY);
	}
	else if (btn1.value === "O" && btn4.value === "O" && btn7.value === "O"){
	$ (result).text(vinstY);
	}
	else if (btn2.value === "O" && btn5.value === "O" && btn8.value === "O"){
	$ (result).text(vinstY);
	}
	else if (btn3.value === "O" && btn6.value === "O" && btn9.value === "O"){
	$ (result).text(vinstY);
	}
	else if (btn1.value === "O" && btn5.value === "O" && btn9.value === "O"){
	$ (result).text(vinstY);
	}
	else if (btn3.value === "O" && btn5.value === "O" && btn7.value === "O"){
	$ (result).text(vinstY);
	}
	
}		
	
function xo(x){
		
	if (x.value === " " && turn === "X"){
		$(x).attr("value", turn);
		$(x).css('background-color', 'red');
		turn = "O";
	}
	if (x.value === " " && turn === "O"){
		$ (x).attr("value", turn);
		$(x).css('background-color', 'blue');
		turn = "X";
	}
}
	
}

function newGame(){
	let myButtons = document.querySelectorAll("input[type=button]");
	for (let i = 0; i < myButtons.length; i++){
		$(myButtons[i]).attr("value", " ");
		$(myButtons[i]).css('background-color', '');
	}
	turn = "X";
	$ (result).text("Vem vinner? X eller O.");
}

let myButtons = document.querySelectorAll("input[type=button]");
for (let i = 0; i < myButtons.length; i++){
let myButton = myButtons[i];
myButton.addEventListener("click", onClick);
}
let restart = document.querySelector("#restart");
restart.addEventListener("click", newGame);
