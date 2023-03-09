const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className="w-max cursor-pointer rounded appearance-none outline-none shadow-green-400 shadow-sm lowercase"
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option value={defaultValue} disabled>{defaultValue}</option>
      {
        options.map(opt => {
          return (
            <option key={opt.value} value={opt.value}>{opt.name}</option>
          )
        })
      }
    </select>
  )
}

export default Select;
