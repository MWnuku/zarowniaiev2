function generateMenu(targetElement) {
    const menuHtml = `
    <div id="top-menu">
      <div class="collapse navbar-collapse main_menu" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
                    <li><a href="index.html">Witamy</a></li>
                    <li class="current"><a href="wydarzenia.html">Aktualności</a></li>
                    <li><a href="region.html">Region</a></li>
                    <li><a href="parafie.html">Parafie</a></li>
                    <li><a href="historia.html">Historia</a></li>
                    <li><a href="korzenie.html">Korzenie</a></li>
                    <li><a href="galeria.html">Galeria</a></li>
                    <li><a href="kontakt.html">O nas</a></li>
        </ul>
      </div>
    </div>
  `;

    targetElement.innerHTML = menuHtml;
}