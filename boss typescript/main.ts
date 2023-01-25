import {Salarie, Ordinateur, MoyenDeDeplacement, AfficheInfo} from './salarie';

const callBack: AfficheInfo = (mess: string) => console.info(mess);
const callBackError: AfficheInfo = (mess: string) => console.error(mess);

const salarie = new Salarie(callBackError);

const moyenDeplacement: MoyenDeDeplacement = {
    deplacer(): void {
        console.warn('Déplaçons nous');
    }
}
salarie.allerAuTravail(moyenDeplacement);