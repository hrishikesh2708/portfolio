import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Calendar, Send } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { openNewTab, socials, openEmail } from "@/utils/uitility";
import GradientText from "@/components/ui/GradientText";

const ContactDrawer = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid =
    name.trim() !== "" && isEmailValid(email) && message.trim() !== "";

  async function handleSend() {
    if (!isFormValid) return;
    setIsSending(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      const pacificTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Los_Angeles",
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: "hrishith27@gmail.com",
        time: pacificTime, // add Pacific time
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      toast.success("Message sent successfully! 🎉", {
        description: "I'll get back to you soon.",
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.", {
        description: "Please schedule a call, I'll get back to you.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="">
        <GradientText
          colors={["#F27121", "#E94057", "#8A2387", "#E94057", "#F27121"]}
          animationSpeed={5}
          showBorder={false}
          className=""
        >
          Connect
        </GradientText>

      </DrawerTrigger>
      <DrawerContent className="sm:w-sm md:w-lg mx-auto">
        <DrawerHeader className="gap-4">
          <DrawerTitle className="flex w-full gap-2 justify-center">
            <TooltipProvider>
              <div className="flex gap-2">
                {socials.map((social) => (
                  <Tooltip key={social.name}>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        ariaLabel={social.name}
                        onClick={() => openNewTab(social.url)}
                      >
                        {social.icon}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">{social.name}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </DrawerTitle>
          <DrawerDescription className="flex w-full flex-col gap-6">
            <Tabs defaultValue="quick_contact" className="gap-4">
              <TabsList className="w-full">
                <TabsTrigger value="quick_contact">Quick Contact</TabsTrigger>
                <TabsTrigger value="send_message">Send a Message</TabsTrigger>
              </TabsList>
              <TabsContent
                value="quick_contact"
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                <Card
                  className="p-0 gap-0 cursor-pointer"
                  onClick={() =>
                    openEmail(
                      "hrishikesh@gmail.com",
                      "Collaboration Inquiry",
                      "Hi Hrishikesh,"
                    )
                  }
                >
                  <CardHeader className="w-full flex flex-row justify-start items-center bg-linear-to-r to-transparent border-neutral-200 dark:border-neutral-700/30 from-blue-900/20 border-b py-4">
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
                <Card className="p-0 gap-0 cursor-pointer" onClick={() => {
                  setOpen(false);
                  navigate("/contact");
                }}>
                  <CardHeader className="w-full flex flex-row justify-start items-center bg-linear-to-r to-transparent border-neutral-200 dark:border-neutral-700/30 from-fuchsia-900/20 border-b py-4">
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
                      I’d love to hear from you! Whether you’re interested in
                      working together, have a question, or just want to say
                      hi—drop a message below and I’ll respond soon.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="email">Email</Label>
                        <TooltipProvider>
                          <Tooltip open={!isEmailValid(email) && email !== ""}>
                            <TooltipTrigger asChild>
                              <Input
                                id="email"
                                type="email"
                                placeholder="your.email@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={
                                  !isEmailValid(email) && email !== ""
                                    ? "border-destructive ring-destructive/20 dark:ring-destructive/40"
                                    : ""
                                }
                              />
                            </TooltipTrigger>
                            <TooltipContent
                              side="bottom"
                              className="text-xs text-red-500"
                            >
                              Invalid email. Use format: name@example.com
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Type your message here..."
                        className="min-h-30"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      onClick={handleSend}
                      disabled={!isFormValid || isSending}
                      className="w-full bg-linear-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500"
                    >
                      <Send className="mr-2" />
                      {isSending ? "Sending..." : "Send Message"}
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
  );
};

export default ContactDrawer;
