//*******Tools*******


//dialogue system
var userInput = require('readline');
var userPrompt = userInput.createInterface(process.stdin, process.stdout);

/* User Question Code...

userPrompt.question("", function(entry) {

});

*/

//sleep function
var sleep = function(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds){
		break;
		}
    }
};

//wipe wipe wipe the screen
var wipeScreen = function () {
	return process.stdout.write('\033c');
};

//*******Constructors*******




//*******Variables*******

var rock;
var paper;
var scissors;
var lizard;
var spock;

//*******Functions*******

function mainMenu() {
	wipeScreen();
	menuAnimation();
	userPrompt.question("", function(choice) {
		if (choice == "1") {

		} else if (choice == "2") {

		} else if (choice == "3") {

		} else if (choice == "4") {

		} else if (choice == "5") {

		} else if (choice == "0") {

		} else {
			console.log("INCORRECT ENTRY.")
			sleep(2000);
			sleep(1000);
			mainMenu();
		}
	});
}

function menuAnimation() {
	sleep(1000);
	console.log("\n\n\n\n\n         ROCK                              ");
	sleep(200);
	wipeScreen();
	sleep(200);
	console.log("\n\n                  PAPER                    ");
	sleep(200);
	wipeScreen();
	sleep(200);
	console.log("\n\n\n\n\n                           SCISSORS        ");
	sleep(200);
	wipeScreen();
	sleep(200);
	console.log("\n\n\n\n\n\n\n\n                  LIZARD                   ");
	sleep(200);
	wipeScreen();
	sleep(200);
	console.log("\n\n\n\n\n                   SPOCK                   ");
	sleep(200);
	wipeScreen();
	sleep(2000);
	console.log("\n** Rock, Paper, Scissors, Lizard, Spock! **");
	sleep(1000);
	console.log("\n     - - - - Choose a gesture! - - - - \n")
	console.log("               1) Rock\n               2) Paper\n               3) Scissors\n               4) Lizard\n               5) Spock\n\n               0) Quit")
}

function comparison() {

}

function win() {

}

function lose() {

}

function draw() {

}






//*******Runners********

mainMenu();












