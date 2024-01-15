import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { applyPolyfills, defineCustomElements } from 'stencil-jest/loader';

applyPolyfills().then(() => {
  defineCustomElements(window);

  bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
});

