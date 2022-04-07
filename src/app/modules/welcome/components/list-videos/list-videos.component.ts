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
  //  this.getAllVideos();
    this.videoService.filterProgramTypes().subscribe( response => {
      this.filteredProgramTypes = response;
      console.log("response filtered is",  this.filteredProgramTypes);
    })
  }


  // getAllVideos(): void {
  //   try {
  //     this.videoDataSubscription = this.videoService
  //       .getAllVideoList()
  //       .subscribe((response: VideoData) => {
  //         if (response?.entries) {
  //           const programTypes = response.entries.filter((videoData, index, myArray) => {
  //             return myArray.map(videos => videos['programType']).indexOf(videoData['programType']) === index
  //           })
  //           this.filteredProgramTypes = programTypes;
  //           console.log("program types are", this.filteredProgramTypes);
  //         }
  //       });
  //   } catch (error) {
  //     error.message = `MoviesComponent::getAllVideos() - ${error.message}`;
  //     throw error;
  //   }
  // }


}
