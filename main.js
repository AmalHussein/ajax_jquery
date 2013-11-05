var render_dogs = function(dogs_json) {
	console.log(dogs_json);
};

var jquery_ajax_load = function (url) {

	$.ajax({
		url: url,
		success: function( data ) {
			render_dogs(data)	;
		}

	});
};

window.onload = function() {
	jquery_ajax_load('/dogs.json');
};
