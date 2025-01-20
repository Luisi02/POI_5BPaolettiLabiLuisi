import { tableComponent } from './componenti/tabella.js';
import { createMap } from './componenti/mappa.js';
import { loginComponent} from './componenti/login.js';
import { argumentComponent} from './componenti/argomento.js';
import { insertData} from './inserimento.js';
loginComponent().render();
createMap().render();
console.log("ciao");