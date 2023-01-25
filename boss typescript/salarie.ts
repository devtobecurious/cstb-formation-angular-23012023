// function afficher(mess: string): void {

// }

export type AfficheInfo = (mess: string) => void;

export interface MoyenDeDeplacement {
    deplacer(): void;
}

export class Salarie {
    afficher: AfficheInfo;

    constructor(functionAfficher: AfficheInfo) {
        this.afficher = functionAfficher;
    }

    allerAuTravail(moyen: MoyenDeDeplacement): void {
        this.afficher('Je vais au travail');
        moyen.deplacer();
    }
}

export type Ordinateur = {
    version: string
}

class Bureau {

}