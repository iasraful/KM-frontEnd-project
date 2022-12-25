document.addEventListener("DOMContentLoaded", function () {
	var ctx = document.getElementById("myChart").getContext("2d");
	var myChart = new Chart(ctx, {
		type: "bar",
		data: {
			labels: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			],
			datasets: [
				{
					label: ["Total Bookings"],
					data: [1, 7, 6, 5, 4, 3, 2, 4, 7, 6, 5, 1],
					backgroundColor: ["#2b9348"],
				},
				{
					label: ["Total Delivered"],
					data: [2, 7, 6, 5, 4, 3, 1, 7, 1, 6, 4, 3],
					backgroundColor: ["#17a2b8"],
				},
				{
					label: ["Total Weight"],
					data: [30, 50, 10, 50, 40, 20, 20, 60, 70, 10, 40, 30],
					backgroundColor: ["#3d5a80"],
				},
				{
					label: ["Cargo Charge"],
					data: [40, 70, 60, 50, 10, 20, 30, 20, 70, 60, 50, 40],
					backgroundColor: ["#98c1d9"],
				},
				{
					label: ["Custom Charge"],
					data: [50, 70, 60, 10, 30, 20, 40, 30, 70, 10, 50, 40],
					backgroundColor: ["#4ecdc4"],
				},
				{
					label: ["Home Delivery Charge"],
					data: [60, 70, 10, 40, 30, 20, 50, 10, 70, 60, 50, 40],
					backgroundColor: ["#ee6c4d"],
				},
				{
					label: ["Additional Charge"],
					data: [70, 10, 60, 40, 30, 20, 60, 30, 70, 10, 50, 40],
					backgroundColor: ["#293241"],
				},
			],
		},
		options: {
			legend: {
				position: "right",
			},
			maintainAspectRatio: false,
		},
	});

	// another
	var ctx2 = document.getElementById("myChart2").getContext("2d");
	var myChart2 = new Chart(ctx2, {
		type: "bar",
		data: {
			labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
			datasets: [
				{
					label: ["Total Bookings"],
					data: [10, 70, 60, 50, 40, 30],
					backgroundColor: ["#2b9348"],
				},
				{
					label: ["Total Delivered"],
					data: [20, 60, 50, 50, 40, 30],
					backgroundColor: ["#17a2b8"],
				},
				{
					label: ["Total Weight"],
					data: [30, 50, 40, 50, 40, 20],
					backgroundColor: ["#3d5a80"],
				},
				{
					label: ["Cargo Charge"],
					data: [40, 40, 30, 50, 10, 20],
					backgroundColor: ["#98c1d9"],
				},
				{
					label: ["Custom Charge"],
					data: [50, 30, 20, 10, 30, 20],
					backgroundColor: ["#4ecdc4"],
				},
				{
					label: ["Home Delivery Charge"],
					data: [60, 20, 10, 40, 30, 20],
					backgroundColor: ["#ee6c4d"],
				},
				{
					label: ["Additional Charge"],
					data: [70, 10, 70, 40, 30, 20],
					backgroundColor: ["#293241"],
				},
			],
		},
		options: {
			legend: {
				position: "right",
			},
			maintainAspectRatio: false,
		},
	});

	const datas = document.getElementById("dataDrop");
	const years = document.getElementById("myChart2");
	const months = document.getElementById("myChart");
	datas.addEventListener("change", dataTrack);
	function dataTrack() {
		if (datas.value == "yearly") {
			years.style.display = "block";
			months.style.display = "none";
			let dataArray = myChart2.data.datasets;
			let len = dataArray[0].data.length - 1;
			let sumArray = new Array();

			for (let j = 0; j < 7; j++) {
				var i = 0;
				var sum = 0;
				for (let dt of dataArray[j].data) {
					sum += dt;
					if (i === len) {
						sumArray.push(sum);
						break;
					}
					i++;
				}
			}
			let tBookingMonth = sumArray[0];
			let tDeliveredMonth = sumArray[1];
			let tWeightMonth = sumArray[2];
			let tCargoMonth = sumArray[3];
			let tCustomMonth = sumArray[4];
			let tHomeDMonth = sumArray[5];
			let tAdditionalMonth = sumArray[6];

			document.getElementById("tBooking").innerHTML = tBookingMonth;
			document.getElementById("tDelivered").innerHTML = tDeliveredMonth;
			document.getElementById("tWeight").innerHTML = tWeightMonth;
			document.getElementById("tCargo").innerHTML = tCargoMonth;
			document.getElementById("tCustom").innerHTML = tCustomMonth;
			document.getElementById("tHome").innerHTML = tHomeDMonth;
			document.getElementById("tAdditional").innerHTML = tAdditionalMonth;
		} else if (datas.value == "monthly") {
			months.style.display = "block";
			years.style.display = "none";
			let dataArray = myChart.data.datasets;
			let len = dataArray[0].data.length - 1;
			let sumArray = new Array();

			for (let j = 0; j < 7; j++) {
				var i = 0;
				var sum = 0;
				for (let dt of dataArray[j].data) {
					sum += dt;
					if (i === len) {
						sumArray.push(sum);
						break;
					}
					i++;
				}
			}
			let tBookingMonth = sumArray[0];
			let tDeliveredMonth = sumArray[1];
			let tWeightMonth = sumArray[2];
			let tCargoMonth = sumArray[3];
			let tCustomMonth = sumArray[4];
			let tHomeDMonth = sumArray[5];
			let tAdditionalMonth = sumArray[6];

			document.getElementById("tBooking").innerHTML = tBookingMonth;
			document.getElementById("tDelivered").innerHTML = tDeliveredMonth;
			document.getElementById("tWeight").innerHTML = tWeightMonth;
			document.getElementById("tCargo").innerHTML = tCargoMonth;
			document.getElementById("tCustom").innerHTML = tCustomMonth;
			document.getElementById("tHome").innerHTML = tHomeDMonth;
			document.getElementById("tAdditional").innerHTML = tAdditionalMonth;
		}
    }
});