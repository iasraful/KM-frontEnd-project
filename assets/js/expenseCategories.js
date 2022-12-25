var a = document.getElementsByClassName("edit");

for (var i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function () {
        var b = this.parentNode.parentNode.cells[0].textContent;
        document.getElementById("title").value = b;
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
