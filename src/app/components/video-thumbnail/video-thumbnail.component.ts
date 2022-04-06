import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss']
})
export class VideoThumbnailComponent implements OnInit {
  @Input() videoUrl: string;
  @Input() videoRoute: string;
  @Input() videoTitle: string;
  constructor() { }

  ngOnInit(): void {
  }

}
