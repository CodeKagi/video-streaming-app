import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Video } from 'src/app/models/video';
import { VideoData } from 'src/app/models/video-data';
import { VideoService } from 'src/app/services/video.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  pageTitle: string;
  videoDataSubscription: Subscription;
  videoList: Video[];
  hasHttpError: boolean = false;
  movieList: Video[];

  constructor(private videoService: VideoService, private activatedRoute: ActivatedRoute, private router : Router) {}

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
            this.filterMovies();
          }
        });
    } catch (error) {
      error.message = `MoviesComponent::getAllVideos() - ${error.message}`;
      throw error;
    }
  }

  filterMovies(): void {
    const movies = this.videoList
      ?.filter((videos: Video) => {
        return videos.programType === 'movie' && videos.releaseYear >= 2010;
      })
      .filter((movies: Video, index: number) => {
        return index < 21;
      })
      .sort((a, b) => (a.title > b.title ? 1 : -1));
      this.movieList = movies;

  }

  getVideoThumbnail(moviesData: Video) {
		return moviesData.images['Poster Art'].url;
	}

  detailPageRoute(dataInfo): void {
    this.router.navigateByUrl("home/details", { state: dataInfo});
  }
}
