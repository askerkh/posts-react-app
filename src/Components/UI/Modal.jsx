const Modal = ({ children, visible, setVisible }) => {
  const rootClasses = ["fixed top-0 bottom-0 right-0 left-0 modalBg flex justify-center items-center"]

  if (!visible) {
    rootClasses.push("hidden")
  }

  return (
    <div onClick={() => setVisible(false)} className={rootClasses.join(' ')}>
      <div className="p-6 bg-white rounded-2xl min-w-[250px]" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal;
