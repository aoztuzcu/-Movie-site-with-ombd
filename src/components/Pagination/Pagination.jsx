import cls from "classnames";
import styles from "./Pagination.module.scss";
import Button from "@/components/Button";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let index = 1; index <= totalPages; index++) {
    if (
      index === 1 ||
      index === totalPages ||
      (index >= currentPage - 5 && index <= currentPage + 5)
    ) {
      pages.push(index);
    }
  }

  const handlePageClick = (p) => {
    if (p !== currentPage) {
      onPageChange(p);
    }
  };

  return (
    <div className={styles.pagination}>
      <Button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={cls({ [styles.active]: currentPage === 1 }, styles.button)}
      >
        Önceki Sayfa
      </Button>
      {pages.map((page) => {
        const isActive = currentPage === page;
        return (
          <Button
            size="small"
            key={page}
            className={cls({ [styles.active]: isActive }, styles.button)}
            disabled={isActive}
            onClick={() => {
              handlePageClick(page);
            }}
          >
            {page}
          </Button>
        );
      })}
      <Button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cls(
          { [styles.active]: currentPage === totalPages },
          styles.button
        )}
      >
        Sonraki Sayfa
      </Button>
    </div>
  );
};
export default Pagination;
