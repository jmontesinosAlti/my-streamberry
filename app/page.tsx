import Image from "next/image";
import Header from "./Components/Header/Header";
import Link from "next/link";
import MovieComponent from "./Components/Movie/MovieComponent";
import { Movie, Genre } from './Interfaces/Movie';

const baseURL = 'https://api.themoviedb.org/3'
const token = '4f298a53e552283bee957836a529baec'


let movies: Movie[] = []

let genres: Genre[] = []


async function getGenres(): Promise<Genre[]> {

  const query = `${baseURL}/genre/movie/list?api_key=${token}`;

  const res = await fetch(query);

  try {
    if (res && !res.ok) {

      throw new Error('Failed to fetch data')
    }

    const genresData = await res.json();

    return genresData.genres || [];

  } catch (error) {


    return [];
  }

}

// https://api.themoviedb.org/3/movie/popular?api_key=4f298a53e552283bee957836a529baec

async function getMovies(category: string): Promise<Movie[]> {
  const query = `${baseURL}/movie/${category}?api_key=${token}`;

  const res = await fetch(query);

  try {
    if (res && !res.ok) {

      throw new Error('Failed to fetch data')
    }

    const moviesData = await res.json();

    return moviesData.results || [];

  } catch (error) {


    return [];
  }


}

const onChangeCategory = (category: string) => {

  console.log('categoria', category);



}



export default async function Home() {

  genres = await getGenres();
  movies = await getMovies('popular');



  return (
    <main className="flex min-h-screen flex-col">
      <Header />



      <div className="flex flex-wrap mb-4">

        {movies.map((movie: Movie) => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-5 p-3">
            <MovieComponent movie={movie} genres={genres} />
          </div>
        ))}


      </div>


    </main>
  );
}
