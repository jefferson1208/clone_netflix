import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { theMovieDbService } from 'src/app/services/theMovieDbService';
import { HomeComponent } from './pages/home/home.component';
import { ListRowComponent } from './components/list-row/list.row.component';
import { MovieTransitionHomeComponent } from './components/movie-transition-home/movie.transition.home.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListRowComponent,
    MovieTransitionHomeComponent,
    HeaderComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [theMovieDbService],
  bootstrap: [AppComponent],
  exports: [LoadingComponent]
})
export class AppModule { }
