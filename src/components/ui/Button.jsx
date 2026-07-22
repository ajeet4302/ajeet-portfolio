function Button({
  children,
  href,
  primary = true,
  download = false,
  target,
}) {
  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
        primary
          ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/30"
          : "border border-blue-500 text-white hover:bg-blue-600"
      }`}
    >
      {children}
    </a>
  );
}

export default Button;