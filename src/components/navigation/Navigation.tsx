import { Command, Globe } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ContactDrawer from "@/components/contact/ContactDrawer";
import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler";
import GlassSurface from "@/components/ui/GlassSurface";

import { Link } from "react-router-dom";
// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: 'Skills',
//     href: '/docs/primitives/alert-dialog',
//     description:
//       'A modal dialog that interrupts the user with important content and expects a response.',
//   },
//   {
//     title: 'Project',
//     href: '/docs/primitives/hover-card',
//     description:
//       'For sighted users to preview content available behind a link.',
//   },
//   {
//     title: '',
//     href: '/docs/primitives/progress',
//     description:
//       'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
//   },
//   {
//     title: 'Scroll-area',
//     href: '/docs/primitives/scroll-area',
//     description: 'Visually or semantically separates content.',
//   },
//   {
//     title: 'Tabs',
//     href: '/docs/primitives/tabs',
//     description:
//       'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
//   },
//   {
//     title: 'Tooltip',
//     href: '/docs/primitives/tooltip',
//     description:
//       'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
//   },
// ];

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
        <div className="text-sm leading-none font-medium">{title}</div>
        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
          {children}
        </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function Navigation() {
  return (
    <div className="flex flex-row items-center justify-center md:justify-between px-6 align-middle">
      <div className="hidden md:block">
        <Globe />
      </div>
      <div>
        <GlassSurface
          displace={15}
          distortionScale={-150}
          brightness={60}
          opacity={0.8}
          mixBlendMode="screen"
          backgroundOpacity={0.09}
          width={"16rem"}
          height={"fit-content"}
          borderRadius={50}
          className="rounded-full lg:hidden"
        >
          <div className="flex felx-row w-3xs align-center items-center justify-between px-4 py-1">
            <Command />
            <p className="tracking-widest text-xl font-bold font-geist">
              Hrishikesh
            </p>
          </div>
        </GlassSurface>
        <GlassSurface
          displace={15}
          distortionScale={-150}
          brightness={60}
          opacity={0.8}
          mixBlendMode="screen"
          backgroundOpacity={0.09}
          width={"32rem"}
          height={"fit-content"}
          borderRadius={50}
          className="rounded-full hidden lg:block overflow-visible"
        >
          <NavigationMenu>
            <NavigationMenuList className="gap-5">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/about">
                    <p>About</p>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/projects">
                    <p>Work</p>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="dark:bg-transparent">
                  More
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] z-100">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                          href="/"
                        >
                          <div className="mb-2 text-lg font-medium sm:mt-4">
                            World from my lens
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Beautifully designed components built with Tailwind
                            CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/about#experience" title="Experience">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/about#education" title="Education">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/Contact"
                      title="Hire Me"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ContactDrawer />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </GlassSurface>
      </div>
      <div className="hidden md:block">
        <ThemeTogglerButton
          variant={"ghost"}
          size={"lg"}
          direction={"rtl"}
          className="rounded-full bg-transparent border-none outline-none ring-0"
        />
      </div>
    </div>
  );
}

export default Navigation;
