import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DownlineListComponent } from "./downline-list/downline-list.component";
import { DirectsListComponent } from "./directs-list/directs-list.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "downlinelist",
    pathMatch: "full",
  },
  {
    path: "downlinelist",
    component: DownlineListComponent,
  },
  {
    path: "directlist",
    component: DirectsListComponent,
  },
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
