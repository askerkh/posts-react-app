import Button from "./Button";
import { usePagination } from "../../hooks/usePagination";

const Pagination = ({ setPage, page, totalPages }) => {
  const pages = usePagination(totalPages);

  return (
    <div className="mt-4 hidden h-max w-max flex-row gap-1 self-center sm:flex">
      {pages.map((p) => {
        if (page == p) {
          return (
            <Button active onClick={() => setPage(p)} key={p}>
              {p}
            </Button>
          );
        }
        return (
          <Button onClick={() => setPage(p)} key={p}>
            {p}
          </Button>
        );
      })}
    </div>
  );
};

export default Pagination;
