import React from "react";
import loadMoreBtn from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "../App/App.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={loadMoreBtn.btn}>
        Load More
      </button>
    </div>
  );
};
export default LoadMoreBtn;
