import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  activeRequests: number = 0;
  constructor(public loaderService : LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.activeRequests === 0) {
      this.loaderService.startLoading();
    }

    this.activeRequests++;
    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.loaderService.stopLoading();
        }
      })
    )
  };
}
