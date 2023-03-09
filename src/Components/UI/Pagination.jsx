import Button from "./Button"
import { usePagination } from "../../hooks/usePagination";

const Pagination = ({ setPage, page, totalPages }) => {
  const pages = usePagination(totalPages);

  return (
    <div className="flex flex-row h-max w-max self-center mt-4 gap-1">
      {
        pages.map(p => {
          if (page == p) {
            return <Button active onClick={() => setPage(p)} key={p}>{p}</Button>
          }
          return <Button onClick={() => setPage(p)} key={p}>{p}</Button>
        })
      }
    </div>
  )
}

export default Pagination;
