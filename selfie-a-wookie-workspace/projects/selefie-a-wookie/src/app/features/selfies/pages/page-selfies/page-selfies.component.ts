import { Component, inject } from '@angular/core';
import { SelfieResult } from '../../models';
import { LoggerService } from 'projects/selefie-a-wookie/src/app/shared/services/logger.service';

@Component({
  selector: 'app-page-selfies',
  templateUrl: './page-selfies.component.html',
  styleUrls: ['./page-selfies.component.css']
})
export class PageSelfiesComponent {
  // private _logger: LoggerService;
  // angular >= 14 : private logger = inject(LoggerService);

  // /**
  //  *
  //  */
  // constructor(logger: LoggerService) {
  //   this._logger = logger;
  // }
  // version <= angular 13
  constructor(private readonly logger: LoggerService) {} // le readonly est comme un const pour une variable locale

  actionQuandAjoutFait(item: SelfieResult): void {
    this.logger.log('Click fait', item);
  }
}
