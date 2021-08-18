import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class theMovieDbService {

    API_BASE = 'https://api.themoviedb.org/3';
    API_KEY = 'SUA_API_KEY_AQUI';

    basicFetch = async (endpoint) => {
        const req = await fetch(`${this.API_BASE}${endpoint}`);

        const json = await req.json();

        return json;
    }

    async getMovieInfo(movieId, type) {
        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await this.basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${this.API_KEY}`);
                    break;
                case 'tv':
                    info = await this.basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${this.API_KEY}`);
                    break;
                default:
                    break;
            }
        }

        return info;
    }

    async getHomeList() {

        return [

            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await this.basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${this.API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await this.basicFetch(`/trending/all/week?language=pt-BR&api_key=${this.API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await this.basicFetch(`/movie/top_rated?language=pt-BR&api_key=${this.API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await this.basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${this.API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await this.basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${this.API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await this.basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${this.API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await this.basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${this.API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await this.basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${this.API_KEY}`)
            }
        ];
    }
}