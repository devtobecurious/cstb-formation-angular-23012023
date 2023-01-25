import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'selefie-a-wookie';

  test(): void {
    fetch('url').then(item => console.info(item));
  }
}
