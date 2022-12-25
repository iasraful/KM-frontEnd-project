document.getElementById("select-all").onclick = function () {
	var checkboxes = document.getElementsByClassName("select_data");
	for (var checkbox of checkboxes) {
		checkbox.checked = this.checked;
	}
};

$(document).ready(function () {
	$("input.select_data").click(myfunc);
});

function myfunc(ele) {
	var values = new Array();
	$.each(
		$("input[name='case[]']:checked").closest("td").siblings("td"),
		function () {
			values.push($(this).text());
		}
	);
    console.log("val---" + values);
}

var n = document.getElementById("setNum");
var d = localStorage.getItem("dt");
n.innerHTML = d;

