import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Tag, Clock } from "lucide-react";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { getGMTOffset, openNewTab, socials } from "./utils/uitility";
import { useMemo, useState } from "react";
import { Globe } from "lucide-react";
import { Switch } from "@/components/ui/switch";
const Contact = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
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

  const [selectedTime, setSelectedTime] = useState<string | null>("10:00");
  const timeSlots = Array.from({ length: 37 }, (_, i) => {
    const totalMinutes = i * 15;
    const hour = Math.floor(totalMinutes / 60) + 9;
    const minute = totalMinutes % 60;
    return `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
  });

  const bookedDates = Array.from(
    { length: 4 },
    (_, i) => new Date(2025, 10, 15 + i)
  );
  const timezones = useMemo(() => Intl.supportedValuesOf("timeZone"), []);
  const [timezone, setTimezone] = useState("America/Los_Angeles");
  const [selected, setSelected] = useState("left");
  return (
    <div>
      <div>
        <TooltipProvider>
          <div className="flex gap-2">
            {socials.map((social) => (
              <Tooltip key={social.name}>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
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
      </div>
      <div className="flex w-full flex-col gap-6">
        <Tabs defaultValue="quick_contact" className="gap-4">
          <TabsList className="mx-auto">
            <TabsTrigger value="quick_contact">Quick Contact</TabsTrigger>
            <TabsTrigger value="send_message">Send a Message</TabsTrigger>
          </TabsList>
          <TabsContent value="quick_contact" className="">
            <Card className="">
              <CardContent className="w-full grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:border-r lg:border-neutral-200/20 px-2 py-4">
                  <div className=" flex flex-col gap-2 mb-8">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      className="inline-block size-24 lg:size-36 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10 self-center"
                    />
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight self-center text-muted-foreground">
                      Hrishikesh Thakur
                    </h4>
                    <h4 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 self-center">
                      30-minute meeting
                    </h4>
                  </div>
                  <div className="">
                    <div className="flex gap-2 p-2 justify-center">
                      <Tag />
                      <p>Requires Confirmation</p>
                    </div>
                    <div className="flex gap-2 p-2 justify-center">
                      <Clock />
                      <p>30 minutes</p>
                    </div>
                    <div className="flex gap-2 p-2 justify-center">
                      <img
                        src="./public/asset/Google-meet-icon.png"
                        className=""
                        height={24}
                        width={24}
                      ></img>
                      <p>Google Meet</p>
                    </div>
                    <div className="flex justify-center p-2">
                      <Select value={timezone} onValueChange={setTimezone}>
                        <SelectTrigger className="w-[280px] flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          <SelectValue placeholder="Select timezone">
                            {timezone.replaceAll("_", " ")}{" "}
                            {/* Only city/region in trigger */}
                          </SelectValue>
                        </SelectTrigger>

                        <SelectContent
                          side="bottom"
                          sideOffset={4}
                          className="max-h-40 overflow-y-auto"
                        >
                          <SelectGroup>
                            <SelectLabel>Timezones</SelectLabel>
                            {timezones.map((tz) => (
                              <SelectItem key={tz} value={tz}>
                                {`${tz.replaceAll("_", " ")} ${getGMTOffset(
                                  tz
                                )}`}{" "}
                                {/* Full label with GMT in dropdown */}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <Card className="gap-0 p-0">
                    {/* <CardContent className="relative p-0 md:pr-48">
                      <div className="p-6">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          defaultMonth={date}
                          disabled={bookedDates}
                          showOutsideDays={false}
                          modifiers={{
                            booked: bookedDates,
                          }}
                          modifiersClassNames={{
                            booked: "[&>button]:line-through opacity-100",
                          }}
                          className="bg-transparent p-0 [--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
                          formatters={{
                            formatWeekdayName: (date) => {
                              return date.toLocaleString("en-US", {
                                weekday: "short",
                              });
                            },
                          }}
                        />
                      </div>
                      <div className="no-scrollbar inset-y-0 right-0 flex max-h-72 w-full scroll-pb-6 flex-col gap-4 overflow-y-auto border-t p-6 md:absolute md:max-h-none md:w-48 md:border-t-0 md:border-l">
                        <div className="grid gap-2">
                          <div className="grid grid-cols-2 gap-2 justify-end">
                            <p>
                              {date?.toLocaleString("en-US", {
                                weekday: "short",
                              })}
                              , {String(date?.getDate())}
                            </p>
                            <div className="w-full bg-neutral-200/20 flex gap-1 justify-evenly px-1.5 py-1 rounded-md">
                              <Button
                                variant={"ghost"}
                                className={` h-5 w-7 text-xs ${
                                  selected === "left"
                                    ? "bg-primary text-primary-foreground"
                                    : ""
                                }`}
                                onClick={() => setSelected("left")}
                              >
                                12hr
                              </Button>

                              <Button
                                variant={"ghost"}
                                className={` h-5 w-7  ${
                                  selected === "right"
                                    ? "bg-primary text-primary-foreground"
                                    : ""
                                }`}
                                onClick={() => setSelected("right")}
                              >
                                24hr
                              </Button>
                            </div>
                          </div>
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              variant={
                                selectedTime === time ? "default" : "outline"
                              }
                              onClick={() => setSelectedTime(time)}
                              className="w-full shadow-none"
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </CardContent> */}
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        {/* Calendar */}
                        <div className="p-6 md:col-span-2">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            defaultMonth={date}
                            disabled={bookedDates}
                            showOutsideDays={false}
                            modifiers={{ booked: bookedDates }}
                            modifiersClassNames={{
                              booked: "[&>button]:line-through opacity-100",
                            }}
                            className="bg-transparent p-0 [--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)] w-full"
                            formatters={{
                              formatWeekdayName: (date) => {
                                return date.toLocaleString("en-US", {
                                  weekday: "short",
                                });
                              },
                            }}
                          />
                        </div>

                        {/* Right panel */}
                        <div className="md:border-t-0 md:border-l border-t p-6">
                          {/* Your added header row */}
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            <p>
                              {date?.toLocaleString("en-US", {
                                weekday: "short",
                              })}
                              , {String(date?.getDate())}
                            </p>

                            <div className="w-full bg-neutral-200/20 flex gap-1 justify-evenly px-1.5 py-1 rounded-md">
                              <Button
                                variant="ghost"
                                className={`h-5 w-7 text-xs ${
                                  selected === "left"
                                    ? "bg-primary text-primary-foreground"
                                    : ""
                                }`}
                                onClick={() => setSelected("left")}
                              >
                                12hr
                              </Button>

                              <Button
                                variant="ghost"
                                className={`h-5 w-7 text-xs ${
                                  selected === "right"
                                    ? "bg-primary text-primary-foreground"
                                    : ""
                                }`}
                                onClick={() => setSelected("right")}
                              >
                                24hr
                              </Button>
                            </div>
                          </div>
                          <div
                            className="no-scrollbar overflow-y-auto max-h-72
                    md:max-h-120  grid gap-2 px-4"
                          >
                            {timeSlots.map((time) => (
                              <Button
                                key={time}
                                variant={
                                  selectedTime === time ? "default" : "outline"
                                }
                                onClick={() => setSelectedTime(time)}
                                className="w-full shadow-none"
                              >
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="flex flex-col gap-4 border-t px-6 !py-5 md:flex-row">
                      <div className="text-sm">
                        {date && selectedTime ? (
                          <>
                            Your meeting is booked for{" "}
                            <span className="font-medium">
                              {" "}
                              {date?.toLocaleDateString("en-US", {
                                weekday: "long",
                                day: "numeric",
                                month: "long",
                              })}{" "}
                            </span>
                            at{" "}
                            <span className="font-medium">{selectedTime}</span>.
                          </>
                        ) : (
                          <>Select a date and time for your meeting.</>
                        )}
                      </div>
                      <Button
                        disabled={!date || !selectedTime}
                        className="w-full md:ml-auto md:w-auto"
                        variant="outline"
                      >
                        Continue
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="send_message">
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  I’d love to hear from you! Whether you’re interested in
                  working together, have a question, or just want to say hi—drop
                  a message below and I’ll respond soon.
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
      </div>
    </div>
  );
};

export default Contact;
