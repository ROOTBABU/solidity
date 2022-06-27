import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  public contentLink:string='/assets/markdown/variables-basic.md'; 
  config:any = [
    {
      title:"Variables",
      childs:[
        {
          title:"Overview",
          href:"variables-basic.md"
        },
        {title:"State Variables"},
        {title:"Local Variables"},
        {title:"Global Variables"},
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onTabClick(ele:any){
    this.contentLink = "/assets/markdown/"+ele;
  }

}
