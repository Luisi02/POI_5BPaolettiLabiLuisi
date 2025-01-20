import { tableComponent } from './componenti/tabella.js';
import { createMap } from './componenti/mappa.js';
import { loginComponent } from './componenti/login.js';
import { loginAddress } from './componenti/conf.js';
/*import { argumentComponent} from './componenti/argomento.js';*/
/*import { insertData} from './componenti/inserimento.js';*/

const table = tableComponent('tabella');

// Funzione per gestire il reindirizzamento ai dettagli
function vaiADettagli(argomento, descrizione, immagine) {
    // Salva i dati nel localStorage
    localStorage.setItem('argomento', argomento);
    localStorage.setItem('descrizione', descrizione);
    localStorage.setItem('immagine', immagine);

    // Reindirizza alla pagina dei dettagli
    window.location.href = 'argomento.html';
}   

// Associa le funzioni ai pulsanti
document.getElementById('showTableBtn').onclick = () => {
    table.mostraTabella();
};

document.getElementById('addRowBtn').onclick = () => {
    table.aggiungiRiga();
};

loginComponent().render();
loginComponent().verify();
createMap().render();