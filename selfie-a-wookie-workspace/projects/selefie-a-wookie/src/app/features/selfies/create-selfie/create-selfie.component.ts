import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';

@Component({
  selector: 'saw-create-selfie',
  templateUrl: './create-selfie.component.html',
  styleUrls: ['./create-selfie.component.css']
})
export class CreateSelfieComponent {
  selfieCreationForm = new FormGroup({
    titre: new FormControl('valeur par défaut', [Validators.required, Validators.email])
  });

  save(): void {
    this.selfieCreationForm.valueChanges.pipe(
      //switchMap(item => item.)
    );

    const item = this.selfieCreationForm.value;
  }
}
