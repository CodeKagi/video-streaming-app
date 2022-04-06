export class Video {
  id?: number;
  title: string;
  description: string;
  programType: string;
  images: VideoImage;
  releaseYear: number;
}

class VideoImage {
  'Poster Art': {
    url: string;
    width: number;
    height: number;
  };
}
