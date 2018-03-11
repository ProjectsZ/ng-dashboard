import { NgModule } from '@angular/core';

/* Modules */
import { SharedModule } from '../shared/shared.module';

/* Routes */
import { PAGES_ROUTES } from './paginas.routes';


/* Components */
import { PaginasComponent } from './paginas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicsComponent } from './graphics/graphics.component';


@NgModule({
  declarations: [
      PaginasComponent,
      DashboardComponent,
      ProgressComponent,
      GraphicsComponent
  ],
  exports: [
      PaginasComponent,
      DashboardComponent,
      ProgressComponent,
      GraphicsComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})

export class PaginasModule{  }
 
