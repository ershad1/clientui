import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SetupComponent} from './setup/setup.component';

const routes: Routes = [
  // {path: '', redirectTo: '/setup', pathMatch: 'full'},
  {path: '', component: SetupComponent},
  // {path: 'setup', loadChildren: '../setup/setup.module#SetupModule'},
  // {path: 'country', loadChildren: './setup/country/country.module#CountryModule'},
  // {path: 'privilege', loadChildren: './setup/privilege/privilege.module#PrivilegeModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule {
}
