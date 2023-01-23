
// let pasType = 1;
// pasType = "Hello";

let prenom: string;
prenom = 'Chewie';


let nbPoils = 10000; // inférence de type => une fois affecté
// nbpoils = '';

type StringOrUndefined = string | undefined | null;
type PlusString = StringOrUndefined;

type StringPlusOuNumber = StringOrUndefined | number;

type TypeAvecPrenom = {
    prenom: string
}

type PrenomEtNom = TypeAvecPrenom & {
    nom: string
}

const wookieComplet: PrenomEtNom = {
    prenom: 'Chewie',
    nom: 'Kiyutttll'
};

const wookieTT: TypeAvecPrenom = {
    prenom: 'Chewie'
};

const wookieU = {
    prenom: 'Chewie'
};


// function afficher(item: TypeAvecPrenom) {
//     console.info(item.prenom);
// }
function afficher(item: { prenom: string }) {
    console.info(item.prenom);
}
afficher(wookieTT);
afficher(wookieU);

// afficher({ name: ''});
// afficher({ prenom: 'test', nom: 'hello'});

class Ewok {
    prenom !: string;
}
const outini: Ewok = new Ewok();
//outini.prenom = '1';

const outiniT: Ewok = {
    prenom: 'ahah'
};

afficher(outiniT);
afficher(outini);


const maVariable: any = {
    prenom: 'Chewie'
}

maVariable.Preno = 11;
maVariable.prenom = false;

interface Hurler {
    crier(): void;
}
interface HurlerMangeur extends Hurler {
    manger(): void
}

class WookieT implements Hurler {
    private _prenom : StringOrUndefined;

    constructor() {

    }

    crier(): void {
        console.log('Wrooaaaaa');
    }

    get prenom(): StringOrUndefined {
        return this._prenom;
    }
    set prenom(value: StringOrUndefined) {
        this._prenom = value;
    }
}
let wookie = new WookieT();
wookie.prenom = 'Chewie';


const hurleur: Hurler = new WookieT();

const loup: Hurler = {
    crier: () => {
        console.info('aouwwhhh');
    }
}


function afficherType(item: string | undefined): void {
    // if (typeof(item) !== 'undefined') { // type guard
    //     const result = item.toLowerCase(); // C'est une string uniquement
    // }

    if (item) { // type guard
        const result = item.toLowerCase(); // C'est une string uniquement
    }
}