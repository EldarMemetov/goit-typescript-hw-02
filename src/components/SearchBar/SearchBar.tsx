import React from "react";
import { toast } from "react-hot-toast";
import search from "./SearchBar.module.css";
import { SearchBarProps } from "../App/App.types";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const query = (
      form.elements.namedItem("query") as HTMLInputElement
    ).value.trim();
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
};

export default SearchBar;
