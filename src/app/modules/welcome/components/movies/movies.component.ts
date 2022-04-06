import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Video } from 'src/app/models/video';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  pageTitle: string = 'popular movies';
  videoDataSubscription: Subscription;
  videoList: Video[];
  hasHttpError: boolean = false;

  movies = [
    {
      route: 'movie',
    },
    {
      route: 'series',
    },
    {
      route: 'movie',
    },
    {
      route: 'series',
    },
  ];
  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
  }
}
