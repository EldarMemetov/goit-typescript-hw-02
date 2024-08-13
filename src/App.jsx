import "./App.css";
import { useState, useEffect } from "react";
import { fetchImg } from "./components/ImgItemHttp/ImgItemHttp";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const handleSearchSubmit = async (searchQuery) => {
    setImages([]);
    setPage(1);
    setQuery(searchQuery);
    setTotalPages(0);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }

    const getImages = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImg(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    console.log("query:", query, "page:", page);
    getImages();
  }, [query, page]);

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearchSubmit} query={query} />
      <Toaster />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {!loading && !error && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {!loading && images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        imageUrl={selectedImageUrl}
      />
    </div>
  );
}

export default App;
