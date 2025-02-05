import React from "react";

type Props = {};

const links = [
  { name: "Examples", href: "#", active: true },
  { name: "Mail", href: "#", active: false },
  { name: "Dashboard", href: "#", active: false },
  { name: "Tasks", href: "#", active: false },
  { name: "Playground", href: "#", active: false },
  { name: "Forms", href: "#", active: false },
  { name: "Music", href: "#", active: false },
  { name: "Authentication", href: "#", active: false },
];

function ComponentsNavigation({}: Props) {
  return (
    <div className="border-b">
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="relative">
            <div
              className="relative overflow-hidden max-w-[600px] lg:max-w-none"
              dir="ltr"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
              //   data-radix-scroll-area-viewport
            >
              <style>
                {`[data-radix-scroll-area-viewport]::-webkit-scrollbar {display: none;}`}
              </style>

              <div
                data-radix-scroll-area-viewport=""
                className="h-full w-full rounded-[inherit]"
                style={{ overflow: "scroll" }}
              >
                <div style={{ minWidth: "100%", display: "table" }}>
                  <div className="flex items-center [&amp;>a:first-child]:text-primary">
                    {links.map((link, index) => (
                      <a
                        key={index}
                        className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:bg-muted data-[active=true]:text-primary"
                        data-active={link.active}
                        href={link.href}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentsNavigation;
