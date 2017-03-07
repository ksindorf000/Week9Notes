$().ready(function() {

/**************API JQUERY*****************/

	$("#starwars").click(function() {

		$.get("http://swapi.co/api/people/", 
			function(resp) 
			{
				console.log(resp);
				$("#swapi").val(resp.results[0].name);
			}
		);

	});




/**************JQUERY INTRO*****************/

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

	$("#hide").click(
		function() 
		{
			$("#pHide").hide();
		});

	$("#show").click(
		function() 
		{
			$("#pHide").show();
		});

});

//Regular JS function
function hello() {
	alert("Hello World!");
};