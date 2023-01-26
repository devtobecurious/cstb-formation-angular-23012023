import { Component, Input } from '@angular/core';
import { Selfie } from '../models';

@Component({
  selector: 'saw-edit-selfie',
  templateUrl: './edit-selfie.component.html',
  styleUrls: ['./edit-selfie.component.css']
})
export class EditSelfieComponent {
  @Input() item !: Selfie;

  save(): void {
    // this.monService.save(this.item); // l'item a déjà les bonnes valeurs saisies par l'user => ngModel
  }
}
