class Footer extends HTMLElement {
	connectedCallback() {
		this.innerHTML =
			'<footer class="main-footer"><strong>Copyright © 2021 <a href="https://www.kmcargo.com.my/">KM Cargo & Logistics Sdn. Bhd.</a></strong>All rights reserved.</footer>';
	}
}
window.customElements.define("footer-foot", Footer);
