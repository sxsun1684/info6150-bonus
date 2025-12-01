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
        // Semantic HTML: <article> represents an independent film item
        <article className="film-card">

            {/* Movie poster image */}
            <img
                src={film.image}
                alt={film.title}
            />

            {/* English film title */}
            <h2>{film.title}</h2>

            {/* Original Japanese title + release date */}
            <h4>
                {film.original_title} ({film.release_date})
            </h4>

            {/* Description paragraph */}
            <p>{film.description}</p>

            {/* Director information */}
            <p>
                <strong>Director:</strong> {film.director}
            </p>

            {/* Producer information */}
            <p>
                <strong>Producer:</strong> {film.producer}
            </p>

            {/* Rotten Tomatoes score */}
            <p>
                <strong>Rotten Tomatoes:</strong> {film.rt_score}
            </p>
        </article>
    );
}
