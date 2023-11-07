import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Page404Component } from "../authentication/page404/page404.component";
import { Dashboard1Component } from "./dashboard1/dashboard1.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard1",
    pathMatch: "full",
  },
  {
    path: "dashboard1",
    component: Dashboard1Component,
  },
  {
    path: "dashboard2",
    component: Dashboard2Component,
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
