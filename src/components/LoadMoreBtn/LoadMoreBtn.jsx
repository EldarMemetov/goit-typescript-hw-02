import loadMoreBtn from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ onClick }) {
  return (
    <div>
      <button onClick={onClick} className={loadMoreBtn.btn}>
        Load More
      </button>
    </div>
  );
}
