import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {DirectiveComponent} from "./components/options/directive/directive.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'directive', component: DirectiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
