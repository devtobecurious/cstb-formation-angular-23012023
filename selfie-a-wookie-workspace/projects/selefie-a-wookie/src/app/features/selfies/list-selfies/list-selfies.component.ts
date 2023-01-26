import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Selfie, SelfieResult } from '../models';
import { DatePipe } from '@angular/common';
import { SelfieBusiness } from '../services/selfie.business';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-list-selfies',
  templateUrl: './list-selfies.component.html',
  styleUrls: ['./list-selfies.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ListSelfiesComponent implements OnInit, OnChanges {
  private _titre = '';

  @Output() ajoutEffectue = new EventEmitter<SelfieResult>();

  @Input('title') set titre(value: string) {
    if (value == '') {
      value = 'Titre par défaut';
    }
    this._titre = value;
  }
  get titre(): string {
    return this._titre;
  }

  selfies !: Selfie[]; // [{ date: new Date(), description: 'Super la vue !', titre: 'Moi, sur Mustafar !' },
                     //  { date: new Date(), description: 'Oh non, un droide !', titre: 'Il m\'a encore loupé' }];

  constructor(private readonly business: SelfieBusiness,
              private readonly route: ActivatedRoute,
              private readonly router: Router) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info('1', changes);

    //this.ajoutEffectue.emit({});
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    // this.route.params.pipe(
    //   switchMap(params => this.business.getAll())
    // ).subscribe(items => this.selfies = items);

    console.info('0. init');
    this.business.getAll().subscribe(items => this.selfies = items);
  }

  addSelfie(nb: number): void {
    const selfie = { date: new Date(), description: 'Test 1', titre: 'Titre 1' };

    // if (true) {
    //   const tableau = [];
    //   tableau.push('');

    //   // tableau = []; on change de ref, donc on ne peut à cause du const
    // }
    this.ajoutEffectue.emit({ success: true, item: selfie });
    this.selfies.push(selfie);
  }

  removeSelfie(nb: number): void {
    this.selfies.pop();
  }

  get avoirDesElements(): boolean {
    return this.selfies.length > 0;
  }


  uneFonctionANePasUtiliser(): string {
    console.info('Appel uneFonction');
    return 'titre';
  }

}
