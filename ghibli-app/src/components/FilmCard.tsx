import type { Film } from "../types";

/**
 * FilmCard Component
 * -------------------
 * This component receives a single Film object as a prop
 * and displays its information inside a semantic <article> element.
 *
 * It shows:
 * - Movie image
 * - English title
 * - Original Japanese title + release year
 * - Description
 * - Director, Producer, Rotten Tomatoes score
 */

export default function FilmCard({ film }: { film: Film }) {
    return (
        <article className="film-card">
            <div className="film-card-content">
                <img src={film.image} alt={film.title} className="film-img" />

                <div className="film-info">
                    <h2>{film.title}</h2>
                    <h4>
                        {film.original_title} ({film.release_date})
                    </h4>
                    <p className="film-description">{film.description}</p>
                    <p><strong>Director:</strong> {film.director}</p>
                    <p><strong>Producer:</strong> {film.producer}</p>
                    <p><strong>Rotten Tomatoes:</strong> {film.rt_score}</p>
                </div>
            </div>
        </article>
    );
}
