import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormControl, FormGroup } from '@angular/forms'
import { MovieService, Movie } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movies: Movie[] = []

  newMovieText = '';
  addMovieForm = new FormGroup({
    imageUrl: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl('')
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

 

  onAddNewMovie(newMovie: string) {
    // const imageUrl = this.addMovieForm.value.imageUrl
    // const title = this.addMovieForm.value.title
    // const description = this.addMovieForm.value.description

    this.movieService.addMovie(newMovie, '', '');
    console.log(this.movies)
    this.newMovieText = '';
    // this.onResetForm();
  }

  onDeleteMovie(movie: number) {
    this.movieService.deleteMovie(movie)
    this.getMovies()
  }

  onResetForm() {
    this.addMovieForm.reset();
  }
  
  onSubmit(){
    const imageUrl = this.addMovieForm.value.imageUrl;
    const title = this.addMovieForm.value.title;
    const description = this.addMovieForm.value.description;
   

    this.movieService.addMovie(imageUrl, title, description);
    this.onResetForm();
  }
}


 