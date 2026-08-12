function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all duration-300";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;