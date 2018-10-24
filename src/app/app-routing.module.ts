import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
const routes: Routes = [
  {path: '', redirectTo: '/setup', pathMatch: 'full'},
  {path: 'setup', loadChildren: './setup/setup.module#SetupModule'},
  {path: 'hrm', loadChildren: './hrm/hrm.module#HrmModule'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      onSameUrlNavigation: 'reload',
      // enableTracing: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
