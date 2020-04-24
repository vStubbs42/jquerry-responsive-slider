var interval = setInterval(function(){
	moveSlides('forward');
}, 2000);

$('.play').on('click', function(){
	clearInterval(interval);
	setInterval(function(){
	moveSlides('forward');
}, 2000)
});

$('.pause').on('click', function(){
	clearInterval(interval);
});


$('.sli:last-child').prependTo('.sul');

$('.next').on('click', function(){

	moveSlides('forward');
});

$('.previous').on('click', function(){

	moveSlides ('backward')
});


function moveSlides(direction) {
	var button = (direction == "forward") ? '.next' : '.previous';

	// var width = $('vport').width;

	$(button).prop('disabled', true);

	(direction == "forward") ? $('.sli:first-child').appendTo('.sul') : $('.sli:last-child').prependTo('.sul');

	var signCancel = (direction == "forward") ? "+" : "-";
	var signAnimate = (direction == "forward") ? "-" : "+";

	$('.sul').css('left', signCancel + '=800px');

	$('.sul').animate({

		left: signAnimate + '=800px'

	}, {

		done: function(){
			$(button).prop('disabled', false);
		}

	});
}
