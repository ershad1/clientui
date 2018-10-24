import {NgModule} from '@angular/core';

import {HrmRoutingModule} from './hrm-routing.module';
import {SharedModule} from '../shared/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HrmRoutingModule
  ],
  declarations: []
})
export class HrmModule {
}
