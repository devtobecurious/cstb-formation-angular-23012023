import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelfiesModule } from './features/selfies/selfies.module';
import { FirstUpperPipe } from './shared/ui/components/pipes/first-upper/first-upper.pipe';
import { FirstUpperModule } from './shared/ui/components/pipes/first-upper/first-upper.module';
import { LoggerService } from './shared/services/logger.service';
import { ObservablesComponent } from './shared/learning/observables/observables.component';
import { TimerComponent } from './shared/learning/timer/timer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './shared/ui/components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SelfiesModule,
    TimerComponent,
    ObservablesComponent // c'est un component/module
  ],
  providers: [
    // LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
