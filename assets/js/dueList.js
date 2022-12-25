var a = document.getElementsByClassName("edit");

for (var i = 0; i < a.length; i++) {
	a[i].addEventListener("click", function () {
		var b = this.parentNode.parentNode.cells[0].textContent;
		document.getElementById("dates").value = b;
		var c = this.parentNode.parentNode.cells[1].textContent;
		document.getElementById("booking").value = c;
		var d = this.parentNode.parentNode.cells[2].textContent;
		document.getElementById("category").value = d;
		var e = this.parentNode.parentNode.cells[3].textContent;
		document.getElementById("phone").value = e;

		let rChange = document.getElementById("category");
		let optionCountry = document.createElement("option");
		optionCountry.value = d;
		optionCountry.text = d;
		rChange.add(optionCountry, 0);

		var drop = document.getElementById("category");

		[].slice.call(drop.options).map(function (a) {
			if (this[a.value]) {
				drop.removeChild(a);
			} else {
				this[a.value] = 1;
			}
		}, {});
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
