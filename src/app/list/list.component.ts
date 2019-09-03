import { Component, OnInit } from '@angular/core';
import { Movie, MovieService } from '../movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
movies: Movie[] = [];
displayMoviesList: boolean = true;
newMovieText: string = '';
movieIdsBeingEdited = {};
moviesBeingDisplayed: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();

    // DISPLAYING THE LIST BUTTON TEXT AS HIDE LIST WHEN THE PAGE INITIALLY LOADS
    document.getElementById("listBtn").innerText = `Hide List`
  }

  

  onToggleDisplay() {
    this.displayMoviesList = !this.displayMoviesList;
    
    // IF STATEMENT TO CHANGE LIST BUTTON TEXT 
    if(this.displayMoviesList) {
      document.getElementById("listBtn").innerText = `Hide List`

    } else if (!this.displayMoviesList) {
      document.getElementById("listBtn").innerText = `Show List`

    }
  } 

  onDeleteMovie(i: number) {
    this.movieService.deleteMovie(i);
    this.getMovies();
  }

  onStartEditMovie(i: number) {
    this.movieIdsBeingEdited[i] = true;
  }

  onSaveEditMovie(i: number) {
    this.movieIdsBeingEdited[i] = false;
  }

  getMovies() {
    setTimeout(() => {
      this.movies = this.movieService.getMovies();
    }, 0);
  }

  onViewMovieDetails(movie: Movie) {
    this.moviesBeingDisplayed = movie
  }

  onAddNewMovie(newMovie: string) {
    this.movieService.addMovie(newMovie, '', '');
    this.newMovieText = '';
    this.getMovies();
  }

}
