requirejs.config({
	paths:{
		jquery:'jquery-3.1.0.min'
	}
})

requirejs(['jquery', 'backtop'], function ($) {

	$('#backTop').backtop({
		mode:'move',
		speed:2000
	})
})