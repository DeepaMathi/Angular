import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
const routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add',
    component: EditComponent
  },
  {
    path: 'edit/:bookName',
    component: EditComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      routes,
    {
      preloadingStrategy: PreloadAllModules
    })
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
