export default function Introduction() {
  return (
    <div className="relative">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6">
        Software Developer{" "}
        <span className="relative">
          <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 to-green-600 opacity-50 blur"></span>
          <span className="relative text-green-600 dark:text-green-400">
            PeterPham
          </span>
        </span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 relative lg:max-w-11/12">
        Crafting elegant solutions with code. Specializing in web development
        and developer tools.
        <span className="absolute -right-8 top-0 text-4xl animate-pulse">
          ✨
        </span>
      </p>
    </div>
  );
}
