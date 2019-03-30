$(function(){
	var indexBody = $('#index'),
		dynamicBg = $('#dynamicBg');

// background parallax effect
	indexBody.on('mousemove', function (e) {
		// parallax(e, this, 1);
		parallax(e, dynamicBg.find('.front')[0], .15);
		parallax(e, dynamicBg.find('.back')[0], .35);
		parallax(e, dynamicBg.find('.up')[0], .8);
	});
	function parallax(e, target, layer) {
	    var layer_coeff = 10 / layer;
	    var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
	    var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
	    $(target).offset({ top: y ,left : x });
	};
})