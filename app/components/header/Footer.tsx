import Link from "next/link";

function Footer() {
  return (
    <footer className="border-grid border-t py-6 md:px-8 md:py-0">
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by&nbsp;
            <Link
              href="https://twitter.com/shadcn"
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline underline-offset-4"
            >
              shadcn
            </Link>
            . The source code is available on&nbsp;
            <Link
              href="https://github.com/shadcn-ui/ui"
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline underline-offset-4"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
