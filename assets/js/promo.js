var show = function (elem) {
	elem.classList.add("is-visible");
};
var hide = function (elem) {
	elem.classList.remove("is-visible");
};
var toggle = function (elem) {
	elem.classList.toggle("is-visible");
};
document.addEventListener(
	"click",
	function (event) {
		if (!event.target.classList.contains("toggle")) return;
		event.preventDefault();
		var content = document.querySelector(event.target.hash);
		if (!content) return;
		toggle(content);
	},
	false
);

function myFunction(count) {
	var table = document.getElementById("promoTable");
	var number = document.getElementById(`promoText${count}`).value;

	for (i = 0; i < table.rows.length; i++) {
		var tNum = table.rows[i].cells[0].innerHTML;
		var t = table.rows[i].cells[0];

		if (tNum == number) {
			var currentRow = $(t).closest("tr");

			var col1 = currentRow.find("td:eq(1)").text();

			let total_amount = document.getElementById("total_amount").value;

			var storedArray = JSON.parse(sessionStorage.getItem("amount"));

			if (storedArray != null) {
				let result = storedArray.includes(number);
				if (result === true) {
					alert("Promo Already Applied");
				} else {
					var old_data = JSON.parse(sessionStorage.getItem("amount"));
					old_data.push(number);
					sessionStorage.setItem("amount", JSON.stringify(old_data));

					var old_data2 = JSON.parse(sessionStorage.getItem("amountValue"));
					old_data2.push(col1);
					sessionStorage.setItem("amountValue", JSON.stringify(old_data2));

					var data = JSON.parse(sessionStorage.getItem("amountValue"));
					sum = data.reduce((a, b) => {
						return Number(a) + Number(b);
					});
					document.getElementById("promoAmount").value=sum;

					let FinalBalance = Number(total_amount) - Number(col1);

					document.getElementById("total_amount").value = Math.ceil(
						Number(FinalBalance)
					);

					document.getElementById(`promoBtn${count}`).style.display = "none";
					document.getElementById(`removePromo${count}`).style.display = "";
					document.getElementById("alertMsg").style.display = "";
					document.getElementById(`promoText${count}`).readOnly = true;
					document.getElementById("addRow").style.display = "";
					setTimeout(function () {
						document.getElementById("alertMsg").style.display = "none";
					}, 2000);
					var dataList = JSON.parse(sessionStorage.getItem("amount"));
					document.getElementById("promoList").value = dataList;
				}
			} else {
				if (sessionStorage.getItem("amount") == null) {
					sessionStorage.setItem("amount", "[]");
					sessionStorage.setItem("amountValue", "[]");
				}
				var old_data = JSON.parse(sessionStorage.getItem("amount"));
				old_data.push(number);
				sessionStorage.setItem("amount", JSON.stringify(old_data));

				var old_data2 = JSON.parse(sessionStorage.getItem("amountValue"));
				old_data2.push(col1);
				sessionStorage.setItem("amountValue", JSON.stringify(old_data2));

				var data = JSON.parse(sessionStorage.getItem("amountValue"));
				sum = data.reduce((a, b) => {
					return Number(a) + Number(b);
				});
				document.getElementById("promoAmount").value=sum;

				let FinalBalance = Number(total_amount) - Number(col1);

				document.getElementById("total_amount").value = Math.ceil(
					Number(FinalBalance)
				);
				
				document.getElementById(`promoBtn${count}`).style.display = "none";
				document.getElementById(`removePromo${count}`).style.display = "";
				document.getElementById("alertMsg").style.display = "";
				document.getElementById(`promoText${count}`).readOnly = true;
				document.getElementById("addRow").style.display = "";
				setTimeout(function () {
					document.getElementById("alertMsg").style.display = "none";
				}, 2000);
				var dataList = JSON.parse(sessionStorage.getItem("amount"));
				document.getElementById("promoList").value = dataList;
			}
		}
	}
}

function myFunc(count) {
	var table = document.getElementById("promoTable");
	var number = document.getElementById(`promoText${count}`).value;

	var arr = JSON.parse(sessionStorage.getItem("amount"));
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === number) {
			arr.splice(i, 1);
		}
	}
	sessionStorage.setItem("amount", JSON.stringify(arr));

	for (i = 0; i < table.rows.length; i++) {
		var tNum = table.rows[i].cells[0].innerHTML;
		var t = table.rows[i].cells[0];
		if (tNum == number) {
			var currentRow = $(t).closest("tr");

			var col1 = currentRow.find("td:eq(1)").text();
			col1 = Number(col1);

			var arr2 = JSON.parse(sessionStorage.getItem("amountValue"));
			for (var i = 0; i < arr2.length; i++) {
				console.log(col1);
				if (arr2[i] == col1) {
					arr2.splice(i, 1);
				}
			}
			sessionStorage.setItem("amountValue", JSON.stringify(arr2));

			var data = JSON.parse(sessionStorage.getItem("amountValue"));
			sum = data.reduce((a, b) => {
				return Number(a) + Number(b);
			},0);
			document.getElementById("promoAmount").value=sum;

			let total_amount = document.getElementById("total_amount").value;
			total_amount = Number(total_amount);
			let FinalBalance = total_amount + col1;
			document.getElementById("total_amount").value = Math.ceil(FinalBalance);

			document.getElementById(`promoText${count}`).readOnly = "";
			document.getElementById(`promoText${count}`).value = "";
			document.getElementById("alertMsg2").style.display = "";
			document.getElementById("addRow").style.display = "none";
			document.getElementById(`promoBtn${count}`).style.display = "";
			document.getElementById(`removePromo${count}`).style.display = "none";
			setTimeout(function () {
				document.getElementById("alertMsg2").style.display = "none";
			}, 2000);
			var dataList = JSON.parse(sessionStorage.getItem("amount"));
			document.getElementById("promoList").value = dataList;
		}
	}
}

function myFuncDel(count) {
	if (document.getElementById(`promoText${count}`).readOnly) {
		var table = document.getElementById("promoTable");
		var number = document.getElementById(`promoText${count}`).value;
		var arr = JSON.parse(sessionStorage.getItem("amount"));
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === number) {
				arr.splice(i, 1);
			}
		}
		sessionStorage.setItem("amount", JSON.stringify(arr));
		for (i = 0; i < table.rows.length; i++) {
			var tNum = table.rows[i].cells[0].innerHTML;
			var t = table.rows[i].cells[0];
			if (tNum == number) {
				var currentRow = $(t).closest("tr");

				var col1 = currentRow.find("td:eq(1)").text();
				col1 = Number(col1);

				var arr2 = JSON.parse(sessionStorage.getItem("amountValue"));
				for (var i = 0; i < arr2.length; i++) {
					console.log(col1);
					if (arr2[i] == col1) {
						arr2.splice(i, 1);
					}
				}
				sessionStorage.setItem("amountValue", JSON.stringify(arr2));

				var data = JSON.parse(sessionStorage.getItem("amountValue"));
				sum = data.reduce((a, b) => {
					return Number(a) + Number(b);
				},0);
				document.getElementById("promoAmount").value=sum;
				
				let total_amount = document.getElementById("total_amount").value;
				total_amount = Number(total_amount);
				let FinalBalance = total_amount + col1;
				document.getElementById("total_amount").value = Math.ceil(FinalBalance);
				

				document.getElementById(`promoText${count}`).remove();
				document.getElementById(`promoBtn${count}`).remove();
				document.getElementById(`removePromo${count}`).remove();
				document.getElementById(`del${count}`).remove();
				var dataList = JSON.parse(sessionStorage.getItem("amount"));
				document.getElementById("promoList").value = dataList;
			}
		}
	} else {
		document.getElementById(`promoText${count}`).remove();
		document.getElementById(`promoBtn${count}`).remove();
		document.getElementById(`removePromo${count}`).remove();
		document.getElementById(`del${count}`).remove();
		var dataList = JSON.parse(sessionStorage.getItem("amount"));
		document.getElementById("promoList").value = dataList;
	}
}

document.getElementById("addRow").addEventListener("click", function () {
	document.getElementById("addRow").style.display = "none";
});
window.onload = function () {
	sessionStorage.removeItem("amount");
	sessionStorage.removeItem("amountValue");
	toggleSidebar();
};
