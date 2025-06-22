export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Axynex",
  description:
    "Axynex is a professional-grade, all-in-one personal and business management platform. Built with Next.js and NextUI, it integrates tools for product sales, portfolio showcase, financial tracking, task management, and stock monitoring — empowering individuals and teams to streamline work and life in one place.",
  navItems: [
    {
      label: "Website",
      href: "/website",
    },
    {
      label: "Games",
      href: "/game",
    },
    {
      label: "Docs",
      href: "/docs",
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
      label: "Dashboard",
      href: "/dashboard",
      adminOnly: true
    },
    {
      label: "Projects",
      href: "/projects",
      adminOnly: true
    },
    {
      label: "Team",
      href: "/team",
      adminOnly: true
    },
    {
      label: "Calendar",
      href: "/calendar",
      adminOnly: true
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
  ],

  routes: {
    login: "auth/login",
    forget: "auth/forget",
    profile: "auth/profile",
  },

  links: {
    facebook: "https://www.facebook.com/zismaildev",
    youtube: "https://www.youtube.com/channel/UCzewwrLueNmJRRu-OMjGRnA",
    github: "https://github.com/zismaildev",
    discord: "https://discord.gg/vArzFEfTff",

    docs: "https://heroui.com",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
