"use client";
import { useState } from "react";
import styles from "../moduleCSS/Pagination.module.css";

export default function Bt8() {
  const totalPages = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handleClick = (page:number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className={styles.pagination}>
        <button
          className={styles.pageItem}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`${styles.pageItem} ${
              currentPage === page ? styles.active : ""
            }`}
            onClick={() => handleClick(page)}
          >
            {page}
          </button>
        ))}
        <button
          className={styles.pageItem}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}
