$(function () {
	$("table tr > td:nth-child(4):contains('Admin')")
		.addClass("text-white badge badge-success")
		.css("font-size", ".9rem");
	$("table tr > td:nth-child(4):contains('Manager')")
		.addClass("text-white badge badge-info")
		.css("font-size", ".9rem");
	$("table tr > td:nth-child(4):contains('Booking Officer')")
		.addClass("text-white badge badge-warning")
		.css("font-size", ".9rem");
	$("table tr > td:nth-child(4):contains('Package Controller')")
		.addClass("text-white badge badge-dark")
		.css("font-size", ".9rem");

	// $("td:eq(3):contains('Admin')")
	// 	.addClass("text-white badge badge-success")
	// 	.css("font-size", ".9rem");
	// $("td:eq(3):contains('Manager')")
	// 	.addClass("text-white badge badge-info")
	// 	.css("font-size", ".9rem");
	// $("td:eq(3):contains('Booking Officer')")
	// 	.addClass("text-white badge badge-warning")
	// 	.css("font-size", ".9rem");
	// $("td:eq(3):contains('Package Controller')")
	// 	.addClass("text-white badge badge-dark")
	// 	.css("font-size", ".9rem");
});
// edit
$(document).ready(function () {
	$("#dataTable").on("click", ".edit", function () {
		var currentRow = $(this).closest("tr");

		var col1 = currentRow.find("td:eq(0)").text(); // get current row 1st TD value
		var col2 = currentRow.find("td:eq(1)").text(); // get current row 2nd TD
		var col3 = currentRow.find("td:eq(2)").text(); // get current row 3rd TD

		document.getElementById("name").value = col1;
		document.getElementById("email").value = col2;
		document.getElementById("phone").value = col3;

		var col4 = currentRow.find("td:eq(3)").text();

		let rChange = document.getElementById("role_change2");
		let optionCountry = document.createElement("option");
		optionCountry.value = col4;
		optionCountry.text = col4;
		rChange.add(optionCountry, 0);
		rChange.remove(1);

		var drop = document.getElementById("role_change2");
		[].slice.call(drop.options).map(function (a) {
			if (this[a.value]) {
				drop.removeChild(a);
			} else {
				this[a.value] = 1;
			}
		}, {});
	});
});
// role
$(document).ready(function () {
	$("#dataTable").on("click", ".role", function () {
		var currentRow = $(this).closest("tr");

		var col1 = currentRow.find("td:eq(3)").text();

		let rChange = document.getElementById("role_change");
		let optionCountry = document.createElement("option");
		optionCountry.value = col1;
		optionCountry.text = col1;
		rChange.add(optionCountry, 0);
		rChange.remove(1);

		var drop = document.getElementById("role_change");
		[].slice.call(drop.options).map(function (a) {
			if (this[a.value]) {
				drop.removeChild(a);
			} else {
				this[a.value] = 1;
			}
		}, {});
	});
});
// delete
// $(document).ready(function () {
// 	$("#dataTable").on("click", ".delete", function () {
// 		var currentRow = $(this).closest("tr");
// 		$("#confirm").click(function () {
// 			currentRow.remove();
// 		});
// 	});
// });
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
			window.location.replace(url + " / " + col1);
		});
	});
});
$(document).ready(function () {
	$("#dataTable").on("click", ".edit", function () {
		var currentRow = $(this).closest("tr");
		var col1 = currentRow.find("td:eq(0)").text();
		var url = window.location.href;

		$("#edit_user").click(function () {
			// alert(url + "/" + col1);
			document.getElementsByTagName("form")[0].action = "/edit_user/" + col1;
			console.log(document.getElementsByTagName("form")[0].action);
		});
	});
});

function passwordVallidate() {
	var newPassword = document.getElementById("new_pass").value;
	var confirmPassword = document.getElementById("conf_pass").value;

	if (newPassword != "" || confirmPassword != "") {
		if (newPassword == confirmPassword) {
			document.getElementById("new_pass").style.borderColor = "green";
			document.getElementById("conf_pass").style.borderColor = "green";
			document.getElementById("passwordChange").style.display = "block";
		} else {
			document.getElementById("passwordChange").style.display = "none";
		}
	} else {
		document.getElementById("new_pass").style.borderColor = "red";
		document.getElementById("conf_pass").style.borderColor = "red";
	}
}
