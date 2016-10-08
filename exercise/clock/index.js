requirejs.config({
	paths:{
		jquery:'jquery-3.1.0.min'
	}
})

requirejs(['jquery'], function ($) {

	setInterval(function () {

		var date = new Date(),
			hour = date.getHours(),
			min = date.getMinutes(),
			sec = date.getSeconds()
			hourAngle = hour * 360 / 12 - 90,
			minAngle = min * 360 / 60 - 90,
			secAngle = sec * 360 / 60 - 90;
		console.log(sec, hourAngle)
		$('div.clock>ul.pointer>li.sec').css({
			transform:'translate(0, -50%) rotate('+secAngle+'deg)'
		});
		$('div.clock>ul.pointer>li.min').css({
			transform:'translate(0, -50%) rotate('+minAngle+'deg)'
		});
		$('div.clock>ul.pointer>li.hour').css({
			transform:'translate(0, -50%) rotate('+hourAngle+'deg)'
		});
	}, 500);
})