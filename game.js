
document.getElementById('option1').innerHTML = 'Start game';
document.getElementById('level_title').innerHTML = 'The Chambers';



function room1() {
	console.log("room1()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go To: Bathrooms';
	opt1.setAttribute("onClick", "javascript:showCassette(); javascript:hidePhone(); javascript:showKnife(); javascript:Level2();");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go To: Bonnies Room';
	opt2.setAttribute("onClick", "javascript:showClipboard(); javascript:Level3(); javascript:hidePhone(); ");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Go To: Assembly Hall';
	opt3.setAttribute("onClick", "javascript:showKey();javascript:showWolf(); javascript:showHint(); javascript:hidePhone(); javascript:Level4();");


	document.getElementById('level_title').innerHTML = 'Jasons Room';
	document.getElementById('level_image').src = 'img/room1.jpg';
}


function Level3() {
	console.log("Level2()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go To: Bathrooms';
	opt1.setAttribute("onClick", "javascript:showCassette();javascript:hideClipboard(); javascript:showKnife();  javascript:Level2();");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go To: Jasons Room';
	opt2.setAttribute("onClick", "javascript:room1();javascript:hideClipboard(); javascript:showPhone();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Go To: Assembly Hall';
	opt3.setAttribute("onClick", "javascript:Level4();javascript:showKey();javascript:showWolf(); javascript:showHint(); javascript:hideClipboard(); ");

	document.getElementById('level_title').innerHTML = 'Bonnies Room';
	document.getElementById('level_image').src = 'img/room2.jpg';
}


function Level2() {
	console.log("Level3()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go To: Bonnies Room';
	opt1.setAttribute("onClick", "javascript:hideCassette();javascript:showClipboard(); javascript:hideKnife();  javascript:Level3();");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go To: Jasons Room';
	opt2.setAttribute("onClick", "javascript:hideCassette(); javascript:showPhone(); javascript:hideKnife(); javascript:room1();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '';
	opt3.setAttribute("onClick", "javascript:Level2();");

	document.getElementById('level_title').innerHTML = 'Bathrooms';
	document.getElementById('level_image').src = 'img/bathrooms.jpg';
}

function Level4() {
	console.log("Level4()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go To: Bonnies Room';
	opt1.setAttribute("onClick", "javascript:Level3();javascript:hideHint();javascript:hideWolf(); javascript:showClipboard();javascript:hideKey(); ");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go To: Jasons Room';
	opt2.setAttribute("onClick", "javascript:room1();javascript:hideHint();javascript:hideWolf();javascript:hideWolf(); javascript:showPhone(); javascript:hideKey();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Go To: The Library';
	opt3.setAttribute("onClick", "javascript:Level5();javascript:hideHint();javascript:hideWolf(); javascript:hideKey(); ");

	document.getElementById('level_title').innerHTML = 'Assembly Hall';
	document.getElementById('level_image').src = 'img/main.jpg';
}

function Level5() {
	console.log("Level5()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go To: Assembly Hall';
	opt1.setAttribute("onClick", "javascript:Level4();javascript:showKey();javascript:showWolf(); javascript:showHint();");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go To: The Kitchen';
	opt2.setAttribute("onClick", " javascript:Level6();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '';
	opt3.setAttribute("onClick", "javascript:Level5();");


	document.getElementById('level_title').innerHTML = 'The Library';
	document.getElementById('level_image').src = 'img/library1.jpg';

}


function Level6() {
	console.log("Level6()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go To: The Library';
	opt1.setAttribute("onClick", "; javascript:Level5();");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go To: The Exit';
	opt2.setAttribute("onClick", "javascript:levelCheck(); ");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '';
	opt3.setAttribute("onClick", "javascript:Level6();");


	document.getElementById('level_title').innerHTML = 'The Kitchen';
	document.getElementById('level_image').src = 'img/kitchen.jpg';

}
function levelCheck(){
		if(items.key == true){
			Level7(); showImage();
		} else {
			alert('the door is locked');
		}
	}

function Level7() {
	console.log("Level7()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go To: The Kitchen';
	opt1.setAttribute("onClick", "javascript:hideImage(); javascript:codeHide(); javascript:Level6();");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = '';
	opt2.setAttribute("onClick", "javascript:Level7();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '';
	opt3.setAttribute("onClick", "javascript:Level7();");


	document.getElementById('level_title').innerHTML = 'The Exit';
	document.getElementById('level_image').src = 'img/exit.jpg';


}

function level8() {
	console.log("Level8()")

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go back to room';
	opt1.setAttribute("onClick", "javascript:Level3(); javascript:hidePhone(); javascript: showClipboard();");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = '';
	opt2.setAttribute("onClick", "javascript:Level8();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '';
	opt3.setAttribute("onClick", "javascript:Level8();");


	document.getElementById('level_title').innerHTML = 'The clipboard';
	document.getElementById('level_image').src = 'img/room2card2.jpg';

}
function uitleg() {
	console.log("uitleg()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Start game';
	opt1.setAttribute("onClick", "javascript:room1(); javascript:showPhone();");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Map';
	opt2.setAttribute("onClick", "javascript:map();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '';
	opt3.setAttribute("onClick", "");

	document.getElementById('level_title').innerHTML = 'Before you play';
	document.getElementById('level_image').src = 'img/uitleg1.jpg';
}
function map() {
	console.log("map()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Start game';
	opt1.setAttribute("onClick", "javascript:room1(); javascript:showPhone();");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Before you play';
	opt2.setAttribute("onClick", "javascript:uitleg();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '';
	opt3.setAttribute("onClick", "");

	document.getElementById('level_title').innerHTML = 'Map';
	document.getElementById('level_image').src = 'img/map1.png';
}


	function showImage() {
	document.getElementById("fence").style.visibility = "visible";
}
	function hideImage() {
	document.getElementById("fence").style.visibility = "hidden";
}
	function code() {
	document.getElementById("code").style.visibility = "visible";
}
	function codeHide() {
	document.getElementById("code").style.visibility = "hidden";
}
	function showCassette() {
	document.getElementById("cassette").style.visibility = "visible";
}
	function hideCassette() {
	document.getElementById("cassette").style.visibility = "hidden";
}
	function showParagraph() {
	document.getElementById("cass").style.visibility = "visible";
}
	function showPhone() {
	document.getElementById("nokia").style.visibility = "visible"
	}
	function hidePhone() {
	document.getElementById("nokia").style.visibility = "hidden"
	}
	function showClipboard() {
	document.getElementById("clipboard").style.visibility = "visible"
	}
	function hideClipboard() {
	document.getElementById("clipboard").style.visibility = "hidden"
	}
	function showKey() {
	document.getElementById("key").style.visibility = "visible"
	}
	function hideKey() {
	document.getElementById("key").style.visibility = "hidden"
	}
	function showGameover() {
	document.getElementById("gameover").style.visibility = "visible"
	}
	function showHint() {
	document.getElementById("hint").style.visibility = "visible"	
	}
	function hideHint() {
	document.getElementById("hint").style.visibility = "hidden"	
	}
	function showWolf(){
	document.getElementById("wolf").style.visibility = "visible"
	}
	function hideWolf() {
	document.getElementById("wolf").style.visibility = "hidden"	
	}
	function showKnife(){
	document.getElementById("knife").style.visibility = "visible"	
	}
	function hideKnife(){
	document.getElementById("knife").style.visibility = "hidden"	
	}
	function deathCheck(){
		if(items2.knife == true){
			alert('Did you really think that fighting a wolf with a knife was a good idea?');
			gameover();
		} else {
			gameover();
		}
	}

	function gameover(){
	var snd = new Audio("music/scream.wav"); 
	snd.play();
	showGameover();
	hideClipboard(); hidePhone(); hideImage(); codeHide(); hidePhone(); hideKey(); hideHint(); hideWolf();
	document.getElementById('level_image').src = 'img/gameover.png';
	var opt1 = document.getElementById('option1');
	opt1.innerHTML = '';
	opt1.setAttribute("onClick", "");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = '';
	opt2.setAttribute("onClick", "");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '';
	opt3.setAttribute("onClick", "");

}
	function validateForm() {
    var x = document.forms["code"]["check"].value;
    if (x != 1937) {
        alert("Code is incorrect");
        return false;
    }
    else {
    	document.getElementById('level_image').src = 'img/forest.jpg';
    	alert("you've escaped!");
    	hideImage();
    	return false;
    }
}
var items = {
	key: false
};
var items2 = {
	knife: false
};



function pickupItem()
{
	items.key = true;
	alert("The path to the light has now opened.");
}
function pickupKnife()
{
	items2.knife = true;
	alert("Are you brave enough to fight the dangers of the night?");
	console.log(items2.knife);
}

;
console.log(items.key);
console.log(items2.knife);

function timer()
{
	startTime = Date.now();
	setInterval(function() {
		timeNow = Date.now();
		elapsedTime = Math.floor((timeNow - startTime) / 1000) ;
		timeControl();
		console.log(elapsedTime);
	 }, 400);

}
function timer()
{
	startTime = Date.now();
	setInterval(function() {
		timeNow = Date.now();
		elapsedTime = Math.floor((timeNow - startTime) / 1000) ;
		timeControl();
		console.log(elapsedTime);
	 }, 400);

}
function timeControl() {

if(elapsedTime >= 600){
	gameover();
}}

