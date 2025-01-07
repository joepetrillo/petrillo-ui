import LogoIcon from "@/components/ui/logo-icon";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid grow grid-cols-[minmax(1rem,1fr)_auto_minmax(1rem,1fr)] grid-rows-[minmax(1rem,0.9fr)_auto_minmax(1rem,1fr)]">
      <div className="border-r border-b border-gray-300" />
      <div className="border-b border-gray-300" />
      <div className="border-b border-l border-gray-300" />

      <div className="border-r border-gray-300" />
      <div className="w-full max-w-[490px] px-8 py-12 text-balance">
        <div className="mb-4 flex flex-nowrap items-end gap-4 text-nowrap">
          <LogoIcon />
          <h1 className="text-2xl font-bold text-gray-950">Petrillo UI</h1>
        </div>
        <p className="mb-6 text-gray-700">
          Fundamental React components built on top of{" "}
          <Link
            href={"https://base-ui.com/"}
            target="_blank"
            className="underline hover:text-gray-950"
          >
            Base UI
          </Link>{" "}
          and{" "}
          <Link
            href={"https://tailwindcss.com/"}
            target="_blank"
            className="underline hover:text-gray-950"
          >
            TailwindCSS
          </Link>
          . Inspired by{" "}
          <Link
            href={"https://ui.shadcn.com/"}
            target="_blank"
            className="underline hover:text-gray-950"
          >
            Shadcn UI
          </Link>
          . Open Source.
        </p>
        <div className="flex gap-4">
          <Link
            href={"/docs"}
            className="text-blue-600 underline hover:text-blue-500"
          >
            Docs
          </Link>
          <Link
            href={"https://github.com/joepetrillo/petrillo-ui"}
            className="text-blue-600 underline hover:text-blue-500"
            target="_blank"
          >
            GitHub
          </Link>
        </div>
      </div>
      <div className="border-l border-gray-300" />

      <div className="border-t border-r border-gray-300" />
      <div className="border-t border-gray-300" />
      <div className="border-t border-l border-gray-300" />
    </div>
  );
}
