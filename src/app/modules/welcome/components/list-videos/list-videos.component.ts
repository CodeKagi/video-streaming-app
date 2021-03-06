import { Component, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
  filteredProgramTypes: Video[] | Error;
  videos: Video[] | Error;
  error: boolean = false;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.filterProgramTypes().subscribe( response => {
      this.filteredProgramTypes = response;
    }),catchError(error => of(this.handleError(error)))
  }

  /**
	 *
	 * @returns {error}
	 * @memberof VideoService
	 */
  handleError(error: any): void {
    this.error = true;
    throw new Error(error);
  }
}
