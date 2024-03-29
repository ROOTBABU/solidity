import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MarkdownService } from 'ngx-markdown';
import { faCube, faBars, faBox, faBugs, faChessPawn, faCircleArrowUp, faF, faHandsPraying, faInfo, faSignsPost, faXmark, faMap, faFileAlt, faCoins, faChessQueen } from '@fortawesome/free-solid-svg-icons';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { faDiscord, faGithub, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { Breadcrumb } from 'src/app/models/breadcrumb.model';
import { AnchorService } from 'src/app/service/anchor.service';

interface NavNode {
  title: string;
  childs?: NavNode[];
  href?: any;
}

@Component({
  selector: 'app-doc',
  templateUrl: './doclayout.component.html',
  styleUrls: ['./doclayout.component.css'],
  providers: [MatSidenav],
})

export class DocLayoutComponent implements OnInit, AfterViewInit {
  // Add a variable to store the initial touch position and determine swipe direction
  private touchStartX: number = 0;

  @HostListener('window:scroll', ['$event'])
  checkScroll(event: any) {
    const scrollPosition = event.currentTarget.scrollTop;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // Add touch event handlers to detect swipe gestures
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    // Get the touch end position
    const touchEndX = event.changedTouches[0].clientX;
    const swipeThreshold = 50;

    // Ensure event.target is not null and cast it to an Element
    const targetElement = event.target as Element;

    // Find the parent element that contains the .language-sol class
    const scrollAreaElement = targetElement.closest('.language-sol');

    // Check if the touch end event occurred within the scrollable area
    if (!scrollAreaElement) {
      // Calculate the distance of swipe movement
      const swipeDistance = touchEndX - this.touchStartX;

      // Determine if the swipe is left or right based on swipe distance
      if (swipeDistance > swipeThreshold) {
        // Swipe right, open the side navigation bar
        this.sidenav.open();
      } else if (swipeDistance < -swipeThreshold) {
        // Swipe left, close the side navigation bar
        this.sidenav.close();
      }
    }
  }

  isShow: boolean;
  topPosToStartShowing = 900;
  treeControl = new NestedTreeControl<NavNode>(node => node.childs);
  dataSource = new MatTreeNestedDataSource<NavNode>();
  hasChild = (_: number, node: NavNode) => !!node.childs && node.childs.length > 0;
  public contentLink: string = './assets/markdown/';
  public opened: boolean = false;
  public config: NavNode[] = [];
  public breadcrumb: any = [];
  public title: string = "";
  public version: string = "";
  public icon: string = "";
  public githubLink: string = "";
  public markdown = '';
  public previousLink: string = '';
  public mdFolder: string;
  public activeNode: any;
  public activeTreeNode: any;
  public defaultGithubLink = "https://github.com/ROOTBABU/solidity/blob/dev/src/assets/markdown/"
  public iconComponents: any = {
    "faBox": faBox,
    "faHandsPraying": faHandsPraying,
    "faSignsPost": faSignsPost,
    "faF": faF,
    "faChessPawn": faChessPawn,
    "faChessQueen": faChessQueen,
    "faBugs": faBugs,
    "faBars": faBars,
    "faGithub": faGithub,
    "faDiscord": faDiscord,
    "faInfo": faInfo,
    "faMedium": faMedium,
    "faTwitter": faTwitter,
    "faXmark": faXmark,
    "faCircleArrowUp": faCircleArrowUp,
    "faMap": faMap,
    "faFileAlt": faFileAlt,
    "faCoins": faCoins,
    "faCube": faCube
  }
  public eleId: string = '';
  public isBar: boolean = true;
  public navMode: MatDrawerMode = 'side'

  @ViewChild('sidenav') sidenav: MatSidenav;
  @ViewChild('xmark') xmark: ElementRef;

  constructor(private router: Router, private anchorService: AnchorService, private ngxLoader: NgxUiLoaderService, private route: ActivatedRoute, private viewportScroller: ViewportScroller, private http: HttpClient, private markdownService: MarkdownService) {
    // Subscribe to the NavigationEnd event
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current element ID is set and exists
        if (this.eleId) {
          const eleId = document.getElementById(this.eleId);
          if (eleId) {
            eleId.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => this.eleId = fragment!);
    this.route.data.subscribe((ele: any) => {
      this.breadcrumb = [];
      this.route.url.subscribe(url => {
        const mdUrl = url.filter(segment => segment.path.endsWith('.md'));
        if (mdUrl.length) {
          ele.file = mdUrl[0].path;
        }
      });
      this.config = ele?.topicsList;
      this.dataSource.data = this.config;
      this.title = ele?.title;
      this.version = ele?.version;
      this.icon = ele?.icon;
      this.mdFolder = ele.folder;
      this.breadcrumb.push(new Breadcrumb("", "/", "faHouseChimney"));
      this.breadcrumb.push(new Breadcrumb(this.title, ele.url));
      this.contentLink = "./assets/markdown/".concat(this.mdFolder, "/", ele.file)
      this.previousLink = this.contentLink;
      this.githubLink = this.defaultGithubLink.concat(this.mdFolder, "/", ele.file);
      const nodePath = this.findNodePath(this.config, ele.file);
      if (nodePath) {
        this.activeTreeNode = nodePath[0];
        for (const node of nodePath) {
          this.treeControl.expand(node);
          this.activeNode = node;
        }
      }
    });
    setTimeout(() => {
      const element = document.querySelector('.active-tree-node');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  private findNodePath(nodes: NavNode[], fileName: string): NavNode[] | undefined {
    for (const node of nodes) {
      if (node?.href?.file === fileName && node?.href?.id === this.eleId) {
        return [node];
      } else if (node.childs) {
        const childNode = this.findNodePath(node.childs, fileName);
        if (childNode) {
          return [node, ...childNode];;
        }
      }
    }
    return undefined;
  }

  ngAfterViewInit(): void {
    if (this.eleId) {
      document?.querySelector('#' + this.eleId)?.scrollIntoView({ behavior: 'smooth' });
    }
    if (window.screen.width <= 700) {
      this.opened = false;
      this.navMode = 'over'
    } else {
      this.opened = true;
    }
  }

  onTabClick(node: any) {
    if (node) {
      this.activeNode = node;
      if (window.screen.width <= 700) {
        this.opened = false;
        this.isBar = true;
      }
      this.contentLink = "./assets/markdown/".concat(this.mdFolder, "/", node.href.file);
      this.githubLink = this.defaultGithubLink.concat(this.mdFolder, "/", node.href.file);
      this.eleId = node.href.id;
      if (this.previousLink != this.contentLink) {
        this.ngxLoader.start();
      } else {
        let eleId = document.getElementById(this.eleId);
        if (eleId) {
          eleId.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    this.router.navigate([this.mdFolder, node.href.file], { fragment: node.href.id });
  }

  public toggleBar() {
    this.sidenav.toggle();
  }

  public closeSideNav() {
    this.isBar = true;
    this.sidenav.toggle();
  }

  onLoad() {
    let ele = document.getElementById(this.eleId);
    const element = document.querySelectorAll(".image");
    this.previousLink = this.contentLink;
    let ngxLoader: NgxUiLoaderService = this.ngxLoader;
    let scrollPage = this.scrollPage;
    if (ele) {
      if (element.length) {
        element.forEach((item, index) => {
          item.addEventListener("load", function () {
            scrollPage(ele, ngxLoader);
          });
        })
      } else {
        scrollPage(ele, ngxLoader);
      }
    }
  }

  scrollPage(ele: any, ngxLoader: NgxUiLoaderService) {
    ele.scrollIntoView({ behavior: 'smooth' });
    ngxLoader.stop();
  }

  onError() {
    console.log("Markdown reedering Error!")
  }

  onSearch(ele: any) {
    // this.http.get('assets/markdown/helloworld.md', { responseType: 'text' })
    //   .subscribe((data) => {
    //     let d = this.markdownService.parse(data);
    //     console.log(d);
    //   }, (err) => {
    //     console.log(err)
    //   });
  }

  gotoTop() {
    let ele = document.getElementById("top");
    if (ele) {
      ele.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
