import { toast } from "react-hot-toast";
import search from "./SearchBar.module.css";
export default function SearchBar({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.elements.query.value.trim();
    if (query === "") {
      toast("attention empty line", {
        icon: "🔍",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }
    onSearch(query);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          placeholder="Search images..."
          className={search.input}
        />
        <button type="submit" className={search.btn}>
          Search
        </button>
      </form>
    </header>
  );
}
