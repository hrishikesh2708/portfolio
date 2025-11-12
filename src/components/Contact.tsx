import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import {
  Github,
  Linkedin,
  Globe,
  Send,
  Tag,
  Clock,
} from "lucide-react";
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
import React from "react";

const Contact = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div>
      <div>
        <Button variant="outline" size="icon" className="rounded-full">
          <Linkedin />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <Github />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <Globe />
        </Button>
      </div>
      <div className="flex w-full flex-col gap-6">
        <Tabs defaultValue="quick_contact" className="gap-4">
          <TabsList className="mx-auto">
            <TabsTrigger value="quick_contact">Quick Contact</TabsTrigger>
            <TabsTrigger value="send_message">Send a Message</TabsTrigger>
          </TabsList>
          <TabsContent value="quick_contact" className="">
            <Card className="">
              <CardContent className="w-full grid grid-cols-3 gap-2">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className="inline-block size-24 rounded-full ring-2 ring-gray-900 outline -outline-offset-1 outline-white/10"
                  />
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Hrishikesh Thakur
                  </h4>
                  <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    30 Minutes Meeting
                  </h2>
                  <div className="flex gap-2 p-2">
                    <Tag />
                    <p>Requires Confirmation</p>
                  </div>
                  <div className="flex gap-2 p-2">
                    <Clock />
                    <p>30 Minutes</p>
                  </div>
                  <div className="flex gap-2 p-2">
                    <img
                      src="./public/asset/Google-meet-icon.png"
                      className=""
                      height={24}
                      width={24}
                    ></img>
                    <p>Google Meet</p>
                  </div>
                  <NativeSelect>
                    <NativeSelectOption value="">
                      Select status
                    </NativeSelectOption>
                    <NativeSelectOption value="todo">Todo</NativeSelectOption>
                    <NativeSelectOption value="in-progress">
                      In Progress
                    </NativeSelectOption>
                    <NativeSelectOption value="done">Done</NativeSelectOption>
                    <NativeSelectOption value="cancelled">
                      Cancelled
                    </NativeSelectOption>
                  </NativeSelect>
                </div>

                <div>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className=""
                  />
                </div>
                <div>
                    <div>
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Hrishikesh Thakur
                  </h4>

                    </div>

                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="send_message">
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  I'd love to hear from you! Whether you're interested in
                  working together, have a question, or just want to say hi—drop
                  a message below and I'll respond soon.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="grid gap-3">
                    <Label htmlFor="tabs-message-name">Name</Label>
                    <Input
                      id="tabs-message-name"
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="tabs-message-email">Email</Label>
                    <Input
                      id="tabs-message-email"
                      type="email"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-message-message">Message</Label>
                  <Textarea
                    id="tabs-message-message"
                    placeholder="Type your message here..."
                    className="min-h-30"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 group relative w-full overflow-hidden bg-linear-to-r from-blue-600 to-indigo-600 font-normal text-white transition-all duration-300 hover:from-blue-500 hover:to-indigo-500">
                  <Send />
                  Send Message
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
