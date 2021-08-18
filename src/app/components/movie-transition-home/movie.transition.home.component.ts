import { Component, Input } from "@angular/core";

@Component({
    selector: 'movie-transition-home',
    templateUrl: './movie.transition.home.component.html',
    styleUrls: ['./movie.transition.home.component.css']
})

export class MovieTransitionHomeComponent {

    @Input() movieTransition: any;

    firstDate = function () { return new Date(this.movieTransition.first_air_date); };

    getGenres = () => {
        let genres = [];

        this.movieTransition.genres.forEach(genre => {
            genres.push(genre.name);
        });

        return genres;
    }

}