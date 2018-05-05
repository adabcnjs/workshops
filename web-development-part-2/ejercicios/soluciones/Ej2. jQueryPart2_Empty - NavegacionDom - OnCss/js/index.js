$(document).ready(function() {  
    var colors = {
        colorBackgroundDefault: $("#film").css("background-color"),
        colorBackgroundSelected: $("footer").css("background-color"),
        colorFontSelected: "black",
        colorFontTitleDefault: $("#film").find(".title").children().css("color"),
        colorFontInfoDefault: $("#film").find(".info").children().css("color")
    }

    $("#film").on("mouseenter",  function(){
        $(this).css("background-color", colors.colorBackgroundSelected);
        $(this).find(".title").children().css("color", colors.colorFontSelected); 
        $(this).find(".info").children().css("color", colors.colorFontSelected);
    });
    
    $("#film").on("mouseleave",  function(){ 
        $(this).css("background-color", colors.colorBackgroundDefault);
        $(this).find(".title").children().css("color", colors.colorFontTitleDefault); 
        $(this).find(".info").children().css("color", colors.colorFontInfoDefault);
    });
});