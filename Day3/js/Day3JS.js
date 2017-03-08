$().ready(function() {

		var nbr = 1;

		$("#mathbtn").click(function doMath() {
			var answerinput = document.getElementById("answer");
			var show = document.getElementById("showyourwork");
			total = nbr;
			for (var i = 1; i < 10; i++) {

				showyourwork.insertAdjacentHTML('beforeend', "<li>" + total + "+ (" + nbr + "*" + i + ")</li>");
				total += nbr * i;
				nbr = i;
			
			};

			answerinput.value = total;

		});

		$("#go").click(function() {
			$.getJSON("https://jsonplaceholder.typicode.com/posts/1", function(resp) {
				console.log(resp);
			}).done(function() {
			$.getJSON("https://echo.jsontest.com/key/value/one/two", function(data) {
				console.log("JsonTest");
				console.log(data);
			});
		});
	});
});