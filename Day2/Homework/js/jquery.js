$().ready(function() {

	$("#add").click(
		function() 
		{
			var result = ($("#num").val()*1+1);
			styleNum(result);
			$("#num").val(result);
		}
	);

	$("#sub").click(
		function() 
		{
			var result = ($("#num").val()*1-1);
			styleNum(result);
			$("#num").val(result);
		}
	);

});

function styleNum(num) {

	if(($("#num").val()%2) != 0) {

		$("#num").css("color", "red");

	} else {

		$("#num").css("color", "#000");

	}

	var intAsString = num.toString();

	if (intAsString.includes("2")) {

		$("#num").css("font-style", "italic");

	} else {
		$("#num").css("font-style", "");
	}
};
