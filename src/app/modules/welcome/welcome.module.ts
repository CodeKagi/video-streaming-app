import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { MoviesComponent } from './components/movies/movies.component';
import { SeriesComponent } from './components/series/series.component';
import { ListVideosComponent } from './components/list-videos/list-videos.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';


@NgModule({
  declarations: [MoviesComponent, SeriesComponent, ListVideosComponent, WelcomeComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
