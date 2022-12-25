var a = document.getElementsByClassName("edit");

for (var i = 0; i < a.length; i++) {
	a[i].addEventListener("click", function () {
		var b = this.parentNode.parentNode.cells[0].textContent;
		document.getElementById("b_num").value = b;
		var c = this.parentNode.parentNode.cells[1].textContent;
		document.getElementById("pay_option").value = c;
		var d = this.parentNode.parentNode.cells[2].textContent;
		document.getElementById("tran_number").value = d;
		var e = this.parentNode.parentNode.cells[3].textContent;
		document.getElementById("t_amount").value = e;
		var f = this.parentNode.parentNode.cells[4].textContent;
		document.getElementById("p_amount").value = f;
		
	});
}

$(document).ready(function () {
	$("#example").on("click", ".delete", function () {
		var currentRow = $(this).closest("tr");
		$("#confirm").click(function () {
			currentRow.remove();
		});
	});
});
