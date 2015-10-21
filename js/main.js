$(document).ready(function(){
	console.log("ready!");

/****************MOBILE MENU *********************/

//VARIABLES
	var menuOpen = $('#menu-open'); //menu open button
	var dropMenu = $('#mob-drop-menu'); //drop down mobile menu

//HIDE MENU ON LOAD

	dropMenu.hide();

//MENU FUNCTIONS

	menuOpen.click(function(){
		dropMenu.slideToggle('slow', 'linear');
	});

/***************HEADER SCROLL ANIMATION ***********/



});