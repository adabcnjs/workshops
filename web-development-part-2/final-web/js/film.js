$(document).ready(function() {

	var posterApi = 'http://img.omdbapi.com/?apikey=75b02365&i=';	
	var filmUtils = {
		getParameterByName: function(name) {
	    	var url = window.location.href;
	    	name = name.replace(/[\[\]]/g, "\\$&");
	    	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
	        	results = regex.exec(url);
		    if (!results) return null;
		    if (!results[2]) return '';
		    return decodeURIComponent(results[2].replace(/\+/g, " "));
		},

		getFilmId: function() {
			return this.getParameterByName('film');
		},

		findFilmData: function(filmId) {
			$.get('http://www.omdbapi.com/?i=' + filmId, function (data) {
				filmUtils.fillFilmInHtml(data);
			});
		},

		fillFilmInHtml: function(film) {
			$('.poster').html('<img src="'+posterApi+film.imdbID+'"/>');
			$('.title').text(film.Title);
			$('.year').text(film.Year);
			$('.genre').text(film.Genre);
			$('.director').text(film.Director);
			$('.actors').text(film.Actors);
			$('.plot').text(film.Plot);
		}
	};
	
	var filmId = filmUtils.getFilmId();
	filmUtils.findFilmData(filmId);
});