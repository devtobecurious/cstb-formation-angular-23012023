import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  ngOnInit(): void {
    console.log("*********************************************");

    const callback = (item: any) => console.info(item);

    // Eager => s'exécute à l'appel (création)
    const promise = new Promise((resolve, reject) => {
      console.log("0. Promise");

      setTimeout(() => {
        // mon gros calcul
        const resultDuGrosCalcul = '1. RETOUR PROMESSE';
        resolve(resultDuGrosCalcul);
      }, 1000);

    }).then(callback);
    // const result = await promise;

    // Lazy => ne s'exécute pas à l'appel (création)
    const observable$ = new Observable(subscriber => {
      console.log("0. Observable");

      setTimeout(() => {
        subscriber.next('1. RETOUR OBSERVABLE');
        subscriber.next('10. RETOUR OBSERVABLE');
        subscriber.complete();
      }, 0);
    });
    observable$.subscribe(callback,
                          err => console.error(err),
                          () => console.info('COMPLETE !!')); // exécute tout le code de l'observable
    observable$.subscribe();// exécute tout le code de l'observable

    console.log("_______________________________________________");
  }
}
