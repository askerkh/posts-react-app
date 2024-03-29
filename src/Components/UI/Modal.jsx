const Modal = ({ children, visible, setVisible }) => {
  const rootClasses = [
    "fixed top-0 bottom-0 right-0 left-0 modalBg flex justify-center items-center",
  ];

  if (!visible) {
    rootClasses.push("hidden");
  }

  return (
    <div onClick={() => setVisible(false)} className={rootClasses.join(" ")}>
      <div
        className="min-w-[250px] rounded-2xl bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
