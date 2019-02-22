$('#modify').click(function () {
	$('.d-none').toggleClass('temp');
	$('.d-flex').toggleClass('d-none').toggleClass('d-flex');
	$('.temp').toggleClass('d-none').toggleClass('d-flex').toggleClass('temp');
});