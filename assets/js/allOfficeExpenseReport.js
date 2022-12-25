document.addEventListener("DOMContentLoaded", function () {
	// monthly
	const ctx = document.getElementById("myChart").getContext("2d");
	const myChart = new Chart(ctx, {
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
					label: ["BD Office Expense"],
					data: [50, 40, 10, 40, 70, 40, 10, 20, 40, 40, 50, 20],
					backgroundColor: ["#dc3545"],
					borderWidth: 1.5,
				},
				{
					label: ["MY Office Expense"],
					data: [10, 20, 30, 60, 40, 60, 70, 50, 40, 10, 40, 50],
					backgroundColor: ["#17a2b8"],
					borderWidth: 1.5,
				},
				{
					label: ["ALL Office Expense"],
					data: [20, 30, 40, 50, 10, 40, 70, 20, 60, 50, 60, 70],
					backgroundColor: ["#28a745"],
					borderWidth: 1.5,
				},
			],
		},
		options: {
			legend: {
				position: "top",
			},
			maintainAspectRatio: false,
		},
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	});

	// daily
	const ctx2 = document.getElementById("myChart2").getContext("2d");
	const myChart2 = new Chart(ctx2, {
		type: "bar",
		data: {
			labels: [
				"1",
				"2",
				"3",
				"4",
				"5",
				"6",
				"7",
				"8",
				"9",
				"10",
				"11",
				"12",
				"13",
				"14",
				"15",
				"16",
				"17",
				"18",
				"19",
				"20",
				"21",
				"22",
				"23",
				"24",
				"25",
				"26",
				"27",
				"28",
				"29",
				"30",
				"31",
			],
			datasets: [
				{
					label: ["BD Office Expense"],
					data: [
						50, 40, 10, 40, 70, 40, 10, 20, 40, 40, 50, 20, 10, 0, 20, 30, 40,
						50, 60, 70, 80, 90, 80, 70, 60, 50, 40, 30,
					],
					backgroundColor: ["#dc3545"],
					borderWidth: 1.5,
				},
				{
					label: ["MY Office Expense"],
					data: [
						10, 20, 30, 60, 40, 60, 70, 50, 40, 10, 40, 50, 60, 70, 80, 50, 40,
						30, 50, 90, 40, 10, 20, 30, 50, 60, 70, 40,
					],
					backgroundColor: ["#17a2b8"],
					borderWidth: 1.5,
				},
				{
					label: ["ALL Office Expense"],
					data: [
						20, 30, 40, 50, 10, 40, 70, 20, 60, 50, 60, 70, 60, 50, 40, 50, 60,
						70, 40, 30, 20, 10, 30, 50, 40, 60, 70, 80,
					],
					backgroundColor: ["#28a745"],
					borderWidth: 1.5,
				},
			],
		},
		options: {
			legend: {
				position: "top",
			},
			maintainAspectRatio: false,
		},
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	});

	// yearly

	const ctx3 = document.getElementById("myChart3").getContext("2d");
	const myChart3 = new Chart(ctx3, {
		type: "bar",
		data: {
			labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
			datasets: [
				{
					label: ["BD Office Expense"],
					data: [50, 40, 10, 40, 70, 40],
					backgroundColor: ["#dc3545"],
					borderWidth: 1.5,
				},
				{
					label: ["MY Office Expense"],
					data: [10, 20, 30, 60, 40, 60],
					backgroundColor: ["#17a2b8"],
					borderWidth: 1.5,
				},
				{
					label: ["ALL Office Expense"],
					data: [20, 30, 40, 50, 10, 40],
					backgroundColor: ["#28a745"],
					borderWidth: 1.5,
				},
			],
		},
		options: {
			legend: {
				position: "top",
			},
			maintainAspectRatio: false,
		},
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	});

	const datas = document.getElementById("dataDrop");
	const daily = document.getElementById("myChart2");
	const months = document.getElementById("myChart");
	const years = document.getElementById("myChart3");

	const bdOffice = document.getElementById("bdOffice")
	const myOffice = document.getElementById("myOffice")
	const allOffice = document.getElementById("allOffice")
	datas.addEventListener("change", dataTrack);
	function dataTrack() {
		console.log(datas.value);
		if (datas.value == "yearly") {
			years.style.display = "block";
			months.style.display = "none";
			daily.style.display = "none";

			let dataArray = myChart3.data.datasets;
			let len = dataArray[0].data.length - 1;
			let sumArray = new Array();

			for (let j = 0; j < 3; j++) {
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
			let tbdOffice = sumArray[0];
			let tmyOffice = sumArray[1];
			let tallOffice = sumArray[2];

			bdOffice.innerHTML = tbdOffice;
			myOffice.innerHTML = tmyOffice;
			allOffice.innerHTML = tallOffice;
		} else if (datas.value == "monthly") {
			months.style.display = "block";
			years.style.display = "none";
			daily.style.display = "none";
			let dataArray = myChart.data.datasets;
			let len = dataArray[0].data.length - 1;
			let sumArray = new Array();

			for (let j = 0; j < 3; j++) {
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
			let tbdOffice = sumArray[0];
			let tmyOffice = sumArray[1];
			let tallOffice = sumArray[2];

			bdOffice.innerHTML = tbdOffice;
			myOffice.innerHTML = tmyOffice;
			allOffice.innerHTML = tallOffice;
		} else if (datas.value == "daily") {
			daily.style.display = "block";
			months.style.display = "none";
			years.style.display = "none";

			let dataArray = myChart2.data.datasets;
			let len = dataArray[0].data.length - 1;
			let sumArray = new Array();

			for (let j = 0; j < 3; j++) {
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
            ;
			let tbdOffice = sumArray[0];
			let tmyOffice = sumArray[1];
			let tallOffice = sumArray[2];

			bdOffice.innerHTML = tbdOffice;
			myOffice.innerHTML = tmyOffice;
			allOffice.innerHTML = tallOffice;
		} else {
			daily.style.display = "none";
			months.style.display = "none";
            years.style.display = "none";
            
            document.getElementById("bdOffice").innerHTML = '0';
            document.getElementById("myOffice").innerHTML = '0';
            document.getElementById("allOffice").innerHTML = '0';
		}
	}
});
