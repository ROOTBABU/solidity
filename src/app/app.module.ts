import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DocLayoutComponent } from './components/doc/doclayout.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PrerequisitesComponent } from './components/prerequisites/prerequisites.component';
import { RoadmapsComponent } from './components/roadmaps/roadmaps.component';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';

import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MessagesModule } from 'primeng/messages';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { TabViewModule } from 'primeng/tabview';
import { GalleriaModule } from 'primeng/galleria';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faDiscord,
  faGithub,
  faMedium,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { AnchorService } from './service/anchor.service';

export function markedOptionsFactory(anchorService: AnchorService): MarkedOptions {
  const renderer = new MarkedRenderer();

  // fix `href` for absolute link with fragments so that _copy-paste_ urls are correct
  renderer.link = (href, title, text) => {
    return MarkedRenderer.prototype.link.call(renderer, anchorService.normalizeExternalUrl(href!), title, text);
  };

  return { renderer };
}

@NgModule({
  declarations: [
    AppComponent,
    DocLayoutComponent,
    HomepageComponent,
    PrerequisitesComponent,
    BlogsComponent,
    BreadcrumbComponent,
    HeaderComponent,
    FooterComponent,
    RoadmapsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    MarkdownModule.forRoot({
      loader: HttpClient, sanitize: SecurityContext.NONE, markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
        deps: [AnchorService],
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatTreeModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MessagesModule,
    NgxUiLoaderModule,
    TabViewModule,
    GalleriaModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faDiscord,
      faGithub,
      faMedium,
      faTwitter,
      faCircleInfo
    );
  }
}
