import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


// fetch('votreurldeconfig')
// .then(response => response.json())
// .then(config => {
//   // recup dans variable global pour tout le projet
//   platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
// });

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

