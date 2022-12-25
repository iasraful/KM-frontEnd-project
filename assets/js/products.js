var a = document.getElementsByClassName("edit");

for (var i = 0; i < a.length; i++) {
	a[i].addEventListener("click", function () {
		var b = this.parentNode.parentNode.cells[1].textContent;
		document.getElementById("name").value = b;
		var c = this.parentNode.parentNode.cells[2].textContent;
		document.getElementById("customCharge").value = c;
		var d = this.parentNode.parentNode.cells[3].textContent;
		document.getElementById("product_type").value = d;

		let rChange = document.getElementById("product_type");
		let optionCountry = document.createElement("option");
		optionCountry.value = d;
		optionCountry.text = d;
		rChange.add(optionCountry, 0);
		
		var drop = document.getElementById("product_type");

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
	$("#dataTable").on("click", ".delete", function () {
		var currentRow = $(this).closest("tr");
		var col1 = currentRow.find("td:eq(0)").text();
		// alert(col1)
		// var url = window.location.href;
		// alert(url + "/" + col1);
		$("#confirm").click(function () {
			var url = window.location.href;
			alert(url + "/" + col1);
			// var url = window.location.href;
			// url + "/" + col1;
			window.location.replace(url + " / " + col1);
		});
	});
});
