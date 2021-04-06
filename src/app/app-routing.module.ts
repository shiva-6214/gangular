import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Link2Component } from './link2/link2.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'link2', component: Link2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
