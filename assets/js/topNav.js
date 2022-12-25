class Topbar extends HTMLElement {
	connectedCallback() {
		this.innerHTML =
			'<nav id="navbar_top" class="navbar navbar-expand-lg bg-white navbar-light bar"> <ul class="navbar-nav mr-auto d-flex align-items-center"> <div class="nav-item mr-3" onclick="toggleSidebar()" onclick="toggleSidebar()"> <i class="fas fa-bars"></i> </div> </ul> <ul class="navbar-nav ml-auto d-flex align-items-center dropdown-menu-right"><form action=""> <div class="nav-item dropdown"> <a class="nav-link" id="check" data-toggle="dropdown" href="#"> <img src="assets/img/logo-update.png" class="img-circle" style="height: 30px;" alt="User Image"> Admin </a> <div class="dropdown-menu mt-3" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-65px, 38px, 0px);"> <a href="changeAvatar.html" class="dropdown-item"><i class="fas fa-user-edit mr-2"></i> Change Avatar</a> <div class="dropdown-divider"></div> <a href="#" class="dropdown-item"><i class="fas fa-sign-out-alt mr-2"></i> Sign Out</a> </div> </div></form></ul> </nav>';
	}
}
window.customElements.define("top-bar", Topbar);
