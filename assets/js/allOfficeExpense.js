$(function () {
	$("td:contains('BD')")
		.addClass("text-white btn bg-success action")
		.css("font-size", ".9rem");
	$("td:contains('MY')")
		.addClass("text-white btn bg-info action")
		.css("font-size", ".9rem");
});
var a = document.getElementsByClassName("edit");

for (var i = 0; i < a.length; i++) {
	a[i].addEventListener("click", function () {
		var b = this.parentNode.parentNode.cells[0].textContent;
		document.getElementById("date").value = b;
		var c = this.parentNode.parentNode.cells[1].textContent;
		document.getElementById("category").value = c;
		var d = this.parentNode.parentNode.cells[2].textContent;
		document.getElementById("amount").value = d;
		var e = this.parentNode.parentNode.cells[3].textContent;
		document.getElementById("enterBy").value = e;
		var f = this.parentNode.parentNode.cells[4].textContent;
		document.getElementById("note").value = f;
		var g = this.parentNode.parentNode.cells[5].textContent;
		document.getElementById("branch").value = g;

		let rChange = document.getElementById("category");
		let optionCountry = document.createElement("option");
		optionCountry.value = d;
		optionCountry.text = d;
		rChange.add(optionCountry, 0);
		rChange.remove(1);
	});
}

$(document).ready(function () {
	$("#example").on("click", ".delete", function () {
		var currentRow = $(this).closest("tr");
		$("#confirm").click(function () {
			currentRow.remove();
		});
	});
});

// for graph

