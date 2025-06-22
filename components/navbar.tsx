import React, { useState } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Avatar,
  Link,
} from "@heroui/react";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, DiscordIcon, Logo } from "@/components/icons";
import { useUser } from "@/lib/hooks/useUser";
import { useLogout } from "@/lib/hooks/useLogout";

export const Navbar = () => {
  const { user, profile } = useUser();
  // Debug: log profile and role
  // console.log('[Navbar] user:', user);
  // console.log('[Navbar] profile:', profile);
  const isAdmin = profile?.roles?.name === "admin" || profile?.roles?.name === "owner";
  const handleLogout = useLogout();

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarMenuToggle className="sm:hidden basis-1 pl-4" />
        {/* Braner */}
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="hidden sm:flex basis-1/5 font-bold text-inherit">
              Axynex
            </p>
          </NextLink>
        </NavbarBrand>
        {/* End Braner */}

        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.discord} title="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          {user ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name={user.name || user.email || "User"}
                  size="sm"
                  src={
                    (profile && profile.avatar_url) ? profile.avatar_url :
                      "https://i.pravatar.cc/150?u=a04258a2462d826712d"
                  }
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem
                  key="profile"
                  className="h-14 gap-2"
                  href={siteConfig.routes.profile}
                >
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{user.email}</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <>
                  {siteConfig.navMenuItems
                    .filter((item) => !item.adminOnly || isAdmin)
                    .map((item, index) => (
                      <DropdownItem key={item.label} href={item.href} textValue={item.label}>
                        {item.label}
                      </DropdownItem>
                    ))}
                </>
                <DropdownItem
                  key="logout"
                  color="danger"
                  onClick={handleLogout}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Button
              as={NextLink}
              className="text-sm font-normal text-default-600 bg-default-100"
              href={siteConfig.routes.login}
              variant="flat"
            >
              Sign in
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link> */}
        <ThemeSwitch />

        <NavbarItem>
          {user ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name={user.name || user.email || "User"}
                  size="sm"
                  src={
                    (profile && profile.avatar_url) ? profile.avatar_url :
                      "https://i.pravatar.cc/150?u=a04258a2462d826712d"
                  }
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem
                  key="profile"
                  className="h-14 gap-2"
                  href={siteConfig.routes.profile}
                >
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{user.email}</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <>
                  {siteConfig.navMenuItems
                    .filter((item) => !item.adminOnly || isAdmin)
                    .map((item, index) => (
                      <DropdownItem key={item.label} href={item.href} textValue={item.label}>
                        {item.label}
                      </DropdownItem>
                    ))}
                </>
                <DropdownItem
                  key="logout"
                  color="danger"
                  onClick={handleLogout}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Button
              as={NextLink}
              className="text-sm font-normal text-default-600 bg-default-100"
              href={siteConfig.routes.login}
              variant="flat"
            >
              Sign in
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      {/* Responsive Navbar Menu */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
      {/* End Responsive Navbar Menu */}
    </HeroUINavbar>
  );
};
