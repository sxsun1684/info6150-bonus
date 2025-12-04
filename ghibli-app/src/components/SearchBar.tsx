import {useState} from "react";

/**
 * Props Interface
 * ---------------
 * value:     The current value of the search input field.
 * onChange:  A callback that updates the parent component whenever
 *            the user types into the search input.
 * onSearch:  A callback triggered when the user submits the form
 *            (either by pressing Enter or clicking the Search button).
 */
// interface Props {
//     value: string;
//     onChange: (value: string) => void;
//     onSearch: () => void;
// }
interface Props {
    onSearch: (value: string) => void; // parent receives final search text
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


export default function SearchBar({onSearch}: Props) {
    const [input, setInput] = useState("");

    return (
        <section className="search-area">
            <form
                className="search-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSearch(input);  // send search text to App
                }}
            >
                <input
                    id="search"
                    type="text"
                    placeholder="Search films..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="search-input"
                />

                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
        </section>
    );
}