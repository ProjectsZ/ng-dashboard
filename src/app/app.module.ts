import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Rutes */
import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { PaginasComponent } from './pages/paginas.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NopagefoundComponent,
    LoginComponent,
    ProgressComponent,
    PaginasComponent,
    GraphicsComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
