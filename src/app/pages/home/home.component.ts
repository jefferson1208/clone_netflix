import { Component, OnInit } from "@angular/core";
import { theMovieDbService } from "src/app/services/theMovieDbService";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    movieList: any;
    movieTransition: any;
    showLoading: boolean = false;

    constructor(private dmbService: theMovieDbService) {


    }
    ngOnInit(): void {
        this.showLoading = true;
        const loadAll = async () => {
            let list = await this.dmbService.getHomeList();

            this.movieList = list;

            let originals = list.filter(l => l.slug === 'originals');
            let random = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[random];

            let chosenInfo = await this.dmbService.getMovieInfo(chosen.id, 'tv');

            this.movieTransition = chosenInfo;
            this.showLoading = false;
        }

        loadAll();
    }
}