export default function SkeletonLoader() {
  return (
    <div className="lg:ml-8  columns-1 md:columns-2 lg:columns-5 media-coloumn">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="p-4 pt-9 bg-gray-800 rounded-md side-nav md:w-48 lg:w-48 text-center break-inside-avoid mb-4 border border-gray-700 animate-pulse  "
          //   p-4 border text-white pt-9 border-gray-300 rounded-md side-nav md:w-48 lg:w-48 text-center break-inside-avoid mb-4 bg-gray-900
        >
          <div className="h-1/2 bg-gray-700 rounded mb-4"></div>
          <div className="h-4 bg-gray-700 rounded mb-2 w-3/4"></div>
          <div className="h-3 bg-gray-700 rounded w-1/2"></div>
          <div className="h-1/2 bg-gray-700 rounded mb-4"></div>
          <div className="h-4 bg-gray-700 rounded mb-2 w-3/4"></div>
          <div className="h-3 bg-gray-700 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
}
