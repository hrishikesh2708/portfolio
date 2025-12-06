import { useState } from "react";
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

interface ConfirmationFormProps {
    onBack: () => void;
    onContinue: (data: {
        name: string;
        email: string;
        about: string;
        notes: string;
    }) => void;
    initialName?: string;
    initialEmail?: string;
    initialNotes?: string;
}

/**
 * Confirmation form for booking a meeting
 */
const ConfirmationForm = ({
    onBack,
    onContinue,
    initialName = "",
    initialEmail = "",
    initialNotes = "",
}: ConfirmationFormProps) => {
    const [confName, setConfName] = useState(initialName);
    const [confEmail, setConfEmail] = useState(initialEmail);
    const [confAbout, setConfAbout] = useState("");
    const [confNotes, setConfNotes] = useState(initialNotes);

    const [touchedName, setTouchedName] = useState(false);
    const [touchedEmail, setTouchedEmail] = useState(false);
    const [touchedAbout, setTouchedAbout] = useState(false);

    const isEmailValid = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isConfNameValid = confName.trim() !== "";
    const isConfEmailValid = isEmailValid(confEmail);
    const isConfAboutValid = confAbout.trim() !== "";

    const isConfirmationFormValid =
        isConfNameValid && isConfEmailValid && isConfAboutValid;

    const handleContinue = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (isConfirmationFormValid) {
            onContinue({
                name: confName,
                email: confEmail,
                about: confAbout,
                notes: confNotes,
            });
        }
    };

    return (
        <div className="lg:col-span-2">
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
                                        onOpenChange={() => { }}
                                    >
                                        <TooltipTrigger asChild>
                                            <Input
                                                id="name"
                                                type="text"
                                                placeholder=""
                                                required
                                                value={confName}
                                                onChange={(e) => setConfName(e.target.value)}
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
                                        onOpenChange={() => { }}
                                    >
                                        <TooltipTrigger asChild>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="m@example.com"
                                                required
                                                value={confEmail}
                                                onChange={(e) => setConfEmail(e.target.value)}
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
                                <Label htmlFor="text">What is this meeting about?</Label>
                                <TooltipProvider>
                                    <Tooltip
                                        open={!isConfAboutValid && touchedAbout}
                                        onOpenChange={() => { }}
                                    >
                                        <TooltipTrigger asChild>
                                            <Input
                                                id="about"
                                                type="text"
                                                placeholder=""
                                                required
                                                value={confAbout}
                                                onChange={(e) => setConfAbout(e.target.value)}
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
                        <Button variant="outline" className="w-fit" onClick={onBack}>
                            Back
                        </Button>
                        <Button
                            type="button"
                            className="w-fit"
                            onClick={handleContinue}
                            disabled={!isConfirmationFormValid}
                        >
                            Continue
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ConfirmationForm;
