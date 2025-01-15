import { ScrollArea } from "@base-ui-components/react/scroll-area";
import Link from "next/link";

const overviewLinks = ["About", "Getting Started", "Customization"];

const componentLinks = [
  "Accordion",
  "Alert Dialog",
  "Checkbox",
  "Checkbox Group",
  "Collapsible",
  "Dialog",
  "Field",
  "Fieldset",
  "Form",
  "Input",
  "Menu",
  "Number Field",
  "Popover",
  "Preview Card",
  "Progress",
  "Radio",
  "Scroll Area",
  "Select",
  "Separator",
  "Slider",
  "Switch",
  "Tabs",
  "Toggle",
  "Toggle Group",
  "Tooltip",
];

export default function Sidebar() {
  return (
    <div className="sticky top-[73px]">
      <ScrollArea.Root className="h-[calc(100dvh-146px)] px-4">
        <ScrollArea.Viewport className="h-full overscroll-contain px-2 py-1">
          <nav className="flex flex-col items-stretch">
            {/* overview */}
            <h3 className="mb-1 font-bold">Overview</h3>
            {overviewLinks.map((title) => (
              <Link
                key={title}
                href={`/docs/${title.toLowerCase().replace(/ /g, "-")}`}
                className="my-0.5 rounded-sm border-1 border-transparent py-0.5 pr-1 pl-4 text-[15px] hover:border-gray-100 hover:bg-gray-50"
              >
                {title}
              </Link>
            ))}
            {/* components */}
            <h3 className="mt-6 mb-1 font-bold">Components</h3>
            {componentLinks.map((component) => (
              <Link
                key={component}
                href={`/components/${component.toLowerCase().replace(/ /g, "-")}`}
                className="my-0.5 rounded-sm border-1 border-transparent py-0.5 pr-1 pl-4 text-[15px] hover:border-gray-100 hover:bg-gray-50"
              >
                {component}
              </Link>
            ))}
          </nav>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar className="m-2 flex w-1 justify-center rounded bg-gray-300 opacity-0 transition-opacity delay-300 data-[hovering]:opacity-100 data-[hovering]:delay-0 data-[hovering]:duration-75 data-[scrolling]:opacity-100 data-[scrolling]:delay-0 data-[scrolling]:duration-75">
          <ScrollArea.Thumb className="w-full rounded bg-gray-500" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  );
}
