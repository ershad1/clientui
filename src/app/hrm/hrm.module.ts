import {NgModule} from '@angular/core';

import {HrmRoutingModule} from './hrm-routing.module';
import {SharedModule} from '../shared/shared/shared.module';
import {HrmComponent} from './hrm/hrm.component';

@NgModule({
  imports: [
    SharedModule,
    HrmRoutingModule
  ],
  declarations: [
    HrmComponent
  ]
})
export class HrmModule {
}
