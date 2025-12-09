import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

interface MessageFormProps {
    initialName?: string;
    initialEmail?: string;
    initialMessage?: string;
}

/**
 * Message sending form component
 */
const MessageForm = ({
    initialName = "",
    initialEmail = "",
    initialMessage = "",
}: MessageFormProps) => {
    const [name, setName] = useState(initialName);
    const [email, setEmail] = useState(initialEmail);
    const [message, setMessage] = useState(initialMessage);
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
        useEffect(() => {
            console.log("Message EmailJS ENV:", {
                serviceID,
                templateID,
                publicKey,
            });
        }, []);
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
                time: pacificTime,
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
        <Card>
            <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                    I'd love to hear from you! Whether you're interested in working
                    together, have a question, or just want to say hi—drop a message below
                    and I'll respond soon.
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
                                <TooltipContent side="bottom" className="text-xs text-red-500">
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
    );
};

export default MessageForm;
