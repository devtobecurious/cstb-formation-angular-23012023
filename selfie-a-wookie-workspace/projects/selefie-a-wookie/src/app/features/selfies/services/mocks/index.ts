import { GetAll } from "projects/selefie-a-wookie/src/app/core/models";
import { Selfie } from "../../models";
import { Observable, from, of } from "rxjs";

export const mockGetAll: GetAll<Selfie> = {
  getAll(): Observable<Selfie[]> {
    const array = [{ date: new Date(), description: 'Super la vue !', titre: 'Moi, sur Mustafar !' },
                  { date: new Date(), description: 'Oh non, un droide !', titre: 'Il m\'a encore loupé' }];

    //from(array); le from emet un signal pour chaque element du tableau
    return  of(array); // emet un signal pour le tableau entier, une seule fois
  }
};
