import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-type-video',
  templateUrl: './program-type-video.component.html',
  styleUrls: ['./program-type-video.component.scss']
})
export class ProgramTypeVideoComponent implements OnInit {
  @Input() videoUrl: string;
  @Input() videoRoute: string;
  @Input() videoTitle: string;
  constructor() { }

  ngOnInit(): void {
  }

}
