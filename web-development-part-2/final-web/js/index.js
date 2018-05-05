$(document).ready(function() {
	
	var posterApi = 'http://img.omdbapi.com/?apikey=75b02365&i=';
	var catalogueUtils = {
		films: [],

		show: function() {	
			for (var i=0; i < this.films.length; i++) {
				var film = this.films[i];
				htmlFilm = this.buildHtmlFilm(film);
				$('.films').append(htmlFilm);
			}
		},

		buildHtmlFilm: function(film) {
			var html = '<div class="film">';
			if (film.Poster == 'N/A') {
				html = html.concat('<div class="empty"></div>');				
			} else {
				html = html.concat('<img src="'+posterApi+film.imdbID+'"/>');	
			}
			html = html.concat('<div class="data">');
			html = html.concat('<div class="title"><a href="film.html?film='+film.imdbID+'">'+film.Title+'</a></div>');
			html = html.concat('<div class="year">'+film.Year+'</div>');
			html.concat('</div>');
			return html;
		},

		clear: function() {
			$('.films').empty();
		},

		sortFilms: function(field) {
			this.films.sort(function(film1,film2) {
				if (field == 'Year') {
					return film1[field] - film2[field];
				} else {
					if (film1[field] < film2[field]) return -1;
					if (film1[field] > film2[field]) return 1;
					return 0;
				}
				
			});
		}
	};

	catalogueUtils.show();

	$('#filmsOrder').change(function() {
		catalogueUtils.sortFilms(this.value);
		catalogueUtils.clear();
		catalogueUtils.show();
	});
	
	$('#search').click(function() {
		var searchText = $('#searchText').val();
		if (searchText.length) {
			$.get('http://www.omdbapi.com/?s=' + searchText, function(data) {
				catalogueUtils.films = data.Search;
				catalogueUtils.clear();
				catalogueUtils.show();
			});
		}
	});
});