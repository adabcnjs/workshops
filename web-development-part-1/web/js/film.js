$(document).ready(function() {

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
			for (var i=0; i<FILMS.length; i++) {
				var film = FILMS[i];
				if (film.imdbID == filmId) {
					return film;
				}
			}
		},

		fillFilmInHtml: function(film) {
			$('.poster').append('<img src="'+film.PosterB+'"/>');
			$('.title').append(film.Title);
			$('.year').append(film.Year);
			$('.genre').append(film.Genre);
			$('.director').append(film.Director);
			$('.actors').append(film.Actors);
			$('.plot').append(film.Plot);
		}
	};
	
	var filmId = filmUtils.getFilmId();
	var film = filmUtils.findFilmData(filmId);
	filmUtils.fillFilmInHtml(film);
});