/**
 * Props Interface
 * ---------------
 * value:     The current value of the search input field.
 * onChange:  A callback that updates the parent component whenever
 *            the user types into the search input.
 * onSearch:  A callback triggered when the user submits the form
 *            (either by pressing Enter or clicking the Search button).
 */
interface Props {
    value: string;
    onChange: (value: string) => void;
    onSearch: () => void;
}

/**
 * SearchBar Component
 * -------------------
 * A semantic, accessible search bar used to filter the list of films.
 *
 * Semantic HTML:
 * - <section> groups related content on the page.
 * - <form> is used because searching represents a user action/input.
 * - <input> is the text field where the user enters the query.
 * - <button type="submit"> properly triggers form submission.
 *
 * Behavior:
 * - Form submission is handled without refreshing the page.
 * - Enter key and Search button both trigger the same search action.
 */

export default function SearchBar({value, onChange, onSearch}: Props) {
    return (
        // Semantic wrapper for the search area
        <section className="search-area">

            {/* Accessible and semantic form structure */}
            <form
                className="search-form"
                onSubmit={(e) => {
                    e.preventDefault(); // Prevent full page reload (default form behavior)
                    onSearch();         // Trigger search callback
                }}
            >
                {/* Search input field where the user types a query */}
                <input
                    id="search"
                    type="text"
                    placeholder="Search films..."
                    value={value}
                    onChange={(e) => onChange(e.target.value)} // Update state on each keystroke
                    className="search-input"
                />

                {/* Submit button to initiate the search */}
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>

        </section>
    );
}
