var a = document.getElementsByClassName("edit");

for (var i = 0; i < a.length; i++) {
	a[i].addEventListener("click", function () {
		var b = this.parentNode.parentNode.cells[0].textContent;
		document.getElementById("name").value = b;
		var c = this.parentNode.parentNode.cells[1].textContent;
		document.getElementById("booking").value = c;
		var d = this.parentNode.parentNode.cells[2].textContent;

		var res = d.substring(0, 10);
		document.getElementById("range1").value = res;
		var res2 = d.substring(14, 24);
		document.getElementById("range2").value = res2;

		var e = this.parentNode.parentNode.cells[3].textContent;
		document.getElementById("category").value = e;
		var f = this.parentNode.parentNode.cells[4].textContent;
		document.getElementById("shipNumber").value = f;

		let rChange = document.getElementById("category");
		let optionCountry = document.createElement("option");
		optionCountry.value = e;
		optionCountry.text = e;
		rChange.add(optionCountry, 0);
	});
	var drop = document.getElementById("category");

	[].slice.call(drop.options).map(function (a) {
		if (this[a.value]) {
			drop.removeChild(a);
		} else {
			this[a.value] = 1;
		}
	}, {});
}

$(document).ready(function () {
	$("#example").on("click", ".add", function () {
		var currentRow = $(this).closest("tr");

		var col1 = currentRow.find("td:eq(4)").text();
		localStorage.setItem("dt", col1);
	});
});

$(document).ready(function () {
	$("#example").on("click", ".delete", function () {
		var currentRow = $(this).closest("tr");
		$("#confirm").click(function () {
			currentRow.remove();
		});
	});
});
