import LogoIcon from "@/components/ui/logo-icon";
import { ScrollArea } from "@base-ui-components/react/scroll-area";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex grow flex-col">
      {/* header */}
      <div className="fixed inset-x-0 z-10 border-b border-gray-300 bg-white dark:bg-black">
        <header className="mx-auto flex h-12 max-w-7xl items-center justify-between px-6">
          <Link
            href={"/"}
            className="flex flex-nowrap items-center gap-3 text-nowrap"
          >
            <LogoIcon size="md" />
            <h1 className="text-xl font-bold text-gray-950">Petrillo UI</h1>
          </Link>
          <Link
            href={"https://github.com/joepetrillo/petrillo-ui"}
            className="flex flex-nowrap items-center gap-2 text-nowrap text-gray-700 underline hover:text-gray-950"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="mb-0.5 h-5 w-5"
            >
              <path
                fill="currentColor"
                d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
            <span>GitHub</span>
          </Link>
        </header>
      </div>
      {/* main page area */}
      <div className="relative mx-auto grid w-full max-w-7xl grow grid-cols-[17rem_1fr] items-start">
        <div className="absolute top-0 bottom-0 left-0 z-20 w-[1px] bg-gray-300 opacity-0 transition-opacity gridVert:opacity-100"></div>
        <div className="absolute top-0 right-0 bottom-0 z-20 w-[1px] bg-gray-300 opacity-0 transition-opacity gridVert:opacity-100"></div>
        <div className="sticky top-[73px]">
          <ScrollArea.Root className="h-[calc(100dvh-146px)] px-3">
            <ScrollArea.Viewport className="h-full overscroll-contain px-3 py-1 focus-visible:outline-2 focus-visible:outline-blue-600">
              <nav className="flex flex-col items-stretch gap-2">
                <Link
                  href={"/docs"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Docs
                </Link>
                <Link
                  href={"/components"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Components
                </Link>
                <Link
                  href={"/docs"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/components"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/docs"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/components"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/docs"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/components"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/docs"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/components"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/docs"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/components"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/docs"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/components"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/docs"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/components"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/docs"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/components"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/docs"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/components"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/docs"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/components"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/docs"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
                <Link
                  href={"/components"}
                  className="bg-gray-50 px-4 py-1 hover:bg-gray-100"
                >
                  Foo
                </Link>
              </nav>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar className="m-2 flex w-1 justify-center rounded bg-gray-300 opacity-75 transition-opacity delay-300 data-[hovering]:opacity-100 data-[hovering]:delay-0 data-[hovering]:duration-75 data-[scrolling]:opacity-100 data-[scrolling]:delay-0 data-[scrolling]:duration-75">
              <ScrollArea.Thumb className="w-full rounded bg-gray-500" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </div>
        <main className="py-[73px] pr-12 pl-6">{children}</main>
      </div>
      {/* footer */}
      <div className="fixed inset-x-0 bottom-0 z-10 border-t border-gray-300 bg-white dark:bg-black">
        <footer className="mx-auto flex h-12 max-w-7xl items-center justify-between px-6">
          <p className="text-sm text-gray-700">
            Made by{" "}
            <Link
              href={"https://github.com/joepetrillo"}
              className="underline hover:text-gray-950"
              target="_blank"
            >
              Joe Petrillo
            </Link>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
