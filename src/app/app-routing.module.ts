import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ThisComponent} from "./this/this.component";
import {ThatComponent} from "./that/that.component";

const routes: Routes = [
  { path: "this", component: ThisComponent },
  { path: "that", component: ThatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
