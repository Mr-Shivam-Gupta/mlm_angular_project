import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopupsComponent } from './topups/topups.component';
import { CommissionsComponent } from './commissions/commissions.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "investments",
    pathMatch: "full",
  },
  {
    path: "investments",
    component: TopupsComponent,
  },
  {
    path: "commissions",
    component: CommissionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
