import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Video } from 'src/app/models/video';
import { VideoData } from 'src/app/models/video-data';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  pageTitle: string;
  videoDataSubscription: Subscription;
  videoList: Video[];
  hasHttpError: boolean = false;
  seriesList: Video[];
  constructor(private videoService: VideoService, private activatedRoute: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
  }

  getAllVideos(): void {
    try {
      this.videoDataSubscription = this.videoService
        .getAllVideoList()
        .subscribe((response: VideoData) => {
          if (response?.entries) {
            this.videoList = response.entries;
            this.filterMovies();
          }
        });
    } catch (error) {
      error.message = `MoviesComponent::getAllVideos() - ${error.message}`;
      throw error;
    }
  }

  filterMovies(): void {
    const series = this.videoList
      ?.filter((series: Video) => {
        return series.programType === 'movie' && series.releaseYear >= 2010;
      })
      .filter((series: Video, index: number) => {
        return index < 21;
      })
      .sort((a, b) => (a.title > b.title ? 1 : -1));
      this.seriesList = series;
      console.log("filtered movies are", this.seriesList);
  }

  getVideoThumbnail(series: Video) {
		return series.images['Poster Art'].url;
	}

}
