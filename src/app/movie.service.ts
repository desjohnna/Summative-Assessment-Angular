import { Injectable } from '@angular/core';

export class Movie {
  imageUrl: string;
  title: string;
  description: string;

  constructor(imageUrl: string, title: string, description: string) {
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
  }
}


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = [
    new Movie('', 'testing', 'test')
  ]
  constructor() { }

  addItem(item: string, imageUrl: string, title: string, description: string) {
    this.movies.push(new Movie(imageUrl, title, description))
  }

  getMovies(): Movie[] {
    return this.movies
  }

  deleteMovie(movie: number) {
    this.movies.splice(movie, 1)
  }

}


