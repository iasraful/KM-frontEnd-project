var a = document.getElementsByClassName("edit");

for (var i = 0; i < a.length; i++) {
	a[i].addEventListener("click", function () {
		var d = this.parentNode.parentNode.cells[0].textContent;
		document.getElementById("category").value = d;

		let rChange = document.getElementById("category");
		let optionCountry = document.createElement("option");
		optionCountry.value = d;
		optionCountry.text = d;
		rChange.add(optionCountry, 0);
        
        
		var b = this.parentNode.parentNode.cells[1].textContent;
		document.getElementById("unit").value = b;

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
