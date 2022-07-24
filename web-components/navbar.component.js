class Navbar extends HTMLElement {
  constructor() {
    super();

    let shadow = this.attachShadow({ mode: "open" });
    this.navbar = document.createElement("nav");
    this.navbar.className =
      "navbar navbar-expand-lg fixed-top navbar-dark bg-primary";

    shadow.appendChild(this.navbar);
  }

  connectedCallback() {
    this.navContainer = document.createElement("div");
    this.navContainer.className = "container-fluid";

    this.navbar.innerHTML = `
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Book Store</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
          </ul>

          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search...</button>
          </form>
        </div>
      </div>
    `;
  }
}

customElements.define("app-navbar", Navbar);
