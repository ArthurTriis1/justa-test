interface IGenre {
    name: string,
    id: number,
}

interface ICompanie {
    logo_path: string,
    name: string,
}

export default interface IMovieSearch {
    backdrop_path?: string;
    budget?: number;
    genres?: IGenre[];
    homepage?: string;
    id: number;
    original_title: string;
    overview: string;
    poster_path: string;
    production_companies?: ICompanie[];
    release_date: string;
    revenue?: number;
    runtime?: number;
    tagline?: string;
    title: string;
    vote_average?: number;
}