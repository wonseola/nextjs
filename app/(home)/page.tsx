import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
    title: "Home",
}


export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies() {
    return fetch(URL).then(response => response.json());
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {
                movies.map(movie => (
                    <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
                )
                    //     (
                    //     <div key={movie.id}>
                    //         <img src={movie.poster_path} alt={movie.title} />
                    //         <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                    //     </div>
                    // )
                    // <li key={movie.id}>
                    //     <Link href={`/movies/${movie.id}`}>{movie.title}
                    //     </Link>
                    // </li>
                )
            }
        </div>
    )
}

// "use client";
// import { useEffect, useState } from "react"



// export default function Page() {
//     const URL = "https://nomad-movies.nomadcoders.workers.dev/movies"
//     const [isLoading, setIsLoading] = useState(true);
//     const [movies, setMovies] = useState();
//     const getMovies = async () => {
//         const response = await fetch(URL);
//         const json = await response.json();
//         setMovies(json);
//         setIsLoading(false);
//     }
//     useEffect(() => {
//         getMovies();
//     }, [])
//     return (
//         <div>
//             {isLoading ? "Loading ... " : JSON.stringify(movies)}
//         </div>
//     )
// }