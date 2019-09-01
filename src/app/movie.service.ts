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
    new Movie('https://lh3.googleusercontent.com/LRcvLsePBQ0jxWDJTbcndcbLJjUmLXVVVUy0cScuCo63iBpkwX5FttdVwXbKAlLU5AJk=w400-h600-rw', 'Nothing To Lose', 'tesing toeioigoirugoiu'),
    
  ]
  constructor() { }

  addMovie(imageUrl: string, title: string, description: string) {
    const newMovie = new Movie(imageUrl, title, description)
    this.movies.push(newMovie)

    // this.movies.push(new Movie(tmovie, '','',))

    // console.log("New Movie: " + newMovie.title)
  }

  getMovies(): Movie[] {
    console.log(this.movies)
    return this.movies;
  }


  deleteMovie(movie: number) {
    this.movies.splice(movie, 1)
  }

  editMovie(movie) {
    this.editMovie(movie)
    console.log(movie)
  }

}


