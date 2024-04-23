import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieCredits from "../../../../components/movie-credits";
import styles from "../../../../styles/movie-info.module.css"
import MovieVideos from "../../../../components/movie-videos";
interface IParams {
    params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
    const movie = await getMovie(id)
    return {
        title: movie.title,
    }
}

export default async function MovieDetail(
    { params: { id } }: IParams
) {
    // const movie = await getMovie(id);
    // const videos = await getVideos(id);
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])
    // return <h1>{movie.title}</h1>
    return (
        <div className={styles.ani}>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense>
                <MovieCredits id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}