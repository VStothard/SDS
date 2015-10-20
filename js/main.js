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

/*
	function open () {
		dropMenu.show();
	}

	function close () {
		dropMenu.hide();
	}

//PROGRAMMING

	menuOpen.click(function() {
		if($('element:hidden')) {
			open();
		} else if($('element:visible')){
			close();
		}
		
	}); */

});