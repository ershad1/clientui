import {NgModule} from '@angular/core';

import {SetupRoutingModule} from './setup-routing.module';
import {SetupComponent} from './setup/setup.component';
import {SharedModule} from '../shared/shared/shared.module';

@NgModule({
  imports: [
    SetupRoutingModule,
    SharedModule
  ],
  declarations: [SetupComponent]
})
export class SetupModule {
}
