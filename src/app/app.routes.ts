import { RouterModule, Routes } from '@angular/router';

/* Components */
import { NopagefoundComponent } from
'./shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


const NAV_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent }
];

export const app_routing = RouterModule.forRoot( NAV_ROUTES, { useHash:true } );
/* Note:
  * add tag <router-outlet></router-outlet> in file component
   (~.component.html)
  * Need import and imports `app_routing`  in file module (~.module.ts)
  or ignore this message. */
 
