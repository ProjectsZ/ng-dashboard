import { RouterModule, Routes } from '@angular/router';

/* pages */
import { PaginasComponent } from './paginas.component';
import { DashboardComponent } from
'./dashboard/dashboard.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { ProgressComponent } from './progress/progress.component';

const PAGESRoutes: Routes = [
    { path: '', component: PaginasComponent,
        children: [
           { path: 'dashboard', component: DashboardComponent },
           { path: 'graphics', component: GraphicsComponent },
           { path: 'progress', component: ProgressComponent },
           { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
   }
];

export const PAGES_ROUTES = RouterModule.forChild(PAGESRoutes);
