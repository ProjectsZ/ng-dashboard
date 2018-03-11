import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Rutes */
import { app_routing } from './app.routes';

/* Modules */
import { PaginasModule } from './pages/paginas.module';

/* Components */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    PaginasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
