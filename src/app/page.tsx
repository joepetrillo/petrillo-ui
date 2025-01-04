import Link from "next/link";

export default function Page() {
  return (
    <div className="flex grow flex-col items-center justify-center px-10 pt-8 pb-24">
      <div>
        <h1 className="mb-3 text-2xl font-bold text-gray-950">Petrillo UI</h1>
        <p className="mb-6 max-w-md text-balance text-gray-700">
          Fundamental React components built on top of Base UI and TailwindCSS.
          Inspired by Shadcn UI. Open Source.
        </p>
        <Link href={"/docs"} className="block text-blue-500">
          Get Started
        </Link>
      </div>
    </div>
  );
}
