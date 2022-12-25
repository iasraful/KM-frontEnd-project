imgInp.onchange = (evt) => {
	const [file] = imgInp.files;
	if (file) {
		blah.src = URL.createObjectURL(file);
	}
};
document.getElementById("imgInp").addEventListener("click", function () {
	document.getElementById("changeAvatar").style.display = "block";
	document.getElementById("imgInp").style.display = "none";
});
document.getElementById("cancelAvatar").addEventListener("click", function () {
	window.location.reload();
});
