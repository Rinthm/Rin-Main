// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function() {

	function getRandomColor() {
		var randomColor = '#' + Math.random().toString(16).substring(2, 8);
		return randomColor;
	};

	function redirectHome() {
    window.location = '/home';
  };

	$('#title').hide().delay(900).fadeIn(900).delay(900).fadeOut(900);
	$('canvas').hide().fadeIn(900);
	$('#enter').hide().delay(3600).fadeIn(900);

	$('#enter').on('click', function(event){
		event.preventDefault();
		$('canvas').fadeOut(900, redirectHome)
		$('nav').hide().delay(900).fadeIn(900);
	})

})