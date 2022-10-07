import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PreloaderComponent } from './shared/preloader/preloader.component';


const routes = {path: 'admin', loadChildren: './admin.module#AdminModule'}
@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
