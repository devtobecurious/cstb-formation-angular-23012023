"use strict";
// let pasType = 1;
// pasType = "Hello";
let prenom;
prenom = 'Chewie';
let nbPoils = 10000; // inférence de type => une fois affecté
const wookieComplet = {
    prenom: 'Chewie',
    nom: 'Kiyutttll'
};
const wookieTT = {
    prenom: 'Chewie'
};
const wookieU = {
    prenom: 'Chewie'
};
// function afficher(item: TypeAvecPrenom) {
//     console.info(item.prenom);
// }
function afficher(item) {
    console.info(item.prenom);
}
afficher(wookieTT);
afficher(wookieU);
// afficher({ name: ''});
// afficher({ prenom: 'test', nom: 'hello'});
class Ewok {
}
const outini = new Ewok();
//outini.prenom = '1';
const outiniT = {
    prenom: 'ahah'
};
afficher(outiniT);
afficher(outini);
const maVariable = {
    prenom: 'Chewie'
};
maVariable.Preno = 11;
maVariable.prenom = false;
class WookieT {
    constructor() {
    }
    crier() {
        console.log('Wrooaaaaa');
    }
    get prenom() {
        return this._prenom;
    }
    set prenom(value) {
        this._prenom = value;
    }
}
let wookie = new WookieT();
wookie.prenom = 'Chewie';
const hurleur = new WookieT();
const loup = {
    crier: () => {
        console.info('aouwwhhh');
    }
};
