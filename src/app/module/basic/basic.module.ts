import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from 'src/app/components/basic/basic.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BasicRoutingModule
  ],
  bootstrap: [BasicComponent]
})
export class BasicModule { }
