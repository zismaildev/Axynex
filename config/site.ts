export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Zismail Shop",
  description: "Zismail Shop is a modern, responsive web application built with Next.js and NextUI, designed to showcase beautiful UI, fast performance, and seamless experience on every device.",
  navItems: [
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],

  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],

  routes: {
    login: "auth/login",
  },

  links: {
    facebook: "https://www.facebook.com/zismaildev",
    youtube: "https://www.youtube.com/channel/UCzewwrLueNmJRRu-OMjGRnA",
    github: "https://github.com/zismaildev",
    discord: "https://discord.gg/vArzFEfTff",

    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
