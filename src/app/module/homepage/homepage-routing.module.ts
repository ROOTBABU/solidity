import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from 'src/app/components/basic/basic.component';
import { HomepageComponent } from 'src/app/components/homepage/homepage.component';
import basicsConfig from '../../../assets/config/basics.json';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'basic',component:BasicComponent,data: basicsConfig},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
