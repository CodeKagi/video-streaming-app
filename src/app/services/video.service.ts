import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Video } from '../models/video';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideoData } from '../models/video-data';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  apiUrl = environment.baseApiUrl;
  videosList: Video[];

  constructor(private httpClient: HttpClient) { }

  getAllVideoList(): Observable<VideoData> {
    const options = {
      headers: {
        'content-type': 'application/json'
      }
    }
    return this.httpClient.get<VideoData>(this.apiUrl, options);
  }

  filterProgramTypes(): Observable<Video[]> {
     return this.httpClient.get<VideoData>(this.apiUrl).pipe(map((response) => {
       return response.entries.filter((videoData, index, myArray) => {
         return myArray.map(videos => videos['programType']).indexOf(videoData['programType']) === index
       })
     }))
  }
}
