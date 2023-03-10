const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className="h-8 w-max cursor-pointer appearance-none rounded text-center lowercase shadow-sm shadow-green-400 outline-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value={defaultValue} disabled>
        {defaultValue}
      </option>
      {options.map((opt) => {
        return (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
