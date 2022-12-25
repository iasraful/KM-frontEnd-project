// sender div show hide
function showMe(e) {
	var strdisplay = e.options[e.selectedIndex].value;
	var e = document.getElementById("impact_sender_option");
	var f = document.getElementById("choose_sender_option");
	if (strdisplay == "old") {
		e.style.display = "block";
		f.style.display = "none";
	} else if (strdisplay == "prev") {
		e.style.display = "none";
		f.style.display = "block";
	}
	var g = document.getElementById("additionalInfo");
	if (strdisplay == "Home Delivery") {
		g.style.display = "block";
	} else {
		g.style.display = "none";
	}
}

//Add row
$(document).ready(function () {
	var tbody = $("#row").children("tbody");

	var table = tbody.length ? tbody : $("#row");
	var count = 1;
	$(".create").click(function () {
		count++;
		table.append(`
		<script>
		$(document).ready(function () {
	$(".my-select").selectpicker();
});
</script>
    `);
	});
});
// delete row
function myFunc(count) {
	var tableName = document.getElementById("row");
	var totalRowCount = tableName.rows.length;
	if (totalRowCount == "2") {
		alert("Can not delete this row");
	} else {
		var cellNumber = document.getElementsByClassName(`anchors${count}`)[0].id;
		var num = cellNumber.match(/\d+/);
		tableName.deleteRow(num);
	}
}
// new calculation
function myFunction(count) {
	var numProduct = document.getElementById(`no_of_p${count}`).value;
	var numWeight = document.getElementById(`weight${count}`).value;
	var numOfCustomCharge = document.getElementById(
		`customes_charge${count}`
	).value;
	var numDiscount = document.getElementById(`discount${count}`).value;
	var homeCharge = document.getElementById("home_charge").value;
	var districtCharge = document.getElementById("d_charge").value;
	var packagingCharge = document.getElementById("p_charge").value;
	var additionalCharge = document.getElementById("a_charge").value;

	// total weight table field
	var totalWeightTableField = Number(numProduct) * Number(numWeight);
	document.getElementById(`totalWeight_${count}`).innerHTML =
		totalWeightTableField;

	// gram to KG
	var e = document.getElementById(`weight_units${count}`);
	var unitsName = e.options[e.selectedIndex].text;
	if (unitsName == "GRAM") {
		var convertToGram = Number(numProduct) / 1000;
		var totalWeightTableField = Number(convertToGram) * Number(numWeight);
		document.getElementById(`totalWeight_${count}`).innerHTML =
			totalWeightTableField;
	}

	// subtotalField
	document.getElementById(`subtotal${count}`).innerHTML =
		Number(numOfCustomCharge) * Number(numProduct) - Number(numDiscount);

	// delivery charge field calculation
	var chargeSum =
		Number(homeCharge) +
		Number(districtCharge) +
		Number(packagingCharge) +
		Number(additionalCharge);

	// row wise price calculation
	var table = document.getElementById("row");

	var i = 1;
	var sum = 0;
	while (i < table.rows.length) {
		sum += parseFloat(table.rows[i].cells[7].innerHTML);
		i++;
	}
	var sumAll = sum + chargeSum;
	document.getElementById("subCalShow").value = sumAll;

	// row wise weight calculation
	// var j = 1;
	// var tWeight = 0;
	// while (j < table.rows.length) {
	// 	tWeight += parseFloat(table.rows[j].cells[4].innerHTML);
	// 	j++;
	// }
	// document.getElementById("subCalShow2").value = tWeight;

	// gross weight
	var rowWeight = document.getElementById("subCalShow2").value;
	var rowPrice = document.getElementById("subCalShow").value;
	var grossWeight = document.getElementById("grossWeight").value;

	var amountWeight = Number(grossWeight) * Number(rowWeight);
	document.getElementById("subCalShow").value =
		Number(amountWeight) + Number(rowPrice);

	// volume weight
	// var rowWeight2 = document.getElementById("subCalShow2").value;
	var rowPrice2 = document.getElementById("subCalShow").value;
	var volumeWeight = document.getElementById("volumeWeight").value;
	var volumeWeightInput = document.getElementById("volumeWeightInput").value;

	var amountWeight2 = Number(volumeWeight) * Number(volumeWeightInput);
	document.getElementById("subCalShow").value =
		Number(amountWeight2) + Number(rowPrice2);

	var cValue = document.getElementById(`customes_charge${count}`).value;
	var ab = document.getElementById(`subtotal${count}`).innerHTML;
	if (ab == 0) {
		if (cValue == "0.0") {
			document.getElementById("addRow").style.display = "block";
		} else if (cValue == null) {
			document.getElementById("addRow").style.display = "none";
		} else {
			document.getElementById("addRow").style.display = "none";
		}
	} else {
		document.getElementById("addRow").style.display = "block";
	}
}

// add row button
document.getElementById("addRow").addEventListener("click", function () {
	document.getElementById("addRow").style.display = "none";
});

// charges
document.getElementById("home_yes").addEventListener("click", function () {
	document.getElementById("home_delivery_charge").style.display = "block";
	document.getElementById("home_yes").style.display = "none";
	document.getElementById("home_no").style.display = "none";
});
document.getElementById("delete_charge").addEventListener("click", function () {
	document.getElementById("home_charge").value = "";
	document.getElementById("home_yes").style.display = "block";
	document.getElementById("home_no").style.display = "block";
	document.getElementById("home_delivery_charge").style.display = "none";
});

document.getElementById("district_yes").addEventListener("click", function () {
	document.getElementById("district_charge").style.display = "block";
	document.getElementById("district_yes").style.display = "none";
	document.getElementById("district_no").style.display = "none";
});
document
	.getElementById("delete_charge_district")
	.addEventListener("click", function () {
		document.getElementById("d_charge").value = "";
		document.getElementById("district_yes").style.display = "block";
		document.getElementById("district_no").style.display = "block";
		document.getElementById("district_charge").style.display = "none";
	});

document.getElementById("packaging_yes").addEventListener("click", function () {
	document.getElementById("packaging_charge").style.display = "block";
	document.getElementById("packaging_yes").style.display = "none";
	document.getElementById("packaging_no").style.display = "none";
});
document
	.getElementById("delete_charge_packaging")
	.addEventListener("click", function () {
		document.getElementById("p_charge").value = "";
		document.getElementById("packaging_yes").style.display = "block";
		document.getElementById("packaging_no").style.display = "block";
		document.getElementById("packaging_charge").style.display = "none";
	});

document
	.getElementById("additional_yes")
	.addEventListener("click", function () {
		document.getElementById("a_charge").value = "";
		document.getElementById("additional_charge").style.display = "block";
		document.getElementById("additional_yes").style.display = "none";
		document.getElementById("additional_no").style.display = "none";
	});
document
	.getElementById("delete_charge_additional")
	.addEventListener("click", function () {
		document.getElementById("additional_yes").style.display = "block";
		document.getElementById("additional_no").style.display = "block";
		document.getElementById("additional_charge").style.display = "none";
	});

// checkbox
$("input:checkbox").on("click", function () {
	var $box = $(this);
	if ($box.is(":checked")) {
		var group = "input:checkbox[name='" + $box.attr("name") + "']";
		$(group).prop("checked", false);
		$box.prop("checked", true);
	} else {
		$box.prop("checked", false);
	}
});

//checkbox enable disable
$(function () {
	$("#home_delivery").click(function () {
		if ($(this).is(":checked")) {
			$("#home_delivery_charge :input").removeAttr("");
		} else {
		}
	});
});

// existing data
document.getElementById("dbValues").addEventListener("change", function () {
	var select = document.getElementById("freight");
	var country = document.getElementById("country");
	var state = document.getElementById("state");
	var city = document.getElementById("city");
	var name = document.getElementById("sender_name");
	var phone = document.getElementById("sender_phone");
	var number = document.getElementById("dbValues").selectedOptions[0].text;
	if (number == "New Sender") {
		name.value = "";
		phone.value = "";
		select.selectedOptions[0].text = "Select Freight";
		country.selectedOptions[0].text = "Select Country";
		state.selectedOptions[0].text = "Select State";
		city.selectedOptions[0].text = "Select City";
	}
	var table = document.getElementById("mytab1");
	for (i = 0; i < table.rows.length; i++) {
		var tNum = table.rows[i].cells[4].innerHTML;
		var t = table.rows[i].cells[4];
		if (tNum == number) {
			var currentRow = $(t).closest("tr");

			var col1 = currentRow.find("td:eq(0)").text(); // get current row 1st TD value
			var col2 = currentRow.find("td:eq(1)").text(); // get current row 2nd TD
			var col3 = currentRow.find("td:eq(2)").text(); // get current row 3rd TD
			var col4 = currentRow.find("td:eq(3)").text(); // get current row 4th TD
			var col5 = currentRow.find("td:eq(5)").text(); // get current row 6th TD

			// add name
			document.getElementById("sender_name").value = col1;
			// add number
			document.getElementById("sender_phone").value = tNum;
			// add freight
			let option = document.createElement("option");
			option.value = col5;
			option.text = col5;
			select.add(option, 0);
			select.remove(1);
			var selectedOpt =
				document.getElementById("freight").selectedOptions[0].text;
			if (selectedOpt == "Air Freight") {
				select.remove(selectedOpt.selectedIndex);
			} else if (selectedOpt == "Cargo Freight") {
				select.remove(selectedOpt.selectedIndex);
			} else if (selectedOpt == "Warehouse") {
				select.remove(selectedOpt.selectedIndex);
			}

			// add country
			let optionCountry = document.createElement("option");
			optionCountry.value = col2;
			optionCountry.text = col2;
			country.add(optionCountry, 0);
			country.remove(1);
			// add state
			let optionState = document.createElement("option");
			optionState.value = col3;
			optionState.text = col3;
			state.add(optionState, 0);
			state.remove(1);
			// add city
			let optionCity = document.createElement("option");
			optionCity.value = col4;
			optionCity.text = col4;
			city.add(optionCity, 0);
			city.remove(1);
			break;
		}
	}
	// receiver
	var table = document.getElementById("mytab2");
	for (i = 0; i < table.rows.length; i++) {
		var tNum = table.rows[i].cells[5].innerHTML;
		var t = table.rows[i].cells[5];
		if (tNum == number) {
			var currentRow = $(t).closest("tr");

			var col1 = currentRow.find("td:eq(0)").text(); // get current row 1st TD value
			var col2 = currentRow.find("td:eq(1)").text(); // get current row 2nd TD
			var col3 = currentRow.find("td:eq(2)").text(); // get current row 3rd TD
			var col4 = currentRow.find("td:eq(3)").text(); // get current row 4th TD
			var col5 = currentRow.find("td:eq(4)").text(); // get current row 6th TD
			var col6 = currentRow.find("td:eq(6)").text();

			document.getElementById("receiver_name").value = col1;
			document.getElementById("reciever_phone").value = tNum;
			document.getElementById("countryR").value = col2;
			document.getElementById("countryR").click();
			document.getElementById("stateR").value = col3;
			document.getElementById("stateR").click();
			document.getElementById("cityR").value = col4;
			if (col6 == "Normal") {
				document.getElementById("normal").checked = true;
				document.getElementById("business").checked = false;
			} else if (col6 == "Business") {
				document.getElementById("business").checked = true;
				document.getElementById("normal").checked = false;
			}
			break;
		}
	}
});

// search
$(document).ready(function () {
	$(".my-select").selectpicker();
});

function myF(count) {
	document
		.getElementById(`product_${count}`)
		.addEventListener("change", function () {
			var amount = document.getElementById(`customes_charge${count}`);
			var number = document.getElementById(`product_${count}`)
				.selectedOptions[0].text;

			var table = document.getElementById("mytab");
			for (i = 0; i < table.rows.length; i++) {
				var tNum = table.rows[i].cells[0].innerHTML;
				var t = table.rows[i].cells[0];
				if (tNum == number) {
					var currentRow = $(t).closest("tr");

					var col2 = currentRow.find("td:eq(1)").text(); // get current row 2nd TD
					amount.value = col2;
				}
			}
		});
}
