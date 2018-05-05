$(document).ready(function() {
     var colors = {
        colorBackgroundDefault: $("#films").css("background-color"),
        colorBackgroundSelected: $("footer").css("background-color"),
        colorFontSelected: "black",
        colorFontTitleDefault: $("#film").find(".title").children().css("color"),
        colorFontInfoDefault: $("#film").find(".info").children().css("color")
    }
	  $('#listFilms').change(function() { 
            var idFilm = this.value; 
            $('#'+idFilm).css("background-color", colors.colorBackgroundSelected);
            $('#'+idFilm).find(".title").children().css("color", colors.colorFontSelected); 
            $('#'+idFilm).find(".info").children().css("color", colors.colorFontSelected);
            
            console.log(colors.colorBackgroundDefault)
            $('#'+idFilm).siblings().css("background-color", colors.colorBackgroundDefault);
            $('#'+idFilm).siblings().find(".title").children().css("color", colors.colorFontTitleDefault); 
            $('#'+idFilm).siblings().find(".info").children().css("color", colors.colorFontInfoDefault);

      });
});