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
import { useEffect, useMemo, useState } from "react";
import { Globe, Calendar1 } from "lucide-react";

const Contact = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const timezones = useMemo(() => Intl.supportedValuesOf("timeZone"), []);
  const [timezone, setTimezone] = useState("America/Los_Angeles");
  const [selectedTime, setSelectedTime] = useState<string | null>("10:00");
  const [formState, setFormState] = useState<boolean>(false);
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  const [timeFormat, setTimeFormat] = useState("24"); // "12" or "24"

  // Confirmation form state (fields inside the confirmation/login card)
  const [confName, setConfName] = useState("");
  const [confEmail, setConfEmail] = useState("");
  const [confAbout, setConfAbout] = useState("");
  const [confNotes, setConfNotes] = useState("");

  // touched flags to show tooltips only after interaction
  const [touchedName, setTouchedName] = useState(false);
  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedAbout, setTouchedAbout] = useState(false);

  const timeSlots = Array.from({ length: 37 }, (_, i) => {
    const totalMinutes = i * 15;
    const hour = Math.floor(totalMinutes / 60) + 9;
    const minute = totalMinutes % 60;
    return `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
  });

  const handle12Hr = () => setTimeFormat("12");
  const handle24Hr = () => setTimeFormat("24");


  const formatTime = (time) => {
    // time is "HH:MM"
    let [h, m] = time.split(":").map(Number);

    if (timeFormat === "24") {
      return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
    }

    // 12-hour format
    const period = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${h}:${String(m).padStart(2, "0")} ${period}`;
  };

  const add30 = (time) => {
    if (!time) return "";

    let [h, m] = time.split(":").map(Number);

    m += 30;
    if (m >= 60) {
      m -= 60;
      h = (h + 1) % 24;
    }

    const hh = String(h).padStart(2, "0");
    const mm = String(m).padStart(2, "0");

    return `${hh}:${mm}`; // return raw 24h → formatter handles view
  };

  const isEmailValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid =
    name.trim() !== "" && isEmailValid(email) && message.trim() !== "";

  // Confirmation form validation
  const isConfNameValid = confName.trim() !== "";
  const isConfEmailValid = isEmailValid(confEmail);
  const isConfAboutValid = confAbout.trim() !== "";

  const isConfirmationFormValid =
    isConfNameValid && isConfEmailValid && isConfAboutValid;

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

  // Back button handler in confirmation form -> return to calendar card
  const handleBackFromConfirmation = () => {
    setFormState(false);
    // preserve previously selected date/time; do not reset them.
  };

  // Continue button on confirmation form -> print JSON of all data
  const handleConfirmationContinue = (e?: React.MouseEvent) => {
    e?.preventDefault();

    // gather data: confirmation form + calendar selection + timezone + selectedTime
    const payload = {
      confirmationForm: {
        name: confName,
        email: confEmail,
        about: confAbout,
        notes: confNotes,
      },
      calendar: {
        date: date ? date.toISOString() : null,
        time: selectedTime,
        timezone,
      },
    };

    console.log("Scheduling payload:", JSON.stringify(payload, null, 2));
    // keep UI on confirmation screen (no navigation change requested).
  };

  async function handleConfirmationContinue(e) {
  e.preventDefault();

  const startLocal = `${date.toISOString().split("T")[0]}T${selectedTime}:00`;
  const startUTC = new Date(startLocal).toISOString();

  const res = await fetch("https://api.calendly.com/scheduled_events", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_CALENDLY_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      event_type: import.meta.env.VITE_CALENDLY_EVENT_TYPE,
      invitee_email: confEmail,
      invitee_name: confName,
      start_time: startUTC,
      timezone,
      cancel_url: "",
      reschedule_url: "",
    }),
  });

  const data = await res.json();
  console.log("Calendly created:", data);
}


  useEffect(() => {
    async function loadAvailableDates() {
      const res = await fetch(
        "https://api.calendly.com/availability_schedules/YOUR_SCHEDULE_ID",
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_CALENDLY_TOKEN}`,
          },
        }
      );

      const data = await res.json();
      const blocks = data.resource.intervals || [];

      const dates = blocks.map((b) => new Date(b.start_time));
      setAvailableDates(dates);
    }

    loadAvailableDates();
  }, []);

  useEffect(() => {
    if (!date) return;

    async function loadTimes() {
      const startISO = date.toISOString().split("T")[0] + "T00:00:00Z";
      const endISO = date.toISOString().split("T")[0] + "T23:59:00Z";

      const url =
        `https://api.calendly.com/availability/event_type_available_times` +
        `?event_type=${import.meta.env.VITE_CALENDLY_EVENT_TYPE}` +
        `&start_time=${startISO}` +
        `&end_time=${endISO}`;

      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_CALENDLY_TOKEN}`,
        },
      });

      const data = await res.json();
      const slots = data.collection.map((t) =>
        new Date(t.start_time).toISOString().substring(11, 16)
      );

      setAvailableTimes(slots);
    }

    loadTimes();
  }, [date]);

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
                    {date && selectedTime ? (
                      <div className="flex gap-2 p-2 justify-center">
                        <Calendar1 />
                        <div className="flex flex-col">
                          <span className="">
                            {date?.toLocaleDateString("en-US", {
                              weekday: "long",
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                          <span className="">
                            {formatTime(selectedTime)} -{" "}
                            {formatTime(add30(selectedTime))}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}

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

                {formState ? (
                  <div>
                    <Card className="w-full">
                      <CardHeader>
                        <CardTitle>Login to your account</CardTitle>
                        <CardDescription>
                          Enter your email below to login to your account
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form>
                          <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                              <Label htmlFor="text">Your Name</Label>
                              <TooltipProvider>
                                <Tooltip
                                  open={!isConfNameValid && touchedName}
                                  onOpenChange={() => {}}
                                >
                                  <TooltipTrigger asChild>
                                    <Input
                                      id="name"
                                      type="text"
                                      placeholder=""
                                      required
                                      value={confName}
                                      onChange={(e) =>
                                        setConfName(e.target.value)
                                      }
                                      onBlur={() => setTouchedName(true)}
                                    />
                                  </TooltipTrigger>
                                  <TooltipContent
                                    side="bottom"
                                    className="text-xs text-red-500"
                                  >
                                    Name is required.
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="email">Email</Label>
                              <TooltipProvider>
                                <Tooltip
                                  open={!isConfEmailValid && touchedEmail}
                                  onOpenChange={() => {}}
                                >
                                  <TooltipTrigger asChild>
                                    <Input
                                      id="email"
                                      type="email"
                                      placeholder="m@example.com"
                                      required
                                      value={confEmail}
                                      onChange={(e) =>
                                        setConfEmail(e.target.value)
                                      }
                                      onBlur={() => setTouchedEmail(true)}
                                      className={
                                        !isConfEmailValid && touchedEmail
                                          ? "border-destructive ring-destructive/20 dark:ring-destructive/40"
                                          : ""
                                      }
                                    />
                                  </TooltipTrigger>
                                  <TooltipContent
                                    side="bottom"
                                    className="text-xs text-red-500"
                                  >
                                    Enter a valid email (name@example.com).
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="text">
                                What is this meeting about?
                              </Label>
                              <TooltipProvider>
                                <Tooltip
                                  open={!isConfAboutValid && touchedAbout}
                                  onOpenChange={() => {}}
                                >
                                  <TooltipTrigger asChild>
                                    <Input
                                      id="about"
                                      type="text"
                                      placeholder=""
                                      required
                                      value={confAbout}
                                      onChange={(e) =>
                                        setConfAbout(e.target.value)
                                      }
                                      onBlur={() => setTouchedAbout(true)}
                                    />
                                  </TooltipTrigger>
                                  <TooltipContent
                                    side="bottom"
                                    className="text-xs text-red-500"
                                  >
                                    This field is required.
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="text">Additional notes</Label>
                              <Textarea
                                id="notes"
                                placeholder="Please share anything that will help prepare for meeting"
                                value={confNotes}
                                onChange={(e) => setConfNotes(e.target.value)}
                              />
                            </div>
                          </div>
                        </form>
                      </CardContent>
                      <CardFooter className="flex-col gap-2 self-end-safe">
                        <CardDescription>
                          By proceeding, you agree to our <a>Terms</a> and{" "}
                          <a>Privacy Policy</a>
                        </CardDescription>
                        <div className="flex flex-row self-end-safe gap-2">
                          <Button
                            variant="outline"
                            className="w-fit"
                            onClick={handleBackFromConfirmation}
                          >
                            Back
                          </Button>
                          <Button
                            type="button"
                            className="w-fit"
                            onClick={handleConfirmationContinue}
                            disabled={!isConfirmationFormValid}
                          >
                            Continue
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                ) : (
                  <div className="lg:col-span-2">
                    <Card className="gap-0 p-0">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                          {/* Calendar */}
                          <div className="p-6 md:col-span-2">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              defaultMonth={date}
                              disabled={(day) => {
                                const d = day.toDateString();
                                return !availableDates.some(
                                  (x) => x.toDateString() === d
                                );
                              }}
                              showOutsideDays={false}
                              // modifiers={{ booked: bookedDates }}
                              // modifiersClassNames={{
                              //   booked: "[&>button]:line-through opacity-100",
                              // }}
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
                              <p className="align-middle">
                                {date?.toLocaleString("en-US", {
                                  weekday: "short",
                                })}
                                , {String(date?.getDate())}
                              </p>

                              <div className="justify-self-end">
                                <div className="w-fit bg-neutral-200/20 flex gap-1 justify-evenly px-1.5 py-1 rounded-md">
                                  <Button
                                    variant="ghost"
                                    className={`h-5 w-7 text-xs ${
                                      timeFormat === "12"
                                        ? "bg-primary text-primary-foreground"
                                        : ""
                                    }`}
                                    onClick={handle12Hr}
                                  >
                                    12hr
                                  </Button>

                                  <Button
                                    variant="ghost"
                                    className={`h-5 w-7 text-xs ${
                                      timeFormat === "24"
                                        ? "bg-primary text-primary-foreground"
                                        : ""
                                    }`}
                                    onClick={handle24Hr}
                                  >
                                    24hr
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div
                              className="no-scrollbar overflow-y-auto max-h-72
                    md:max-h-120  grid gap-2 px-4"
                            >
                              {availableTimes.map((time) => (
                                <Button
                                  key={time}
                                  variant={
                                    selectedTime === time
                                      ? "default"
                                      : "outline"
                                  }
                                  onClick={() => setSelectedTime(time)}
                                  className="w-full shadow-none"
                                >
                                  {formatTime(time)}
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
                              Your meeting will be booked for{" "}
                              <span className="font-medium">
                                {" "}
                                {date?.toLocaleDateString("en-US", {
                                  weekday: "long",
                                  day: "numeric",
                                  month: "long",
                                })}{" "}
                              </span>
                              at{" "}
                              <span className="font-medium">
                                {selectedTime}
                              </span>
                              .
                            </>
                          ) : (
                            <>Select a date and time for your meeting.</>
                          )}
                        </div>
                        <Button
                          disabled={!date || !selectedTime}
                          className="w-full md:ml-auto md:w-auto"
                          variant="outline"
                          onClick={() => {
                            // move to confirmation form and pre-fill confirmation fields if desired
                            setFormState(true);
                            // optional: prefill conf fields using main name/email/message if available
                            if (name && !confName) setConfName(name);
                            if (email && !confEmail) setConfEmail(email);
                            if (message && !confNotes) setConfNotes(message);
                          }}
                        >
                          Continue
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                )}
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
