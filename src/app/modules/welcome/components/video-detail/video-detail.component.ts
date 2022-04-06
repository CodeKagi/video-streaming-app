import { Component, forwardRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from 'src/app/models/video';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {

   movieDetail;
   pageTitle: string ="Details";
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getVideoDetails();
  }

  getVideoDetails(): void {
    this.movieDetail = JSON.stringify(history.state);
  }
}
