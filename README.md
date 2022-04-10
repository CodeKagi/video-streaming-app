# VideoStreamingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.

## Installation & Development
1. `cd video-streaming-app`  
2. `npm i`  
3. Run `npm start` for a dev server. 
4. Navigate to `http://localhost:4200/`. 
5. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Technical and architectural choices used 

I have created the below flat folder structure for my project, this makes possible to locate the files faster. and also helps in debugging to get files at the right places.

- Components created:
   - Error
   - Footer
   - Header
   - Loader
   - Login
   - ProgramTypeVideo
   - Video Thumbnail
- Feed
   - Sample.json
- Interceptors
   - LoaderInterceptor
- Models
   - VideoData
   - Video
- Modules
  -components
    - ListVideos (Home)
    - Movies (Movie listing page)
    - Series (Series listing page)  
    - VideoDetail (Video details page)
    - Welcome (video route landing page) 
- Service
   - VideoService
   - LoaderService
- Shared Styles 
  - (all the css that componets share leaves here)

  ## Improvements I could have made

- I could have implemented caching service that can store my data and cache it. reduces api calls
- I could have included http, and error handling interceptors
- I could have implemented better unit as well as e2e testing

## Things I would have approached differently

- Improved the logic for fetching movies and series, as the code repeat itself in both components
- Improved the build process and deployment pipeline 
- render dist files using express
- added more unit test for my app
- styled the details page better
   
