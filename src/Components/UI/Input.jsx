const Input = (props) => {
  return (
    <input
      {...props}
      className="w-full appearance-none rounded border-2 px-4 py-2 shadow-xl outline-none transition-all focus:border-2 focus:border-green-400"
    />
  );
};

export default Input;
