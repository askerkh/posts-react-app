import Input from "./UI/Input";
import Select from "./UI/Select";

const PostFilter = ({ filter, setFilter, limit, setLimit }) => {
  return (
    <div className="mb-4 flex flex-col gap-4">
      <Input
        value={filter.query}
        type="text"
        placeholder="Finder..."
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <div className="flex gap-4 self-center">
        <Select
          value={filter.sort}
          onChange={(selectedSort) =>
            setFilter({ ...filter, sort: selectedSort })
          }
          defaultValue="Sort by"
          options={[
            { value: "title", name: "By Title" },
            { value: "body", name: "By Description" },
          ]}
        />
        <Select
          value={limit}
          onChange={(value) => setLimit(value)}
          defaultValue="Limit posts on pages"
          options={[
            { value: 5, name: "5" },
            { value: 10, name: "10" },
            { value: 25, name: "25" },
            { value: -1, name: "all" },
          ]}
        />
      </div>
    </div>
  );
};

export default PostFilter;
