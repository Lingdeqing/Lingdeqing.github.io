requirejs.config({
	paths:{
		jquery:'jquery-3.1.0.min'
	}
})

requirejs(['jquery', 'validate'], function ($, validate) {
	$('body').css('background-color', 'red')
	console.log(validate.isEqual('123', '123'))
})