import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Video } from 'src/app/models/video';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.scss']
})
export class ListVideosComponent implements OnInit {
  pageTitle: string = 'popular titles';
  videoDataSubscription: Subscription;
  videoList: Video[];
  hasHttpError: boolean = false;

  videoType = [
    {
      route: 'movies'
    },
    {
      route : 'series'
    }
   ]
  constructor() { }

  ngOnInit(): void {
  }

}
