import 'zone.js';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { CoolModule } from './app/cool/cool.module';

if (environment.production) {
  enableProdMode();
}

const mount = () => {
  platformBrowserDynamic()
    .bootstrapModule(CoolModule)
    .catch((err) => console.error(err));
};

export { mount };
