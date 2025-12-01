import {useEffect, useState} from "react";
import {getFilms} from "./api/ghibli";
import type {Film} from "./types";
import FilmList from "./components/FilmList";
import SearchBar from "./components/SearchBar";

/**
 * App Component
 * -------------
 * This is the root component of the application.
 * It loads Studio Ghibli film data from the API, provides a search interface, and renders a list of film cards.
 */

function App() {

    /**
     * State: list of films returned by the API
     * films: the complete dataset
     * setFilms: updates the film list after fetching data
     */
    const [films, setFilms] = useState<Film[]>([]);

    /**
     * State: controlled input field for the search bar
     * searchInput: whatever the user types in the search field
     */
    const [searchInput, setSearchInput] = useState("");

    /**
     * State: actual search keyword used to filter films
     * Using separate state variables allows us to update the search only when the user clicks the "Search" button.
     */
    const [search, setSearch] = useState("");

    /**
     * State: loading indicator
     * loading: true while data is being fetched
     */
    const [loading, setLoading] = useState(true);

    /**
     * useEffect()
     * -----------
     * This effect runs only once (on component mount). It fetches film data from the Studio Ghibli API.
     */
    useEffect(() => {
        getFilms()
            .then((data) => setFilms(data))
            .catch((err) => console.error("API Error:", err))
            .finally(() => setLoading(false));
    }, []);

    /**
     * Filtering Logic
     * ---------------
     * Performs a case-insensitive fuzzy search on the film titles. Only the films whose titles include the search string are shown.
     */
    const filteredFilms = films.filter((film) =>
        film.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        // Main semantic container for the page content
        <main className="container">

            {/* Page title */}
            <h1>Studio Ghibli Films</h1>

            {/* Search bar component */}
            <SearchBar
                value={searchInput}
                onChange={setSearchInput}
                onSearch={() => setSearch(searchInput)} // Trigger search on button click
            />

            {/* Show loading state or film list */}
            {loading ? (
                <p>Loading…</p>
            ) : (
                <FilmList films={filteredFilms}/>
            )}

        </main>
    );
}

export default App;
