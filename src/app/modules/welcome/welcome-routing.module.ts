import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListVideosComponent } from './components/list-videos/list-videos.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SeriesComponent } from './components/series/series.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path: 'demo-streaming',
        component: ListVideosComponent,
        data: {title: 'Popular Titles'}
      },
      {
        path: 'movie', component : MoviesComponent,
        data: {title: 'Popular movies'}
      },
      {
        path: 'series', component : SeriesComponent,
        data: {title: 'Popular series'}
      },
      {
        path: 'details', component: VideoDetailComponent
      },
      {
        path: '', redirectTo: 'demo-streaming', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
