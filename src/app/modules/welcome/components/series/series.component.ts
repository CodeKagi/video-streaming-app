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
    this.getAllVideos();
    this.getActiveRoute();
  }

  getActiveRoute(): void {
    this.activatedRoute.data.subscribe(route => {
     this.pageTitle = route['title'];
      console.log("activate route is", this.pageTitle);
    })
  }

  getAllVideos(): void {
    try {
      this.videoDataSubscription = this.videoService
        .getAllVideoList()
        .subscribe((response: VideoData) => {
          if (response?.entries) {
            this.videoList = response.entries;
            this.filterSeries();
          }
        });
    } catch (error) {
      error.message = `SeriesComponent::getAllVideos() - ${error.message}`;
      throw error;
    }
  }

  filterSeries(): void {
    const series = this.videoList
      ?.filter((videos: Video) => {
        return videos.programType === 'series' && videos.releaseYear >= 2010;
      })
      .filter((video: Video, index: number) => {
        return index < 21;
      })
      .sort((a, b) => (a.title > b.title ? 1 : -1));
      this.seriesList = series;
      console.log("filtered series are", this.seriesList);
  }

  getVideoThumbnail(seriesData: Video) {
		return seriesData.images['Poster Art'].url;
	}
}
