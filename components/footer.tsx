import Link from "next/link";

import { YoutubeIcon, GithubIcon, DiscordIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

// const { publicRuntimeConfig } = getConfig();
export default function FooterComp() {
  return (
    <div className="mx-auto w-full max-w-7xl select-none p-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 m-4">
        <span className="flex items-center justify-center space-x-6 text-center">
          <Link
            aria-label="GitHub profile"
            className="text-gray-500 hover:text-black transition-colors"
            href="https://github.com/zismaildev"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon />
          </Link>
          <Link
            aria-label="Facebook page"
            className="text-gray-500 hover:text-blue-600 transition-colors"
            href={siteConfig.links.discord}
            rel="noopener noreferrer"
            target="_blank"
          >
            <DiscordIcon />
          </Link>
          <Link
            aria-label="Youtube"
            className="text-gray-500 hover:text-red-600 transition-colors"
            href={siteConfig.links.youtube}
            rel="noopener noreferrer"
            target="_blank"
          >
            <YoutubeIcon />
          </Link>
        </span>
        <span className="text-center text-gray-500 dark:text-gray-400 sm:text-center text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-violet-700">Axynex</span>. All
          rights reserved.
        </span>
      </div>
    </div>
  );
}
