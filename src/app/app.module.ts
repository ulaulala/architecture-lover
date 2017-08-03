import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MaterialsPageComponent } from './pages/materials-page/materials-page.component';
import { ArchitectsPageComponent } from './pages/architects-page/architects-page.component';
import { HeaderComponent } from './pages/header/header.component';
import { StylesPageComponent } from './pages/styles-page/styles-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MaterialsPageComponent,
    ArchitectsPageComponent,
    HeaderComponent,
    StylesPageComponent,
    GalleryPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent },
      { path: 'architects', component: ArchitectsPageComponent },
      { path: 'materials', component: MaterialsPageComponent },
      { path: 'styles', component: StylesPageComponent },
      { path: 'gallery', component: GalleryPageComponent },
      { path: 'contact', component: ContactPageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
