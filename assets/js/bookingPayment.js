$(document).ready(function () {
	$("#myModal").modal("show");
});
$(document).ready(function () {
	$(".my-select").selectpicker();
});

$(function () {
	$("#modal_btn").click(function () {
		var desire = $("#booking_value option:selected").val();
		if (desire != "") {
			$("#myModal").modal("hide");
		}
	});
});

function bookingNumber() {
	var bookingNum = document.getElementById("bk_number");
	var booking_id = document.getElementById("booking_id");
	var amount = document.getElementById("total_amount");
	var number = document.getElementById("booking_value").selectedOptions[0].text;

	var table = document.getElementById("mytab1");
	for (i = 0; i < table.rows.length; i++) {
		var tNum = table.rows[i].cells[1].innerHTML;
		var t = table.rows[i].cells[1];
		if (tNum == number) {
			var currentRow = $(t).closest("tr");

			var col1 = currentRow.find("td:eq(0)").text();
			var col2 = currentRow.find("td:eq(1)").text(); // get current row 1st TD value
			var col3 = currentRow.find("td:eq(2)").text(); // get current row 2nd TD
			console.log(col1);
			console.log(col2);
			bookingNum.value = col2;
			amount.value = col3;
			document.getElementById("printReceipt").href =
				"/booking/booking_receipt/" + col1;
		}
	}
}

function bankChoose() {
	var e = document.getElementById("chooseBank");
	var value = e.options[e.selectedIndex].value;
	console.log(value);
	if (value == "Bank Transfer") {
		document.getElementById("chooseBankList").style.display = "";
		document.getElementById("receiptNumber").style.display = "";
	} else {
		document.getElementById("chooseBankList").style.display = "none";
		document.getElementById("receiptNumber").style.display = "none";
	}
}
// $(document).ready(function () {
// 	document.getElementById("printReceipt").href =
// 		"/booking/booking_receipt/" + col1;
// })
$(document).ready(function () {
	var dataID=document.getElementById("booking_id").value;
	document.getElementById("printReceipt").href =
		"/booking/booking_receipt/" + dataID;
	console.log(col1);
})
