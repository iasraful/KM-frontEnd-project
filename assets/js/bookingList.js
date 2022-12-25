var a = document.getElementsByClassName("edit_data");

for (var i = 0; i < a.length; i++) {
	a[i].addEventListener("click", function () {
		var b = this.parentNode.parentNode.cells[1].textContent;
		document.getElementById("edit_date").value = b;

		var c = this.parentNode.parentNode.cells[2].textContent;
		document.getElementById("edit_reference").value = c;

		let d = this.parentNode.parentNode.cells[3].textContent;
		document.getElementById("edit_sender").value = d;

		let e = this.parentNode.parentNode.cells[4].textContent;
		document.getElementById("edit_rname").value = e;

		let f = this.parentNode.parentNode.cells[5].textContent;
		document.getElementById("edit_rphone").value = f;

		let g = this.parentNode.parentNode.cells[6].textContent;
		document.getElementById("edit_freight").value = g;

		let h = this.parentNode.parentNode.cells[7].textContent;
		document.getElementById("edit_delivery").value = h;

		let i = this.parentNode.parentNode.cells[8].textContent;
		document.getElementById("edit_destination").value = i;

		let k = this.parentNode.parentNode.cells[10].textContent;
		document.getElementById("edit_nob").value = k;

		let l = this.parentNode.parentNode.cells[11].textContent;
		document.getElementById("edit_total").value = l;

		let m = this.parentNode.parentNode.cells[12].textContent.trim();
		document.getElementById("countryR").value = m;

		let n = this.parentNode.parentNode.cells[13].textContent.trim();
		document.getElementById("stateR").value = n;

		let o = this.parentNode.parentNode.cells[14].textContent.trim();
		document.getElementById("cityR").value = o;
		console.log(m + n + o);

		var options = document.getElementById("countryR").options;
		for (var ct = 0; ct < options.length; ct++) {
			if (options[ct].text == m) {
				options[ct].selected = true;
				document.getElementById("countryR").click();
			}
		}
		var options2 = document.getElementById("stateR").options;
		for (var st = 0; st < options2.length; st++) {
			if (options2[st].text == n) {
				options2[st].selected = true;
				document.getElementById("stateR").click();
			}
		}
		var options3 = document.getElementById("cityR").options;
		for (var cy = 0; cy < options3.length; cy++) {
			if (options3[cy].text == o) {
				options3[cy].selected = true;
			}
		}

		// let rChange = document.getElementById("edit_freight");
		// let optionCountry = document.createElement("option");
		// optionCountry.value = g;
		// optionCountry.text = g;
		// rChange.add(optionCountry, 0);
		// rChange.remove(1);

		// var drop = document.getElementById("edit_freight");

		// [].slice.call(drop.options).map(function (a) {
		// 	if (this[a.value]) {
		// 		drop.removeChild(a);
		// 	} else {
		// 		this[a.value] = 1;
		// 	}
		// }, {});

		let j =
			this.parentNode.parentNode.cells[9].getElementsByTagName("select")[0]
				.value;
		document.getElementById("edit_status").value = j;
		let rC = document.getElementById("edit_status");
		let optionC = document.createElement("option");
		optionC.value = j;
		optionC.text = j;
		rC.add(optionC, 0);
		rC.remove(0);

		var drop = document.getElementById("edit_status");

		[].slice.call(drop.options).map(function (a) {
			if (this[a.value]) {
				drop.removeChild(a);
			} else {
				this[a.value] = 1;
			}
		}, {});
	});

	var edit_delivery_type = document.getElementById("edit_delivery_type").value;

	if (edit_delivery_type == "Home Delivery") {
		additionalInfo.style.display = "";
	} else {
		additionalInfo.style.display = "none";
	}
}

document
	.getElementById("edit_delivery_type")
	.addEventListener("click", function () {
		var e = document.getElementById("edit_delivery_type");
		var deliveryType = e.options[e.selectedIndex].text;
		var g = document.getElementById("additionalInfo");
		if (deliveryType == "Home Delivery") {
			g.style.display = "";
		} else {
			g.style.display = "none";
		}
	});

$(document).ready(function () {
	$("#dataTable").on("click", ".delete", function () {
		var currentRow = $(this).closest("tr");
		var col1 = currentRow.find("td:eq(0)").text();

		$("#confirm").click(function () {
			var url = window.location.href;
			window.location.replace(url + " / " + col1);
		});
	});
});
$(document).ready(function () {
	$("#dataTable").on("click", ".edit_data", function () {
		var currentRow = $(this).closest("tr");
		var col1 = currentRow.find("td:eq(0)").text();
		var url = window.location.href;

		$("#bookingUpdate").click(function () {
			window.location.replace(url + "/edit_booking/" + col1);
		});
	});
});

// remove last slash from url
function someFunction(site) {
	return site.replace(/\/$/, "");
}
var url = window.location.href;
var url2 = someFunction(url);

// remove last directory from url
function RemoveLastDirectoryPartOf(the_url) {
	var the_arr = the_url.split("/");
	the_arr.pop();
	return the_arr.join("/");
}

// var newUrl = RemoveLastDirectoryPartOf(url2);
// console.log(newurl);

var abcElements = document.querySelectorAll(".abc");
for (var i = 0; i < abcElements.length; i++) abcElements[i].id = "abc" + i;

$(document).ready(function () {
	$("#dataTable").on("change", ".btnSelect", function () {
		var currentRow = $(this).closest("tr");
		var currentRow2 = $(this).closest("tr").index();

		var idNumber = currentRow.find("td:eq(0)").text();
		var status = currentRow.find("td:eq(9)").find(":selected").text();
		var url = window.location.href;
		document.getElementById(`abc${currentRow2}`).action =
			url + "/edit_booking_status/" + status + "/" + idNumber + "/";
	});
});

