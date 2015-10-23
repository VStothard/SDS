$(document).ready(function(){
	console.log("ready!");

/****************MOBILE MENU *********************/

//VARIABLES
	var menuOpen = $('#menu-open'); //menu open button
	var dropMenu = $('#mob-drop-menu'); //drop down mobile menu
	var portDropToggle = $('#portfolio-drop-toggle'); //drop menu open/close
	var portDrop = $('#portfolio-drop'); //mobile poftfolio menu drop
	var deskPortDropToggle = $('#desk-port-drop-toggle');
	var deskPortDrop = $('#desk-portfolio-drop');

//HIDE MENU ON LOAD

	dropMenu.hide();
	portDrop.hide();

//MENU FUNCTIONS

	menuOpen.click(function(){
		dropMenu.slideToggle('fast', 'linear');
	});

	/**When mobile user clicks 'portfoilio', opens drop down menu**/
	
	portDropToggle.click(function() {
		portDrop.slideToggle('fast', 'linear');
	});

	/**When desktop user clicks or hovers 'portfoilio', opens drop down menu**/
	function mobDrop () {
		deskPortDrop.slideToggle('fast', 'linear');
	}

	deskPortDropToggle.hover(mobDrop, mobDrop);
});