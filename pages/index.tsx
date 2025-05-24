import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import IndexLayout from "@/layouts";

export default function IndexPage() {
  return (
    <IndexLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-14 min-h-[80vh]">
        <div className="w-full max-w-5xl mx-auto px-2">
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-violet-700 via-fuchsia-600 to-pink-500 shadow-2xl rounded-3xl px-6 pt-16 pb-10 sm:px-16 md:pt-24 flex flex-col lg:flex-row items-center gap-10">
            <svg
              viewBox="0 0 2024 2024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="flex-1 flex flex-col justify-center items-start text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
                Zismail Shop
              </h2>
              <p className="mt-2 text-lg md:text-xl leading-8 text-white/90 font-medium drop-shadow">
                This website was created to present my abilities and work by using{" "}
                <span className="font-bold text-white">Next.js</span>,{" "}
                <span className="font-bold text-white">Next UI</span> and{" "}
                <span className="font-bold text-white">Vercel</span>. <br />
                The site is fully responsive and accessible on all devices.
              </p>
            </div>
            <div className="relative mt-8 h-64 w-full max-w-md flex-shrink-0 lg:mt-0">
              <Image
                className="rounded-xl shadow-xl object-cover"
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="App screenshot"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
          </div>
        </div>

        <div className="inline-block max-w-xl text-center justify-center mt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">
            <span className="text-gray-800">Make&nbsp;</span>
            <span className="text-violet-600">beautiful&nbsp;</span>
            <span className="text-gray-800">websites</span>
          </h1>
          <div className="text-lg md:text-xl text-gray-500 font-medium mb-4">
            Beautiful, fast and modern React UI library.
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
              class: "px-6 py-2 text-base font-semibold",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({
              variant: "bordered",
              radius: "full",
              class: "px-6 py-2 text-base font-semibold flex items-center gap-2",
            })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-4">
          <Snippet hideCopyButton hideSymbol variant="bordered" className="bg-white/70 rounded-lg">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
    </IndexLayout>
  );
}
