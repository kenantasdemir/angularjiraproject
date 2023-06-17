import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './boards/boards.component';
import { ViewboarddetailComponent } from './viewboarddetail/viewboarddetail.component';

const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"boards"},
  {path:"boards",component:BoardsComponent},
  {path:"view-board/:boardIndex",component:ViewboarddetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
