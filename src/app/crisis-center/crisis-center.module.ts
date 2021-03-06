import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { CrisisListComponent }    from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';
import { Crisis } from './crisis.service';
import { CrisisCenterHomeComponent} from './crisis-center-home.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisCenterComponent } from './crisis-center.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterHomeComponent,
    CrisisCenterComponent
  ],
  providers: [ ]
})
export class CrisisCenterModule {}
