import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Video } from 'src/app/models/video';
import { VideoData } from 'src/app/models/video-data';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit {
  pageTitle: string;
  videoDataSubscription: Subscription;
  videoList: Video[];
  hasHttpError: boolean = false;
  seriesList: Video[];

  constructor(
    private videoService: VideoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllVideos();
    this.getActiveRoute();
  }
  /**
   *
   * @returns {route}
   * @memberof VideoService
   */
  getActiveRoute(): void {
    this.activatedRoute.data.subscribe((route) => {
      this.pageTitle = route['title'];
    });
  }
  /**
   *
   * @returns {Videos[]}
   * @memberof VideoService
   */
  getAllVideos(): void {
    (this.videoDataSubscription = this.videoService
      .getAllVideoList()
      .subscribe((response: VideoData) => {
        if (response?.entries) {
          this.videoList = response.entries;
          this.filterSeries();
        }
      })),
      catchError((error) => of(this.handleError(error)));
  }

  /**
   *
   * @returns {series videos}
   * @memberof VideoService
   */
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
  }

  handleError(error: any): void {
    this.hasHttpError = true;
    throw new Error(error);
  }

  /**
   * @param {video}
   * @returns {route}
   * @memberof VideoService
   */
  getVideoThumbnail(seriesData: Video) {
    return seriesData.images['Poster Art'].url;
  }

  /**
   * @param {video}
   * @returns {route}
   * @memberof VideoService
   */
  detailPageRoute(dataInfo): void {
    this.router.navigateByUrl('home/details', { state: dataInfo });
  }
}
