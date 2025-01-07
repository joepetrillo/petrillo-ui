import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex grow flex-col items-center justify-center px-8 pt-12 pb-[calc(3rem+5vh)]">
      <div className="w-full max-w-[426px] text-balance">
        <p className="mb-3 text-2xl font-bold text-gray-950">404 Not Found</p>
        <p className="mb-6 text-gray-700">
          Sorry, the page you are trying to load does not exist.
        </p>
        <Link
          href={"/"}
          className="text-blue-500 underline hover:text-blue-700 dark:hover:text-blue-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
