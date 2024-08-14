export type Image = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
};

export type ImageCardProps = {
  imageUrl: string;
  altDescription: string;
};

export type ImageGalleryProps = {
  images: Image[];
  openModal: (imageUrl: string) => void;
};

export type LoadMoreBtnProps = {
  onClick: () => void;
};

export type SearchBarProps = {
  onSearch: (query: string) => void;
};

export interface ImageModalProps {
  isOpen: boolean;
  closeModal: () => void;
  imageUrl: string;
}

export interface FetchImgParams {
  query: string;
  currentPage: number;
}

export interface FetchImgResponse {
  results: Image[];
  total_pages: number;
}
