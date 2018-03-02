import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }
  enableProdMode(); /* en modo comentario, por que se esta trabajando en modo desarrollador*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
