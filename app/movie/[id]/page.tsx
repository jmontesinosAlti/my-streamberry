'use client'

import { Cast, Movie } from "@/app/Interfaces/Movie";

const baseURL = 'https://api.themoviedb.org/3'
const token = '4f298a53e552283bee957836a529baec'


async function getMovie(idaMovie: number): Promise<Movie> {
  const query = `${baseURL}/movie/${idaMovie}?api_key=${token}`;

  const res = await fetch(query);

  try {
    if (res && !res.ok) {

      throw new Error('Failed to fetch data')
    }

    const moviesData = await res.json();

    return moviesData || {};

  } catch (error) {


    return {} as Movie;
  }


}



async function getMovieCredits(idaMovie: number): Promise<Cast[]> {
  const query = `${baseURL}/movie/${idaMovie}/credits?api_key=${token}`;

  const res = await fetch(query);

  try {
    if (res && !res.ok) {

      throw new Error('Failed to fetch data')
    }

    const moviesData = await res.json();

    return moviesData.cast || []

  } catch (error) {


    return []
  }


}




export default async function Movie({ params }: any) {

  let movie: Movie;
  let credits: Cast[]

  if (params.id) {
     movie = await getMovie(params.id);
     credits = await getMovieCredits(params.id);
  }




  return <h1>Hello, MOVIES details {params.id}</h1>
}