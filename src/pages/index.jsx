//import souborů, '@czechitas/render' je knihovna pro jednodušší vykreslování obsahu stránky
import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

//Funkce handleHlasuj odeslání hlasu na server
//polId -identifikátor hlasování
//option 2 -volba,pro kt uživatel hlasuje
//name: input - jméno uživatele, kt se získá z formuláře
//fetch() pošle data metodou POST na server API hlasovani.czechitas.dev
const handleHlasuj = async (input) => {
  const polId = 1
  const data = {
    option: 2,
    name: input
  }
  const resp = await fetch (`https://hlasovani.czechitas.dev/api/poll/${pollId}`,{
    method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
  });
  if(!resp.ok) {
    alert("Hlasování se nepodařilo, zkuste to prosím později.")
  }
}

//vykreslení formuláře, kde uživatel zadá své jméno, umožňuje hlasovat
document.querySelector('#root').innerHTML = render(
  <div className="container">
      <form className="form">
      <label>Zadej jméno:

      <input id='inp' type="text" />
    </label>

    <button id='btn' type='submit'>Hlasovat</button>
    </form>
  </div>
);


//ošetření formuláře
//(document.querySelector('#inp').value) získání hodnoty jména
//volání handleHlasuj(), odešle hlas na server

document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault()
  handleHlasuj(document.querySelector('#inp').value)
})
