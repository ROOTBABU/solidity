import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})

// class BreadCrumbs{
//   constructor(
//     public title:string,
//     public link:string
//   ){};
// }

export class BasicComponent implements OnInit {
  public contentLink:string='/assets/markdown/basics.md'; 
  public breadCrumbs:any = [
    {title:"", link:"#", icon:"home"},
    {title:"Basics", link:"#",},
    {title:"Variables", link:"#"},
    {title:"Overview", link:"#"},
  ]
  public config:any;
  public title:string="";
  public icon:string="";
  constructor(private route: ActivatedRoute,private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.route.data.subscribe((ele:any) => {
      this.config = ele?.topicsList;
      this.title = ele?.title;
      this.icon = "fas fa-chess-"+ele?.icon;

    });
  }

  onTabClick(ele:any){
    if(ele){
      this.contentLink = "/assets/markdown/"+ele.file
      setTimeout(()=>{
         this.viewportScroller.scrollToAnchor(ele.id);
      },5)
    }
  }

}
