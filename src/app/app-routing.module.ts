import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=>import('./module/homepage/homepage.module').then(m=>m.HomepageModule)
  },
  {
    path:'prerequisites',
    loadChildren: ()=>import('./module/prerequisites/prerequisites.module').then(m=>m.PrerequisitesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
