const tableComponent = (contenitoreId) => {
    const contenitoreTabella = document.getElementById(contenitoreId);
    const corpoTabella = contenitoreTabella.querySelector('tbody');
    const inputArgomento = contenitoreTabella.querySelector('#input-argomento');
    const emptyMessage = contenitoreTabella.querySelector('#emptyMessage');

    let conteggioRighe = 0;

    return {
        mostraTabella: () => {
            contenitoreTabella.style.display = 'block';
        },
        aggiornaMessaggio: () => {
            if (conteggioRighe === 0) {
                emptyMessage.style.display = 'block';
            } else {
                emptyMessage.style.display = 'none';
            }
        },
        aggiungiRiga: () => {
            conteggioRighe++;
            const numero = conteggioRighe;
            const nuovoArgomento = inputArgomento.value || `Argomento ${numero}`;
            const immagine = `path/to/image${numero}.jpg`; // Modifica il percorso dell'immagine

            const nuovaRiga = `
                <tr>
                    <td>${numero}</td>
                    <td class="argomento" data-argomento="${nuovoArgomento}" data-immagine="${immagine}" onclick="vaiADettagli('${nuovoArgomento}', '${immagine}')">${nuovoArgomento}</td>
                </tr>
            `;

            corpoTabella.innerHTML += nuovaRiga;

            inputArgomento.value = '';

            this.aggiornaMessaggio();
        },
        inizializza: () => {
            this.mostraTabella();
            this.aggiornaMessaggio();
        }
    };
};

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