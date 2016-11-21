// javascript library for simple game development

document.getElementById('option1').innerHTML = 'Start game';
document.getElementById('level_title').innerHTML = 'The Chambers';


// jquery variant
//$('#option1').html('Dit is keuze 1');


// https://www.youtube.com/watch?v=4ba1BqJ4S2M



function room1() {
	console.log("room1()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go To: Bathrooms';
	opt1.setAttribute("onClick", "javascript:Level2();");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go To: Bonnies Room';
	opt2.setAttribute("onClick", "javascript:Level3();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Go To: Assembly Hall';
	opt3.setAttribute("onClick", "javascript:Level4();");


	document.getElementById('level_title').innerHTML = 'Jasons Room';
	document.getElementById('level_image').src = 'img/room1.jpg';



function Level3() {
	console.log("Level2()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go To: Bathrooms';
	opt1.setAttribute("onClick", "javascript:Level2();");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go To: Jasons Room';
	opt2.setAttribute("onClick", "javascript:room1();");
	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Go To: Assembly Hall';
	opt3.setAttribute("onClick", "javascript:Level4();");

	document.getElementById('level_title').innerHTML = 'Bonnies Room';
	document.getElementById('level_image').src = 'img/room2.jpg';
}


function Level2() {
	console.log("Level3()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Go To: Bonnies Room';
	opt1.setAttribute("onClick", "javascript:Level2();");
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Go To: Jasons Room';
	opt2.setAttribute("onClick", "javascript:room1();");

	document.getElementById('level_title').innerHTML = 'Bathrooms';
	document.getElementById('level_image').src = 'img/bathrooms.jpg';
}