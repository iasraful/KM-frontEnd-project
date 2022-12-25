$(function () {
	$("td:contains('In Malaysia Office')")
		.addClass("text-white btn bg-danger Actions res")
		.css("font-size", ".9rem");
	$("td:contains('In Bangladesh Office')")
		.addClass("text-white btn bg-info Actions res")
		.css("font-size", ".9rem");
	$("td:contains('Customes')")
		.addClass("text-white btn bg-warning Actions res")
		.css("font-size", ".9rem");
	$("td:contains('Delivered')")
		.addClass("text-white btn bg-success Actions res")
		.css("font-size", ".9rem");
});
