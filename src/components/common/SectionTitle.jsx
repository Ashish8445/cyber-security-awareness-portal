function SectionTitle({
  title,
  subtitle,
  align = "center",
}) {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <h2 className="text-3xl font-semibold text-slate-800">
        {title}
      </h2>

      <p className="mt-4 text-slate-500 max-w-3xl mx-auto leading-7">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;