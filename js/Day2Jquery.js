$().ready(function() {

	$("#title").css("color", '#ab459e')
				.css("font-family", 'Tahoma')
				.css("font-size", '3em');
	$("li, p").css("color", 'grey');

	$("#JQuery").click(
		function() 
		{
			alert("JQuery alert!");
		})
		.css(
			"color", '#ab459e');

});

//Regular JS function
function hello() {
	alert("Hello World!");
};