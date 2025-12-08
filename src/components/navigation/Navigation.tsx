import { Command } from "lucide-react";
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
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild className="bg-muted rounded-xl px-4 py-2">
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
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const logoSrc = currentTheme === "dark" ? "/logo-dark.png" : "/logo-light.png";

  return (
    <div className="flex flex-row items-center justify-center md:justify-between px-6 align-middle">
      <div className="hidden md:block">
        <img src={logoSrc} alt="logo" height={50} width={50} />
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
                      <NavigationMenuLink asChild className="group">
                        <a
                          className="group relative overflow-hidden from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                          href="/"
                        >
                          {/* Background Image */}
                          <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style={{ backgroundImage: "url('/globe.png')" }}
                          ></div>

                          {/* Dark overlay */}
                          <div className="absolute inset-0 bg-black/70 transition-opacity duration-500 group-hover:opacity-80"></div>

                          <div className="mb-2 text-lg font-medium sm:mt-4 translate-y-1 transition-all duration-300 group-hover:translate-y-0 text-neutral-100">
                            Through My Lens
                          </div>

                          <p
                            className="text-neutral-50 text-sm leading-tight opacity-0 translate-y-2 max-h-0 overflow-hidden transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-20">
                            Glimpses of places and moods I capture.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/about#experience" title="Experience">
                      A snapshot of my work and impact.
                    </ListItem>
                    <ListItem href="/about#education" title="Education">
                      The academic roots of my skills.
                    </ListItem>
                    <ListItem
                      href="/Contact"
                      title="Hire Me"
                    >
                      Let's make your vision come alive.
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
