const tableComponent = (contenitoreId) => {
    const contenitoreTabella = document.getElementById(contenitoreId);
    const corpoTabella = contenitoreTabella.querySelector('tbody');
    const inputArgomento = contenitoreTabella.querySelector('#input-argomento');
    const inputDescrizione = contenitoreTabella.querySelector('#input-descrizione');

    let conteggioRighe = 0;

    return {
        mostraTabella: () => {
            contenitoreTabella.style.display = 'block';
        },
        aggiungiRiga: () => {
            conteggioRighe++;
            const numero = conteggioRighe;
            const nuovoArgomento = inputArgomento.value || `Argomento ${numero}`;
            const nuovaDescrizione = inputDescrizione.value || `Descrizione per l'argomento ${numero}`;

            const nuovaRiga = `
                <tr>
                    <td>${numero}</td>
                    <td>${nuovoArgomento}</td>
                    <td>${nuovaDescrizione}</td>
                </tr>
            `;

            corpoTabella.innerHTML += nuovaRiga;

            inputArgomento.value = '';
            inputDescrizione.value = '';
        },
        inizializza: () => {
            this.mostraTabella();
        }
    };
};

const table = tableComponent('tabella');

document.getElementById('showTableBtn').addEventListener('click', () => {
    table.mostraTabella();
});

document.getElementById('addRowBtn').addEventListener('click', () => {
    table.aggiungiRiga();
});