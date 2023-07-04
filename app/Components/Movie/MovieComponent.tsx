import { Genre, Movie } from "@/app/Interfaces/Movie";
import Link from "next/link";

export default function MovieComponent({ movie, genres }: { movie: Movie, genres: Genre[] }) {

  const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  let mapedGenres: string[] = [];

  console.log('generos >>>>>', genres);

  if (genres && genres.length > 0) {




    movie.genre_ids?.forEach((genre) => {

      const genreValue = genres.find((genreData) => genreData.id === genre);

      if (genreValue && genreValue.name) {
        mapedGenres.push(genreValue.name)
      }



    });
  }




  return (

    <Link href="/movie/[slug]" as={`/movie/${movie.id}`}>

      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{movie.title} </div>
          <p className="text-gray-700 text-base">
            {movie.release_date} <span className="float-right text-xl">{movie.vote_average}</span>
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">

          {mapedGenres?.map((genre) => (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{genre}</span>
          ))}


        </div>
      </div>



    </Link>
  )

}