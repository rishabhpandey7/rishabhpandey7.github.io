function navigation(){
	$('.primary-nav').css('height', $('.logo').height());
	$('.primary-nav li').css('margin-top', ($('.primary-nav').height()-$('.primary-nav li').height())/2 + 'px')

	$(window).resize(function(){
		setTimeout(navigation, 500);
	});
}

function projects(){
	$('.tmg-project').css('height', $('.tmg-project').width());
	$('.tmg-project h3').css('padding-top', ($('.tmg-project').height() - $('.tmg-project h3').height() - $('.tmg-project .row').outerHeight())/2);
	$('.image-project').css('height', $('.image-project').width());
	$('.image-project h3').css('padding-top', ($('.image-project').height() - $('.image-project h3').height() - $('.image-project .row').outerHeight())/2);
	$('.snake-project').css('height', $('.snake-project').width());
	$('.snake-project h3').css('padding-top', ($('.snake-project').height() - $('.snake-project h3').height() - $('.snake-project .row').outerHeight())/2);
	$('.pomodoro-project').css('height', $('.pomodoro-project').width());
	$('.pomodoro-project h3').css('padding-top', ($('.pomodoro-project').height() - $('.pomodoro-project h3').height() - $('.pomodoro-project .row').outerHeight())/2);
	$('.personal-project').css('height', $('.personal-project').width());
	$('.personal-project h3').css('padding-top', ($('.personal-project').height() - $('.personal-project h3').height() - $('.personal-project .row').outerHeight())/2);
	$('.algo-project').css('height', $('.algo-project').width());
	$('.algo-project h3').css('padding-top', ($('.algo-project').height() - $('.algo-project h3').height() - $('.algo-project .row').outerHeight())/2);


	$(window).resize(function(){
		setTimeout(projects, 500);
	});
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}