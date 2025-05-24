import getConfig from "next/config";
import { YoutubeIcon, GithubIcon, DiscordIcon } from "@/components/icons";
import Link from "next/link";

import { siteConfig } from "@/config/site";

// const { publicRuntimeConfig } = getConfig();
export default function FooterComp() {
    return (
        <footer className="border-t border-slate-200">
            <div className="mx-auto w-full max-w-screen-xl select-none p-4 py-8">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 m-4">
                    <span className="flex items-center justify-center space-x-6 text-center">
                        <Link
                            href="https://github.com/zismaildev"
                            className="text-gray-500 hover:text-black transition-colors"
                            aria-label="GitHub profile"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <GithubIcon />
                        </Link>
                        <Link
                            href={siteConfig.links.discord}
                            className="text-gray-500 hover:text-blue-600 transition-colors"
                            aria-label="Facebook page"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <DiscordIcon />
                        </Link>
                        <Link
                            href={siteConfig.links.youtube}
                            className="text-gray-500 hover:text-red-600 transition-colors"
                            aria-label="Youtube"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <YoutubeIcon />
                        </Link>
                    </span>
                    <span className="text-center text-gray-500 dark:text-gray-400 sm:text-center text-sm">
                        © {new Date().getFullYear()} <span className="font-semibold text-gray-700">ZismailDev</span>. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}
