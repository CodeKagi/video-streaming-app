import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  pageTitle: string = 'popular series';
  constructor() { }

  ngOnInit(): void {
  }

}
