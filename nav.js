export const nav =  `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Annuaire</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Accueil</a>
          </li>
          <li>
          <form>
            <div>
              <input
                type="search"
                id="mySearch"
                name="q"
                placeholder="Recherche sur le site…"
                required />
              <button>Rechercher</button>
              <span class="validity"></span>
            </div>
          </form>

          </li>
        </ul>
      </div>
    </div>
  </nav>
`;
