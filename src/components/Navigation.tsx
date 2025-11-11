import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';
import { ThemeDropdown } from '@/components/ThemeDropdown';

import {
  Github,
  Linkedin,
  Globe,
  Mail,
  Calendar,
  Send,
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { useIsMobile } from '@/hooks/use-mobile';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Skills',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Project',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: '',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
function Navigation() {
  return (
    <>
      <div className="grid grid-cols-12 gap-2 place-items-center">
        <Globe />
        {/* <NavigationMenu viewport={isMobile}> */}
        <NavigationMenu
          viewport={true}
          className="col-span-10  rounded-full px-4 py-1 border-1 dark:border-neutral-300/30 dark:bg-neutral-300/20 backdrop-blur-[2px]"
        >
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <p>Home</p>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <p>About</p>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <p>Work</p>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>More</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                        href="/"
                      >
                        <div className="mb-2 text-lg font-medium sm:mt-4">
                          shadcn/ui
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Beautifully designed components built with Tailwind
                          CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Drawer>
                <DrawerTrigger>Connect</DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader className="gap-4">
                    <DrawerTitle className="flex w-full gap-2 justify-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Linkedin />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Github />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Globe />
                      </Button>
                    </DrawerTitle>
                    <DrawerDescription className="flex w-full flex-col gap-6">
                      <Tabs defaultValue="quick_contact" className="gap-4">
                        <TabsList className="w-full">
                          <TabsTrigger value="quick_contact">
                            Quick Contact
                          </TabsTrigger>
                          <TabsTrigger value="send_message">
                            Send a Message
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent
                          value="quick_contact"
                          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                        >
                          <Card className="p-0 gap-0">
                            <CardHeader className="w-full flex flex-row justify-start items-center bg-gradient-to-r to-transparent border-neutral-200 dark:border-neutral-700/30 from-blue-900/20 border-b-1 py-4">
                              <Mail color="#2b7fff" size={32} />
                              <CardTitle className="text-lg font-semibold">
                                Email
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="w-full text-left py-4">
                              <p className="text-sm leading-none font-medium mb-2">
                                hrishith27@gmail.com
                              </p>
                              <p className="text-muted-foreground text-sm">
                                Send me an email directly.
                              </p>
                            </CardContent>
                          </Card>
                          <Card className="p-0 gap-0">
                            <CardHeader className="w-full flex flex-row justify-start items-center bg-gradient-to-r to-transparent border-neutral-200 dark:border-neutral-700/30 from-fuchsia-900/20 border-b-1 py-4">
                              <Calendar color="#e12afb" size={32} />
                              <CardTitle className="text-lg font-semibold">
                                Schedule Call
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="w-full text-left py-4">
                              <p className="text-sm leading-none font-medium mb-2">
                                Schedule a time slot.
                              </p>
                              <p className="text-muted-foreground text-sm">
                                Book a call on my calendar.
                              </p>
                            </CardContent>
                          </Card>
                        </TabsContent>

                        <TabsContent value="send_message">
                          <Card>
                            <CardHeader>
                              <CardTitle>Send a Message</CardTitle>
                              <CardDescription>
                                I’d love to hear from you! Whether you’re
                                interested in working together, have a question,
                                or just want to say hi—drop a message below and
                                I’ll respond soon.
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="grid gap-3">
                                  <Label htmlFor="tabs-message-name">
                                    Name
                                  </Label>
                                  <Input
                                    id="tabs-message-name"
                                    type="text"
                                    placeholder="Your Name"
                                  />
                                </div>
                                <div className="grid gap-3">
                                  <Label htmlFor="tabs-message-email">
                                    Email
                                  </Label>
                                  <Input
                                    id="tabs-message-email"
                                    type="email"
                                    placeholder="your.email@example.com"
                                  />
                                </div>
                              </div>
                              <div className="grid gap-3">
                                <Label htmlFor="tabs-message-message">
                                  Message
                                </Label>
                                <Textarea
                                  id="tabs-message-message"
                                  placeholder="Type your message here..."
                                  className="min-h-30"
                                />
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Button className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 group relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 font-normal text-white transition-all duration-300 hover:from-blue-500 hover:to-indigo-500 items-center">
                                <Send />
                                Send Message
                              </Button>
                            </CardFooter>
                          </Card>
                        </TabsContent>
                      </Tabs>
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Alert className="flex items-center justify-center border-green-400/20 bg-green-400/10 p-2.5 text-center dark:border-green-900/30 dark:bg-green-900/10">
                      <div className="relative mr-2 flex h-3 w-3 items-center justify-center">
                        <div className="h-2 w-2 bg-green-400 dark:bg-green-500 rounded-full"></div>
                        <div className="absolute h-3 w-3 animate-ping rounded-full bg-green-600 opacity-75 dark:bg-green-500"></div>
                      </div>
                      <AlertTitle className=" text-green-400 dark:text-green-500">
                        Currently available for new opportunities
                      </AlertTitle>
                    </Alert>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeDropdown />
      </div>
    </>
  );
}

export default Navigation;
