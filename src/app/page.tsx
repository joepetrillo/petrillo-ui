import Link from "next/link";

export default function Page() {
  return (
    <div className="flex grow flex-col items-center justify-center px-8 pt-12 pb-[calc(3rem+5vh)]">
      <div className="w-full max-w-md text-balance">
        <h1 className="mb-3 text-2xl font-bold text-gray-950">Petrillo UI</h1>
        <p className="mb-6 text-gray-700">
          Fundamental React components built on top of Base UI and TailwindCSS.
          Inspired by Shadcn UI. Open Source.
        </p>
        <div className="flex gap-6">
          <Link href={"/docs"} className="text-blue-500 underline">
            Docs
          </Link>
          <Link
            href={"https://github.com/joepetrillo/petrillo-ui"}
            className="text-blue-500 underline"
            target="_blank"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
