// nav minimize left
var mini = true;

function toggleSidebar() {
	if (mini) {
		document.getElementById("mySidebar").style.width = "270px";
		document.getElementById("main").style.marginLeft = "270px";
		this.mini = false;
	} else {
		document.getElementById("mySidebar").style.width = "0px";
		document.getElementById("main").style.marginLeft = "0px";
		this.mini = true;
	}
}

// accordion dropdown
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		var panel = this.nextElementSibling;
		if (panel.style.display == "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}

// nav fixed-top
document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener("scroll", function () {
		if (window.scrollY > 50) {
			document.getElementById("navbar_top").classList.add("fixed-top");
			navbar_height = document.querySelector(".navbar").offsetHeight;
			document.body.style.paddingTop = navbar_height + "px";
		} else {
			document.getElementById("navbar_top").classList.remove("fixed-top");
			document.body.style.paddingTop = "0";
		}
	});
});

//active !important
const currentLocation = location.href;
const menuItem = document.querySelectorAll("a");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
	if (menuItem[i].href === currentLocation) {
		menuItem[i].className = "active";
		menuItem[i].closest("ul").style.display = "block";
	}
}



document.getElementById("check").addEventListener("click", function () {
	alert("check")
});
// nav accordion !important
// var url = window.location.toString();
// $("#mySidebar a").each(function () {
// 	var myHref = $(this).attr("href");
// 	if (url.match(myHref)) {
// 		console.log(myHref);
// 		$(this).closest("ul").show();
// 	}
// });
// links = document.querySelectorAll("#mySidebar a");
// var en = document.getElementsByClassName("panel");
// for (var i = 0; i < links.length; i++) {
// 	var myHref = links[i].href;
// 	if (url.match(myHref)) {
// 		en[1].closest("ul").style.display = "block";
// 	}
// }
// document.getElementById("mySidebar").querySelectorAll("a").each(function () {
// 	var myHref = document.querySelector(this).attr("href");
// 	if (url.match(myHref)) {
// 		document.querySelector(this).closest("ul").show();
// 	}
// });
// var elements = document.querySelectorAll("#mySidebar a");
// Array.prototype.forEach.call(elements, function () {
// 	let myHref = this.getAttribute("href");
// 	if (url.match(myHref)) {
// 		this.closest("ul").style.display = "";
// 	}
// });

// $(selector).each(function (i, el) { });
// var elements = document.querySelectorAll(selector);
// Array.prototype.forEach.call(elements, function (el, i) {});
