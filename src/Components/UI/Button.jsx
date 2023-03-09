const Button = ({ children, styles, active, ...props }) => {
  let rootStyles = ["px-4 py-2 w-max h-12 bg-green-400 transition-all border-2 border-green-400 cursor-pointer text-xl shadow-xl rounded", styles]
  rootStyles.push(active ? "bg-transparent text-black" : "text-white ")

  return (
    <button
      className={rootStyles.join(" ")}
      {...props}>
      {children}
    </button>
  )
}

export default Button;
