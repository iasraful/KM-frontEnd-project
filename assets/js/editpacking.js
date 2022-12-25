$(document).ready(function () {
	document.getElementById("bookingNumber").value =
		sessionStorage.getItem("ref");
	document.getElementById("dates").value = sessionStorage.getItem("date");
	document.getElementById("booking").value =
		sessionStorage.getItem("packingNumber");
});

//Add row
$(document).ready(function () {
	var tbody = $("#row").children("tbody");

	var table = tbody.length ? tbody : $("#row");

	$(".create").click(function () {
		table.append(`
		<script>
		$(document).ready(function () {
			$(".my-select").select2();
});
</script>
    `);
	});
});

$(document).ready(function () {
	var tbody = $("#row").children("tbody");

	var table = tbody.length ? tbody : $("#row");
	var count = 1;
	$(".create").click(function () {
		count++;
		table.append(`
		<tr class="anchors${count}" id="rw${count}">
		<td>
			<select class="form-control re_size products my-select" onchange="myF(${count})" onclick="myFunction(${count})"  data-container="body" data-live-search="true" id="product_${count}" onclick="myF(${count})" name="products" style="width: 200px;" >
				<option value="Choose Products">Choose Products</option>
				{% for product in products %}
                	<option value="{{product.product_type}}">{{product.product_name}}</option>
				{% endfor %}
				<option value="AC 1 Ton">AC 1 Ton</option>
				<option value="AC 2 Ton">AC 2 Ton</option>
				<option value="AC Window">AC Window</option>
				<option value="Air Cooler">Air Cooler</option>
				<option value="Airon Machine">Airon Machine</option>
				<option value="Antenna">Antenna</option>
				<option value="Soap">Soap</option>
			</select>
		</td>
		<td><input type="number" min="0" id="no_of_p${count}" onkeyup="myFunction(${count})" name="product" class="form-control re_size"/></td>
		<td>
			<div class="row">
				<div class="col-12"><input type="number" min="0" id="weight${count}" onkeyup="myFunction(${count})" name="weight" class="form-control weights re_size"/></div>
			</div>
		</td>
		<td>
			<select name="weight" id="weight_units${count}" onclick="myFunction(${count})" class="form-control re_size">
				<option value="KG">KG</option>
				<option value="GRAM">GRAM</option>
			</select>
		</td>
		<td style="vertical-align: middle; text-align: center;" id="totalWeight_${count}">0</td>
		<td><input type="number" min="0" id="customes_charge${count}" onkeyup="myFunction(${count})" name="customes_charges" class="form-control customes_charges re_size" readonly/></td>
		<td><input type="number" min="0" id="discount${count}" onkeyup="myFunction(${count})" name="discount" class="form-control discount re_size" /></td>
		<td style="vertical-align: middle; text-align: center" class="subtotals" id="subtotal${count}">0</td>
		<td><i class="far fa-trash-alt btn" id="delete_modal${count}" onclick="myFunc(${count})" style="font-size:1rem;" title="Delete"/></td>
		</tr>
		
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
		console.log(cellNumber);
		// var num = cellNumber.match(/\d+/);
		var num = cellNumber.replace(/[^0-9]/g, "");
		console.log(num);
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
$(document).ready(function () {
	var table = document.getElementById("prevProductTable");
	for (var i = 0, count = 1; i < table.rows.length; i++, count++) {
		var t = table.rows[i];

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
			}
		}
		document.getElementById(`totalWeight_${count}`).value = col5;
		document.getElementById(`customes_charge${count}`).value = col6;
		document.getElementById(`discount${count}`).value = col7;
		document.getElementById(`subtotal${count}`).value = col8;
		document.getElementById(`weight_units${count}`).click();
		document.getElementById("addRow").click();
	}
});

// $(document).ready(function () {
// 	let x = document.getElementById("row").rows.length;
// 	let y = x - 1;
// 	// document.getElementById(`delete_modal${y}`).click();
// 	document.getElementById("row").deleteRow(y);
// 	document.getElementById("addRow").style.display = "";
// });
