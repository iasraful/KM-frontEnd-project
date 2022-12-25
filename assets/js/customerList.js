$(document).ready(function () {
	$("#dataTable").on("click", ".edit", function () {
		var currentRow = $(this).closest("tr");

		var col1 = currentRow.find("td:eq(0)").text();
		var col2 = currentRow.find("td:eq(1)").text();
		var col3 = currentRow.find("td:eq(2)").text();
		var col4 = currentRow.find("td:eq(3)").text();
		var col5 = currentRow.find("td:eq(4)").text();
		var col6 = currentRow.find("td:eq(5)").text();
		var col7 = currentRow.find("td:eq(6)").text();

		document.getElementById("editId").value = col1;
		document.getElementById("name").value = col2;
		document.getElementById("phone").value = col3;
		document.getElementById("freight").value = col4;
		document.getElementById("country").value = col5;
		document.getElementById("state").value = col6;
		document.getElementById("city").value = col7;
	});
});

$(document).ready(function () {
	$("#dataTable").on("click", ".delete", function () {
		var currentRow = $(this).closest("tr");
		$("#confirm").click(function () {
			currentRow.remove();
		});
	});
});

// $(document).ready(function () {
// 	$("#dataTable").on("click", ".edit", function () {
// 		var currentRow = $(this).closest("tr");
// 		var idNumber = currentRow.find("td:eq(0)").text();
// 		document.getElementById("submit").addEventListener("click", function () {
// 			document.getElementById("updateUser").action = "edit_booking/" + idNumber;
// 		});
// 	});
// });
$(document).ready(function () {
	$("#dataTable").on("click", ".edit_data", function () {
		var currentRow = $(this).closest("tr");
		var col1 = currentRow.find("td:eq(0)").text();

		$("#updateUser").click(function () {
			document.getElementById("updateCumtomerId").action =
				"edit_user/" + col1 + "/";
		});
	});
});

//Graph

// document.addEventListener("DOMContentLoaded", function () {
// 	var ctx = document.getElementById("myChart").getContext("2d");
// 	var myChart = new Chart(ctx, {
// 		type: "bar",
// 		data: {
// 			labels: [
// 				"January",
// 				"February",
// 				"March",
// 				"April",
// 				"May",
// 				"June",
// 				"July",
// 				"August",
// 				"September",
// 				"October",
// 				"November",
// 				"December",
// 			],
// 			datasets: [
// 				{
// 					label: ["Total Customer"],
// 					data: [1, 7, 6, 5, 4, 3, 2, 4, 7, 6, 5, 1],
// 					fill: false,
// 					backgroundColor: "#2b9348",
// 					borderColor: "#2b9348",
// 					borderWidth:2,
// 					tension: 0.1,
// 				},
// 			],
// 		},
// 		options: {
// 			legend: {
// 				position: "top",
// 			},
// 			maintainAspectRatio: false,
// 		},
// 	});

// 	// another
// 	var ctx2 = document.getElementById("myChart2").getContext("2d");
// 	var myChart2 = new Chart(ctx2, {
// 		type: "bar",
// 		data: {
// 			labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
// 			datasets: [
// 				{
// 					label: ["Total Customer"],
// 					data: [10, 70, 60, 50, 40, 30],
// 					fill: true,
// 					backgroundColor: "#2b9348",
// 					borderColor: "#2b9348",
// 					tension: 0.2,
// 				},
// 			],
// 		},
// 		options: {
// 			legend: {
// 				position: "top",
// 			},
// 			maintainAspectRatio: false,
// 		},
// 	});

// 	const datas = document.getElementById("dataDrop");
// 	const years = document.getElementById("myChart2");
// 	const months = document.getElementById("myChart");
// 	datas.addEventListener("change", dataTrack);
// 	function dataTrack() {
// 		if (datas.value == "yearly") {
// 			years.style.display = "block";
// 			months.style.display = "none";
// 			let dataArray = myChart2.data.datasets;
// 			let len = dataArray[0].data;

// 			var sum = 0;
// 			for (let dt of len) {
// 				sum += dt;
// 			}
// 			let tCustomer = sum;
// 			document.getElementById("tCustomer").innerHTML = tCustomer;
// 		} else if (datas.value == "monthly") {
// 			months.style.display = "block";
// 			years.style.display = "none";
// 			let dataArray = myChart.data.datasets;
// 			let len = dataArray[0].data;

// 			var sum = 0;
// 			for (let dt of len) {
// 				sum += dt;
// 			}
// 			let tCustomer = sum;
// 			document.getElementById("tCustomer").innerHTML = tCustomer;
// 		}
// 	}

// });
