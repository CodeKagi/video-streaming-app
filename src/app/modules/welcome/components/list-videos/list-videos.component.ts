import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Video } from 'src/app/models/video';
import { VideoData } from 'src/app/models/video-data';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.scss']
})
export class ListVideosComponent implements OnInit {
  pageTitle: string = 'popular titles';
  videoDataSubscription: Subscription;
  hasHttpError: boolean = false;
  filteredProgramTypes: Video[];
  videos: Video[] | Error;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.filterProgramTypes().subscribe( response => {
      this.filteredProgramTypes = response;
    })
  }
}
