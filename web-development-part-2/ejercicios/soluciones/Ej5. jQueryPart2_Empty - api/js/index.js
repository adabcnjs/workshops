$(document).ready(function() {
	var catalogueUtils = {
		films: [],

		setFilms: function(films) {
			this.films = films;
		},

		show: function() {	
			this.clear();
			for (var i=0; i < this.films.length; i++) {
				var film = this.films[i];
				htmlFilm = this.buildHtmlFilm(film);
				$('.films').append(htmlFilm);
			}
		},

		buildHtmlFilm: function(film) {
			var html = '<div class="film">';
			html = html.concat('<img src="'+film.Poster+'"/>');
			html = html.concat('<div class="data">');
			html = html.concat('<div class="title"><a href="film.html?film='+film.imdbID+'">'+film.Title+'</a></div>');
			html = html.concat('<div class="genre">'+film.Genre+'</div>');
			html = html.concat('<div class="year">'+film.Year+'</div>');
			html.concat('</div>');
			return html;
		},

		clear: function() {
			$('.films').empty();
		},

		waiting: function() {
			this.clear();
			$('.films').append('<h1 style="color:white">waiting...<h1>');
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

	$('#busca').on('click', function() {
	    var busqueda = $('#busqueda').val();
	    if (busqueda.length > 0) {
	      	// Construimos la URL con la búsqueda
	      	var url = 'http://www.omdbapi.com/?type=movie&s=' + busqueda;
	        
	        // Hacemos una petición GET a la url, y en "data" se devuelve la película encontrada
	        // El código de dentro de la función anónima se ejecuta una vez se han devuelto los datos
	        // (es una invocación asíncrona)
	        $.get(url, function( data ) {
	        	console.log(data);
	        	// Comprobamos que se haya encontrado alguna película
				if (data['Response'] === "True") {
					// Añadimos las películas y las mostramos
				  	catalogueUtils.setFilms(data['Search']);
				  	catalogueUtils.show();
				} else {
					// Mostramos alerta de que no se ha encontrado película
					alert('Película no encontrada!');
				}
			});

			// Como la llamada get es asíncrona, este código se ejecutará
			// antes de que termine la llamada, y veremos el mensaje waiting
			// hasta que se ejecute la función anónima
			catalogueUtils.waiting();
    	}
 
  	});

	$('#filmsOrder').change(function() {
		catalogueUtils.sortFilms(this.value);
		catalogueUtils.show();
	});
	
});