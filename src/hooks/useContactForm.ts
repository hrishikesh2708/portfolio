import { useState } from "react";
import { toast } from "sonner";

interface UseContactFormReturn {
    name: string;
    setName: (name: string) => void;
    email: string;
    setEmail: (email: string) => void;
    message: string;
    setMessage: (message: string) => void;
    isSending: boolean;
    handleSend: () => Promise<boolean>;
    isFormValid: boolean;
    isEmailValid: (email: string) => boolean;
}

export function useContactForm(initialValues?: {
    name?: string;
    email?: string;
    message?: string;
}): UseContactFormReturn {
    const [name, setName] = useState(initialValues?.name || "");
    const [email, setEmail] = useState(initialValues?.email || "");
    const [message, setMessage] = useState(initialValues?.message || "");
    const [isSending, setIsSending] = useState(false);

    const isEmailValid = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isFormValid =
        name.trim() !== "" && isEmailValid(email) && message.trim() !== "";

    const handleSend = async (): Promise<boolean> => {
        if (!isFormValid) return false;
        setIsSending(true);

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

            const response = await fetch("/api/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    time: pacificTime,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            toast.success("Message sent successfully! 🎉", {
                description: "I'll get back to you soon.",
            });

            setName("");
            setEmail("");
            setMessage("");
            return true;
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message.", {
                description: "Please schedule a call, I'll get back to you.",
            });
            return false;
        } finally {
            setIsSending(false);
        }
    };

    return {
        name,
        setName,
        email,
        setEmail,
        message,
        setMessage,
        isSending,
        handleSend,
        isFormValid,
        isEmailValid,
    };
}
