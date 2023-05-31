import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, TitleStrategy} from '@angular/router';
import {routes} from './app/app-routing';
import {AppComponent} from './app/app.component';
import {CustomTitleStrategyService} from './app/custom-title-strategy/custom-title-strategy.service';
import {VersionService} from './app/version/version.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    VersionService,
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategyService
    }
  ]
}).catch(err => console.error(err));
