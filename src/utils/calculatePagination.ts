export interface Pagination {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  startPage: number;
  endPage: number;
  startIndex: number;
  endIndex: number;
  pages: number[];
}

export const calculatePagination = (totalItems: number, pageSize: number, currentPage: number): Pagination => {
  const totalPages = Math.ceil(totalItems / pageSize);
  const startPage = 1;
  const endPage = totalPages;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
  const pages = Array.from(Array(endPage + 1 - startPage).keys()).map((i) => startPage + i);
  return {
    totalItems,
    currentPage,
    pageSize,
    totalPages,
    startPage,
    endPage,
    startIndex,
    endIndex,
    pages,
  };
};
