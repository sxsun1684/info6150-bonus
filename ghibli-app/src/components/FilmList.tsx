import FilmCard from "./FilmCard";
import type {Film} from "../types";

/**
 * FilmList Component
 * -------------------
 * This component receives an array of Film objects
 * and renders a list of FilmCard components.
 *
 * Semantic HTML:
 * - <section> is used because this represents
 *   a standalone block of related content (a list of films).
 *
 * Behavior:
 * - Iterates through the 'films' array
 * - Each film is passed down to a FilmCard component
 * - 'key' is required for efficient React rendering
 */

export default function FilmList({films}: { films: Film[] }) {
    return (
        // Semantic container for a collection of film cards
        <section className="film-list">

            {/* Render one FilmCard per film */}
            {films.map((film) => (
                <FilmCard
                    key={film.id}  // Unique key helps React optimize updates
                    film={film}    // Pass full film data to FilmCard
                />
            ))}

        </section>
    );
}
