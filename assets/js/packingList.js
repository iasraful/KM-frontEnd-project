var a = document.getElementsByClassName("edit");

for (var i = 0; i < a.length; i++) {
	a[i].addEventListener("click", function () {
		var f = this.parentNode.parentNode.cells[0].textContent;
		document.getElementById("id").value = f;
		var g = this.parentNode.parentNode.cells[1].textContent;
		document.getElementById("bookingNumber").value = g;
		var b = this.parentNode.parentNode.cells[2].textContent;
		document.getElementById("dates").value = b;
		var c = this.parentNode.parentNode.cells[3].textContent;
		document.getElementById("booking").value = c;
		var d = this.parentNode.parentNode.cells[4].textContent;
		document.getElementById("category").value = d;
		var e = this.parentNode.parentNode.cells[5].textContent;
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

		bookingValue(g);
	});
}

$(document).ready(function () {
	// code to read selected table row cell data (values).
	$("#example").on("click", ".edit", function () {
		// get the current row
		var currentRow = $(this).closest("tr");

		var col1 = currentRow.find("td:eq(6)").text();
		jsonTable(col1);
	});
});

function bookingValue(val) {
	console.log(val);

	var table = document.getElementById("prevProductTable");

	for (var i = 0, count = 1; i < table.rows.length; i++, count++) {
		console.log(i);
		console.log(count);
		var t = table.rows[i];
		console.log(t);

		var currentRow = $(t).closest("tr");

		var col1 = currentRow.find("td:eq(0)").text();
		var col2 = currentRow.find("td:eq(1)").text();
		var col3 = currentRow.find("td:eq(2)").text();
		var col4 = currentRow.find("td:eq(3)").text();
		var col5 = currentRow.find("td:eq(4)").text();
		var col6 = currentRow.find("td:eq(5)").text();
		var col7 = currentRow.find("td:eq(6)").text();
		var col8 = currentRow.find("td:eq(7)").text();

		var options = document.getElementById(`product_${count}`).options;
		for (var j = 0; j < options.length; j++) {
			if (options[j].text == col1) {
				options[j].selected = true;
			}
		}
		document.getElementById(`no_of_p${count}`).value = col2;
		document.getElementById(`weight${count}`).value = col3;
		document.getElementById(`weight_units${count}`).value = col4;
		var options2 = document.getElementById(`weight_units${count}`).options;
		for (var k = 0; k < options2.length; k++) {
			if (options2[k].text == col4) {
				options2[k].selected = true;
				document.getElementById(`weight_units${count}`).click();
			}
		}
		document.getElementById(`totalWeight_${count}`).value = col5;
		document.getElementById(`customes_charge${count}`).value = col6;
		document.getElementById(`discount${count}`).value = col7;
		document.getElementById(`subtotal${count}`).value = col8;
		document.getElementById(`weight_units${count}`).click();
		document.getElementById("addRow").click();
	}
}

$(document).ready(function () {
	$("#example").on("click", ".delete", function () {
		var currentRow = $(this).closest("tr");
		$("#confirm").click(function () {
			currentRow.remove();
		});
	});
});

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
			$(".my-select").select2();
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

	// row wise price calculation
	var table = document.getElementById("row");

	var i = 1;
	var sum = 0;
	while (i < table.rows.length) {
		sum += parseFloat(table.rows[i].cells[7].innerHTML);
		i++;
	}
	var sumAll = sum;
	document.getElementById("subCalShow").value = sumAll;

	// gross weight
	var rowWeight = document.getElementById("subCalShow2").value;
	var rowPrice = document.getElementById("subCalShow").value;
	var grossWeight = document.getElementById("grossWeight").value;

	var amountWeight = Number(grossWeight) * Number(rowWeight);
	document.getElementById("subCalShow").value =
		Number(amountWeight) + Number(rowPrice);

	// volume weight
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

$(document).ready(function () {
	$(".my-select").select2();
});

function myF(count) {
	var amount = document.getElementById(`customes_charge${count}`);
	var number = document.getElementById(`product_${count}`).selectedOptions[0]
		.text;

	var table = document.getElementById("mytab");
	for (i = 0; i < table.rows.length; i++) {
		var tNum = table.rows[i].cells[0].innerHTML;
		var t = table.rows[i].cells[0];
		if (tNum == number) {
			var currentRow = $(t).closest("tr");

			var col2 = currentRow.find("td:eq(1)").text();
			amount.value = col2;
		}
	}
}

function jsonTable(values) {
	var tableData = values;
	console.log(JSON.stringify(tableData).trim());
	

	for (var i in tableDaa) {
		var row = `<tr>
	<td>${tableData[i].Name}</td>
	<td>${tableData[i].Quantity}</td>
	<td>${tableData[i].Weight}</td>
	<td>${tableData[i].WeightTypes}</td>
	<td>${tableData[i].TotalWeight}</td>
	<td>${tableData[i].CustomsCharge}</td>
	<td>${tableData[i].Discount}</td>
	<td>${tableData[i].Subtotal}</td>
	</tr>`;
		var tableNew = $("#prevProductTable");
		tableNew.append(row);
	}
}
var table = document.getElementById("example");
var i = 1;
var sum = 0;
while (i < table.rows.length) {
	sum += parseFloat(table.rows[i].cells[7].innerHTML);
	i++;
}
var sumAll = sum + chargeSum;