const argumentComponent = () => {
    const titoloElement = document.getElementById('argomento-titolo');
    const immagineElement = document.getElementById('argomento-immagine');
    const descrizioneElement = document.getElementById('argomento-descrizione');
    const esciBtn = document.getElementById('esciBtn'); // Riferimento al pulsante "Esci"

    const caricaDettagli = () => {
        // Recupera i dati dal localStorage
        const argomento = localStorage.getItem('argomento');
        const descrizione = localStorage.getItem('descrizione');
        const immagine = localStorage.getItem('immagine');

        // Imposta i dati nella pagina
        titoloElement.innerText = argomento || 'Argomento non disponibile';
        descrizioneElement.innerText = descrizione || 'Descrizione non disponibile';
        immagineElement.src = immagine || ''; // Imposta l'immagine
    };

    const inizializza = () => {
        caricaDettagli();
        esciBtn.onclick = esci; // Assegna la funzione esci al pulsante "Esci"
    };

    return {
        inizializza
    };
};

// Funzione per gestire il pulsante "Esci"
function esci() {
    window.location.href = 'tabella.html'; // Torna alla pagina principale
}

// Inizializza il componente degli argomenti
const argument = argumentComponent();
argument.inizializza();

export {argumentComponent};