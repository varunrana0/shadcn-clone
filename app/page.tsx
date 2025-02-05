import Header from "./components/header/Header";
import Hero from "./components/header/Hero";
import Footer from "./components/header/Footer";
import ComponentsNavigation from "./components/header/ComponentsNavigation";

export default function Home() {
  return (
    <div className="relative flex min-h-svh flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <ComponentsNavigation />
        <div className=" container-wrapper ">
          <div className="container py-6">
            <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
              <img
                alt="Cards"
                loading="lazy"
                width="1280"
                height="1214"
                decoding="async"
                data-nimg="1"
                className="block dark:hidden"
                srcSet="/_next/image?url=%2Fexamples%2Fcards-dark.png&w=1920&q=75 1x, /_next/image?url=%2Fexamples%2Fcards-dark.png&w=3840&q=75 2x"
                src="https://ui.shadcn.com/_next/image?url=%2Fexamples%2Fcards-dark.png&w=1920&q=75"
                style={{ color: "transparent" }}
              />
              <img
                alt="Cards"
                loading="lazy"
                width="1280"
                height="1214"
                decoding="async"
                data-nimg="1"
                className="hidden dark:block"
                srcSet="https://ui.shadcn.com/_next/image?url=%2Fexamples%2Fcards-dark.png&w=1920&q=75 1x, https://ui.shadcn.com/_next/image?url=%2Fexamples%2Fcards-dark.png&w=3840&q=75 2x"
                src="https://ui.shadcn.com/_next/image?url=%2Fexamples%2Fcards-dark.png&w=1920&q=75"
                style={{ color: "transparent" }}
              />
            </section>
            <section className="hidden md:flex [&>div]:p-0 min-h-svh h-full items-center justify-center">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <h1 className="text-xl md:text-4xl font-bold mb-4">
                  Shadcn/ui
                </h1>
                <p className="max-w-2xl text-lg font-light text-foreground text-center">
                  Beautifully designed components that you can copy and paste
                  into your apps. Made with Tailwind CSS. Open source.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
