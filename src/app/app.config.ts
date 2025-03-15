import {
  HashLocationStrategy,
  LocationStrategy,
  registerLocaleData,
} from '@angular/common';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
  withViewTransitions,
} from '@angular/router';
import { Actions } from '@ngneat/effects-ng';
import { devTools } from '@ngneat/elf-devtools';
import { CommonService } from 'leaf-dashboard';
import { CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { CustomCurrencyMaskConfig } from './app.component';
import { routes } from './app.routes';

registerLocaleData(localePt, 'pt');

export function initElfDevTools(actions: Actions) {
  return () => {
    devTools({
      name: 'Vitrine de talentos',
      actionsDispatcher: actions,
    });
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    CommonService,
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: initElfDevTools,
      deps: [Actions],
    },
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    importProvidersFrom([BrowserAnimationsModule]),
    provideHttpClient(
      withInterceptorsFromDi()
      //withInterceptors([authInterceptor])
    ),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      // withDebugTracing(),
      withViewTransitions()
    ),
  ],
};
