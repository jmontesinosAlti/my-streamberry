export interface Movie {
    backdrop_path: string;
    adult: boolean;
    id: number
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean
    vote_average: number
    vote_count: number
    genre_ids : number[]; 
}

export interface Cast {
    adult:string ; 
    gender:number ;
    id:number
    known_for_department:string ;
    name:string ;
    original_name:string ; 
    popularity:number ;
    profile_path:string ;
    cast_id:number ; 
    character:string ; 
    credit_id:string ; 
    order:number ; 
}

 export interface Genre {
    id: number;
    name: string;
}