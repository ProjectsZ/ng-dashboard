import { RouterModule, Routes } from '@angular/router';

/* Components */
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';

/* pages */
import { PaginasComponent } from './pages/paginas.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { ProgressComponent } from './pages/progress/progress.component';


const NAV_ROUTES: Routes = [
  { path: '', component: PaginasComponent,
      children: [
         { path: 'dashboard', component: DashboardComponent },
         { path: 'graphics', component: GraphicsComponent },
         { path: 'progress', component: ProgressComponent },
         { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
      ]
 },
  { path: 'login', component: LoginComponent }
     // { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
  // { path: '**', redirectTo: NopagefoundComponent }

];

export const app_routing = RouterModule.forRoot( NAV_ROUTES, { useHash:true } );
/* Note:
  * add tag <router-outlet></router-outlet> in file component (~.component.html)
  * Need import and imports `app_routing`  in file module (~.module.ts) or ignore this message. */
