//JAVASCRIPT CODE FOR THE CALCULATOR FUNCTIONALITY BY BLESSING EMEJULU

//function for delete buttton
function deleteChar(screen) {
	screen.value = screen.value.substring(0, screen.value.length - 1)
}

//function for decimal button
function addChar(screen, character) {
	if(screen.value == null || !screen.value){
		screen.value = "";
	}

	else{
		screen.value += character;
	}
}

//function for equal to button
function solve(screen){
	let result = eval(screen.value);
	screen.value = result;
}

// function for calculating square of a number
function sq(screen){
let sqr = eval(screen.value * screen.value);
screen.value = sqr;
}

//function for calculating percentage
function percent(screen){
	let percentage = screen.value / 100;
	screen.value = percentage;
}
