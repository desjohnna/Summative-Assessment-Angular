import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { MovieService, Movie } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movies: Movie[] = []


  addMovieForm = this.fb.group({
    image: [''],
    title: [''],
    description: ['']
  })


  constructor(private movieService: MovieService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    setTimeout(() => {
      this.movies = this.movieService.getMovies()
    }, 0)
  }

  onDeleteMovie(movie: number) {
    this.movieService.deleteMovie(movie)
    this.getMovies()
  }
}


