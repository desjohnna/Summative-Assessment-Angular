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
    new Movie('https://lh3.googleusercontent.com/LRcvLsePBQ0jxWDJTbcndcbLJjUmLXVVVUy0cScuCo63iBpkwX5FttdVwXbKAlLU5AJk=w400-h600-rw', 'Nothing To Lose', 'Advertising executive Nick Beame (Tim Robbins) learns that his wife (Kelly Preston) is sleeping with his employer (Michael McKean). In a state of despair, he encounters a bumbling thief (Martin Lawrence) whose attempted carjacking goes awry when Nick takes him on an involuntary joyride. Soon the betrayed businessman and the incompetent crook strike up a partnership and develop a robbery-revenge scheme. But it turns out that some other criminals in the area do not appreciate the competition.'),
    new Movie('https://images-na.ssl-images-amazon.com/images/I/81mN0Pw53NL._RI_.jpg','The Five Heartbeats', 'Coming in on the tail end of a rhythm and blues singing group explosion, The Five Heartbeats (Robert Townsend, Michael Wright, Leon, Harry J. Lennix, Tico Wells) rise and fall within the space of seven years. Along the way, the group deals with all manner of fame and fortune distractions -- jealousy, greed, too much womanizing and drugs all take a toll. Their troubles culminate when executive Big Red (Hawthorne James) is arrested for the murder of manager Jimmy Potter (Chuck Patterson).'), 
    new Movie('https://images-na.ssl-images-amazon.com/images/I/81XsluwdVgL._RI_SX300_.jpg', 'Wedding Crashers', 'Jeremy (Vince Vaughn) and John (Owen Wilson) are divorce mediators who spend their free time crashing wedding receptions. For the irrepressible duo, there are few better ways to drink for free and bed vulnerable women. So when Secretary of the Treasury William Cleary (Christopher Walken) announces the wedding of his daughter, the pair make it their mission to crash the high-profile event. But their game hits a bump in the road when John locks eyes with bridesmaid Claire (Rachel McAdams).'), 
    new Movie('http://barkerhost.com/wp-content/uploads/sites/4/2019/03/gynBNzwyaHKtXqlEKKLioNkjKgN-1.jpg', 'The Matrix', 'Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his life.'), 
    new Movie('','','')
    
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


