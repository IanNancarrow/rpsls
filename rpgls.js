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

var rock = "rock";
var paper = "paper";
var scissors = "scissors";
var lizard = "lizard";
var spock = "spock";
var pChoice;

//*******Functions*******

function mainMenu() {
	wipeScreen();
	menuAnimation();
	userPrompt.question("", function(choice) {
		if (choice == "1") {
			pChoice = rock;
		} else if (choice == "2") {
			pChoice = paper;
		} else if (choice == "3") {
			pChoice = scissors;
		} else if (choice == "4") {
			pChoice = lizard;
		} else if (choice == "5") {
			pChoice = spock;
		} else if (choice == "0") {
			console.log("Thank you for playing!")
			process.exit();
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
	var comChoice = Math.floor((Math.random()* 5) + 1);
	// 1=Rock, 2=Paper, 3=Scissors, 4=Lizard, 5=Spock

	//Rock Choices
	if (pChoice == rock) {
		if (comChoice == 1) {
			comChoice = rock;
			draw();
		} else if (comChoice == 2) {
			comChoice = rock;
			lose();
		} else if (comChoice == 3) {
			comChoice = rock;
			win();
		} else if (comChoice == 4) {
			comChoice = rock;
			win();
		} else if (comChoice == 5) {
			comChoice = rock;
			lose();
		}
	}
	
}

function win() {
	sleep(1000);
	console.log("You used "+ pChoice +" against " + comChoice);
	sleep(1000);
	console.log("\n              Winner!")
	sleep(2000);
	userPrompt.question("\nPress Enter to return to Main Menu", function(entry) {
        mainMenu();
    });
}

function lose() {
	sleep(1000);
	console.log("You used "+ pChoice +" against " + comChoice);
	sleep(1000);
	console.log("\n               Lost!")
	sleep(2000);
	userPrompt.question("\nPress Enter to return to Main Menu", function(entry) {
        mainMenu();
	});
}

function draw() {
	sleep(1000);
	console.log("You used "+ pChoice +" against " + comChoice);
	sleep(1000);
	console.log("\n               Draw!")
	sleep(2000);
	userPrompt.question("\nPress Enter to return to Main Menu", function(entry) {
        mainMenu();
	});
}






//*******Runners********

//mainMenu();
comparison();











