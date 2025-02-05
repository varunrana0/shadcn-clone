import RightArrow from "@/lib/Icons/RightArrow";
import Link from "next/link";

function Hero() {
  return (
    <section className="border-b ">
      <div className="container-wrapper mx-auto w-full">
        <div className="max-w-[1536px] px-4 mx-auto flex flex-col items-start gap-1 py-8 md:py-10 lg:py-12">
          <Link
            href="#"
            className="group mb-2 inline-flex items-center px-0.5 text-sm font-medium"
          >
            <span className="underline-offset-4 group-hover:underline">
              Block are open for contributors
            </span>
            <RightArrow />
          </Link>

          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
            Build your component library
          </h1>
          <p className="max-w-2xl text-lg font-light text-foreground">
            Beautifully designed components that you can copy and paste into
            your apps. Made with Tailwind CSS. Open source.
          </p>
          <div className="flex w-full items-center justify-start gap-2 pt-2">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs"
            >
              Get Started
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
            >
              Browse Blocks
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
