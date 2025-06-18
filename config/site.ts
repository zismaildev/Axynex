export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Nexen",
  description:
    "Nexen is a professional-grade, all-in-one personal and business management platform. Built with Next.js and NextUI, it integrates tools for product sales, portfolio showcase, financial tracking, task management, and stock monitoring — empowering individuals and teams to streamline work and life in one place.",
  navItems: [
    {
      label: "Website",
      href: "/website",
    },
    {
      label: "Games",
      href: "/pricing",
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
