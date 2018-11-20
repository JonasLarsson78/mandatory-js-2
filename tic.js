/* Selectors till alla knappar och resultat*/
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");
let radioX = document.querySelector("#radioX");
let radioO = document.querySelector("#radioO");
let result = document.querySelector("#result");
let scoreXX = document.querySelector("#scoreX");
let scoreOO = document.querySelector("#scoreO");
/* Vilket turn som börjar*/
let turn = "X";

let scoreO = 0;
let scoreX = 0;

begin();
/*Kör spelet*/
function onClick(e) {
let element = e.target;
xo(element);
checkWinO();	
checkWinX();
/* Kollar X vinst*/	
function checkWinX(){
	
	let vinstX = "Vinst till X !!";
	
	function winX(){
		$ (result).text(vinstX);
		scoreX++;
		$ (scoreXX).text(scoreX);
		disabled();	
	}
	
	if (btn1.value === "X" && btn2.value === "X" && btn3.value === "X"){
	winX();	
	}
	else if (btn4.value === "X" && btn5.value === "X" && btn6.value === "X"){
	winX();	
	}
	else if (btn7.value === "X" && btn8.value === "X" && btn9.value === "X"){
	winX();
	}
	else if (btn1.value === "X" && btn4.value === "X" && btn7.value === "X"){
	winX();	
	}
	else if (btn2.value === "X" && btn5.value === "X" && btn8.value === "X"){
	winX();	
	}
	else if (btn3.value === "X" && btn6.value === "X" && btn9.value === "X"){
	winX();
	}
	else if (btn1.value === "X" && btn5.value === "X" && btn9.value === "X"){
	winX();
	}
	else if (btn3.value === "X" && btn5.value === "X" && btn7.value === "X"){
	winX();
	}
	else if (btn1.value !== " " && btn2.value !== " " && btn3.value !== " " && btn4.value !== " " && btn5.value !== " " && btn6.value !== " " && btn7.value !== " " && btn8.value !== " " && btn9.value !== " "){
		$ (result).text("Ingen har vunnit.");
	}
}	
/* Kollar O vinst*/
function checkWinO(){
	
	let vinstY = "Vinst till O !!";
	
	function winO(){
		$ (result).text(vinstY);
		scoreO++;
		$ (scoreOO).text(scoreO);
		disabled();	
	}
	
	if (btn1.value === "O" && btn2.value === "O" && btn3.value === "O"){
	winO();
	}
	else if (btn4.value === "O" && btn5.value === "O" && btn6.value === "O"){
	winO();
	}
	else if (btn7.value === "O" && btn8.value === "O" && btn9.value === "O"){
	winO();	
	}
	else if (btn1.value === "O" && btn4.value === "O" && btn7.value === "O"){
	winO();	
	}
	else if (btn2.value === "O" && btn5.value === "O" && btn8.value === "O"){
	winO();	
	}
	else if (btn3.value === "O" && btn6.value === "O" && btn9.value === "O"){
	winO();	
	}
	else if (btn1.value === "O" && btn5.value === "O" && btn9.value === "O"){
	winO();	
	}
	else if (btn3.value === "O" && btn5.value === "O" && btn7.value === "O"){
	winO();
	}
	
}		
/* Varannan X - O och stylar*/	
function xo(x){
		
	if (x.value === " " && turn === "X"){
		$(x).attr("value", turn);
		$(x).css("background-color", "red");
		turn = "O";
	}
	if (x.value === " " && turn === "O"){
		$ (x).attr("value", turn);
		$(x).css("background-color", "blue");
		turn = "X";
	}
}
}
/* Reset kanpp*/
function newGame(){
	let myButtons = document.querySelectorAll("input[type=button]");
	for (let i = 0; i < myButtons.length; i++){
		$(myButtons[i]).attr("value", " ");
		$(myButtons[i]).css("background-color", "");
		$(myButtons[i]).removeAttr("disabled");
	}
	begin();
	$ (result).text("Vem vinner ? X eller O.");
}
/* Stänger av så man inte kan klicka på fler när någon vunit*/
function disabled(){
	let myButtons = document.querySelectorAll("input[type=button]");
	for (let i = 0; i < myButtons.length; i++){
		$(myButtons[i]).attr("disabled", "disabled");
	}
}
/* Nollsäller poäng*/
function resetScore(){
	scoreO = 0;
	scoreX = 0;
	$ (scoreXX).text(scoreX);
	$ (scoreOO).text(scoreO);
}
/* Väljer vem som börjar*/
function begin(){
	if (radioO.checked && btn1 === "" && btn2 === "" && btn3 === "" && btn4 === "" && btn5 === "" && btn6 === "" && btn7 === "" && btn8 === "" && btn9 === ""){
		turn = "O";
	}
	if (radioX.checked && btn1 === "" && btn2 === "" && btn3 === "" && btn4 === "" && btn5 === "" && btn6 === "" && btn7 === "" && btn8 === "" && btn9 === ""){
		turn = "X";
	}
}

let myButtons = document.querySelectorAll("input[type=button]");
for (let i = 0; i < myButtons.length; i++){
let myButton = myButtons[i];
myButton.addEventListener("click", onClick);
}
let restart = document.querySelector("#restart");
restart.addEventListener("click", newGame);
