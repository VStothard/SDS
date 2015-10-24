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
	var navBar = $('#nav-cont');

//HIDE MENU ON LOAD

	dropMenu.hide();
	portDrop.hide();

//MENU FUNCTIONS
	//open/close menu when click hamburger icon
	menuOpen.click(function(){
		dropMenu.slideToggle('fast', 'linear');
		portDrop.css("display", "none"); /*resets the portfolio drop menu when you click open or close. Stops it from staying open if the user doesn't close it*/

	});
	//close menu when click outside of NavBar/dropMenu
	$(document).on('click', function(event) {
	  if (!$(event.target).closest(navBar).length) {
	    // Hide the menus.
	    dropMenu.css("display", "none"); /*slideToggle('fast', 'linear');*/
	  }
	});
	//close dropMenu when mouse leaves the area (fixes bug with dropMenu not hiding when user rescales the window)
	dropMenu.mouseleave(function(){
		dropMenu.slideToggle('fast', 'linear');
	});

	/**When mobile user clicks 'portfoilio', opens drop down menu**/
	
	portDropToggle.click(function() {
		portDrop.slideToggle('fast', 'linear');
	});

	/**When desktop user hovers over deskPortToggle, opens drop down menu**/
	function mobDrop () {
		deskPortDrop.slideToggle('fast', 'linear');
	}

	deskPortDropToggle.click(function(){
		deskPortDrop.slideToggle('fast', 'linear');
	});

	$(document).on('click', function(event) {
	  if (!$(event.target).closest(deskPortDropToggle).length) {
	    // Hide the menus.
	    deskPortDrop.css("display", "none"); /*slideToggle('fast', 'linear');*/
	  }
	});

	/*
	deskPortDropToggle.hover(mobDrop, function() {
		//close menu when mouse leaves deskPortDrop
		deskPortDrop.mouseleave(function(){
			deskPortDrop.slideToggle('fast', 'linear');
		});
	});*/

});