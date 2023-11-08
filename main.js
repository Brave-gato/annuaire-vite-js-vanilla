import * as bootstrap from 'bootstrap';
import './style.scss';
import { data } from './data';
import { nav } from './nav';

// sort by name

const listePersonnes = () => {
  let html = '';
  for (let i = 0; i < data.length; i++) {
    const personne = data[i];
    let personneCard = `
      <a class="card col-5 col-md-3" href="/personne/?id=${personne.id}">
        <img src="${personne.avatar}" class="card-img-top" alt="avatar de ${personne.prenom} ${personne.nom}">
        <div class="card-body">
          <h5 class="card-title">${personne.prenom} ${personne.nom}</h5>
        </div>
      </a>
    `;
    html += personneCard;
  }
  return html;
};

let filterData = Array.from(data);
const q = new URL(window.location).searchParams.get("q")?.toLowerCase;
if(q !== null && q !== undefined){
  filterData = filterData.filter(
    (p)=>
    p.nom.toLowerCase().includes(q)||
    p.prenom.toLowerCase().includes(q)||
    p.adresse_email.toLowerCase().includes(q)
  );
  
}

/*
data.sort((a, b) => {
  const nameA = a.nom.toUpperCase(); // ignore upper and lowercase
  const nameB = b.nom.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
*/
data.sort((p1,p2)=>p1.nom.localeCompare(p2.nom))

document.querySelector('#app').innerHTML = `
  <main>
    ${nav}

    <div class="container-fluid my-4">
      <div id="liste-personnes" class="d-flex gap-3 flex-wrap justify-content-center">
        ${listePersonnes()}
      </div>
    </div>
  </main>
`;
const searchInput = document.querySelector('#mySearch');
searchInput.addEventListener("input",(event)=>{
  const url = new URL(window.location);
  url.searchParams("q",event.target.value);
  window.history.pushState({},"",url);

  const liste = document.querySelector("#liste-personnes");
  liste.innerHTML = listePersonnes();
});
