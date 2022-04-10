import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loadingText: string = "Loading...";
  isLoading: boolean = true;
  loadingSubscription: Subscription;
  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.loadingSubscription = this.loaderService.loadingStatus.subscribe((value) => {
			this.isLoading = value;
		});
  }

  ngOnDestroy() {
		this.loadingSubscription.unsubscribe();
	}

}
