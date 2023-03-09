import Input from "./UI/Input";
import Select from "./UI/Select"

const PostFilter = ({ filter, setFilter }) => {


  return (
    <div className="flex flex-col gap-4">
      <Input
        value={filter.query}
        type="text"
        placeholder="Finder..."
        onChange={e => setFilter({ ...filter, query: e.target.value })}
      />
      <Select
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Sort by"
        options={[
          { value: "title", name: "By Title" },
          { value: "body", name: "By Description" }
        ]}
      />
    </div>
  )
}

export default PostFilter;
