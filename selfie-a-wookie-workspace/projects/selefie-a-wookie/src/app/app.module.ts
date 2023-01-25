import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelfiesModule } from './features/selfies/selfies.module';
import { FirstUpperPipe } from './shared/ui/components/pipes/first-upper/first-upper.pipe';
import { FirstUpperModule } from './shared/ui/components/pipes/first-upper/first-upper.module';
import { LoggerService } from './shared/services/logger.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelfiesModule
  ],
  providers: [
    // LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
