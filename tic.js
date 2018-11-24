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

let turn = "X";

let scoreO = 0;
let scoreX = 0;
begin();

/*Kör spelet*/
function onClick(e) {
let element = e.target;
xo(element);
    
/* Kollar om vinst*/
function checkWin(tr){
       if (btn1.value === tr && btn2.value === tr && btn3.value === tr){
		blink(btn1); blink(btn2); blink(btn3); 
		win();
	}
	else if (btn4.value === tr && btn5.value === tr && btn6.value === tr){
		blink(btn4); blink(btn5); blink(btn6);
		win();
	}
	else if (btn7.value === tr && btn8.value === tr && btn9.value === tr){
		blink(btn7); blink(btn8); blink(btn9);
		win();	
	}
	else if (btn1.value === tr && btn4.value === tr && btn7.value === tr){
		blink(btn1); blink(btn4); blink(btn7);
		win();	
	}
	else if (btn2.value === tr && btn5.value === tr && btn8.value === tr){
		blink(btn2); blink(btn5); blink(btn8);
		win();	
	}
	else if (btn3.value === tr && btn6.value === tr && btn9.value === tr){
		blink(btn3); blink(btn6); blink(btn9);
		win();	
	}
	else if (btn1.value === tr && btn5.value === tr && btn9.value === tr){
		blink(btn1); blink(btn5); blink(btn9);
		win();	
	}
	else if (btn3.value === tr && btn5.value === tr && btn7.value === tr){
		blink(btn3); blink(btn5); blink(btn7);
		win();
	}
    else if (btn1.value !== " " && btn2.value !== " " && btn3.value !== " " && btn4.value !== " " && btn5.value !== " " && btn6.value !== " " && btn7.value !== " " && btn8.value !== " " && btn9.value !== " "){
		$ (result).text("Ingen har vunnit.");
	} 
}
/* Räknar poäng och tallar om vem som vinner*/    
function win(){
    
    let vinstO = "Vinst till O !!";
    let vinstX = "Vinst till X !!";   
        
    if (turn === "X"){
       $ (result).text(vinstO);
		scoreO++;
		$ (scoreOO).text(scoreO);
		disabled();	 
    }
    else if (turn === "O"){
        $ (result).text(vinstX);
		scoreX++;
		$ (scoreXX).text(scoreX);
		disabled();
    }
}	
	
/* Varannan X - O och stylar*/	
function xo(x){
		
	if (x.value === " " && turn === "X"){
		$(x).attr("value", turn);
		$(x).css("background-color", "#222222");
		$(x).css("color", "red");
		turn = "O";
        checkWin("X");
        
	}
	else if (x.value === " " && turn === "O"){
		$(x).attr("value", turn);
		$(x).css("background-color", "#222222");
		$(x).css("color", "blue");
		turn = "X";
        checkWin("O"); 
	}
  }
}

/* Reset kanpp*/
function newGame(){
	let myButtons = document.querySelectorAll("input[type=button]");
	for (let i = 0; i < myButtons.length; i++){
        let button = myButtons[i];
		$(button).attr("value", " ");
		$(button).css("background-color", "");
		$(button).removeAttr("disabled");
	}
	begin();
	$ (result).text("Vem vinner ? X eller O.");
	noBlink(btn1); noBlink(btn2); noBlink(btn3);
	noBlink(btn4); noBlink(btn5); noBlink(btn6); 
	noBlink(btn7); noBlink(btn8); noBlink(btn9); 
}

/* Stänger av så man inte kan klicka på fler när någon vunnit*/
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
	if (radioO.checked && btn1.value === " " && btn2.value === " " && btn3.value === " " && btn4.value === " " && btn5.value === " " && btn6.value === " " && btn7.value === " " && btn8.value === " " && btn9.value === " "){
		turn = "O"; 
	}
	if (radioX.checked && btn1.value === " " && btn2.value === " " && btn3.value === " " && btn4.value === " " && btn5.value === " " && btn6.value === " " && btn7.value === " " && btn8.value === " " && btn9.value === " "){
		turn = "X";
	}
}

/* Gör att rätt rad blinkar*/
function blink(id){
	id.style.animation = "blinker 0.9s linear infinite";
}

/* Stänger av blink*/
function noBlink(id){
	id.style.animation = "";
}

let myButtons = document.querySelectorAll("input[type=button]");
for (let i = 0; i < myButtons.length; i++){
let myButton = myButtons[i];
myButton.addEventListener("click", onClick);
}

let restart = document.querySelector("#restart");
restart.addEventListener("click", newGame);


