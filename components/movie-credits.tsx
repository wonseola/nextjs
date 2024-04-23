import { URL } from "../app/constants";
import styles from "../styles/movie-credits.module.css"


async function getCredits(id: string) {
    const response = await fetch(`${URL}/${id}/credits`);
    return response.json();
}

export default async function MovieCredits({ id }: { id: string }) {
    const credits = await getCredits(id);
    const originalNames = credits.map(credit => credit.original_name);
    const profilePaths = credits.map(credit => credit.profile_path).slice(0, 6);

    const images = profilePaths.map((path, index) => {
        if (path) {
            return (
                <div key={index} className={styles.imagecontainer}>
                    <img src={path} alt={originalNames[index]} />
                    <p>{originalNames[index]}</p>
                </div>
            );
        }
        return null; // If profile path is null, return null
    });

    return (
        <div className={styles.gridcontainer} >
            {/* <h2>{JSON.stringify(aaa)}</h2> */}
            {images}
        </div>
    )
}

