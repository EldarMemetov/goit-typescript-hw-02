import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { fetchImg } from "../ImgItemHttp/ImgItemHttp";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SearchBar from "../SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { FetchImgResponse, Image } from "./App.types";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>("");

  const handleSearchSubmit = async (searchQuery: string) => {
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
        const data: FetchImgResponse = await fetchImg({
          query,
          currentPage: page,
        });
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

  const openModal = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearchSubmit} />
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
