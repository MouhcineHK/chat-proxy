export default function LoadingDots() {
  return (
    <div className="flex space-x-1 items-center">
      <div
        className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-300 animate-pulse"
        style={{ animationDelay: "0ms" }}
      ></div>
      <div
        className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-300 animate-pulse"
        style={{ animationDelay: "300ms" }}
      ></div>
      <div
        className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-300 animate-pulse"
        style={{ animationDelay: "600ms" }}
      ></div>
    </div>
  )
}

