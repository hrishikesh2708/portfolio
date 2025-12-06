import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Tag, Clock, Calendar1, Globe } from "lucide-react";
import { getGMTOffset } from "@/components/utils/uitility";
import { formatTime, add30Minutes } from "./utils/timeUtils";

interface MeetingDetailsProps {
    date: Date;
    selectedTime: string | null;
    timezone: string;
    timezones: string[];
    onTimezoneChange: (tz: string) => void;
    timeFormat: "12" | "24";
}

/**
 * Meeting details sidebar with profile, duration, and timezone
 */
const MeetingDetails = ({
    date,
    selectedTime,
    timezone,
    timezones,
    onTimezoneChange,
    timeFormat,
}: MeetingDetailsProps) => {
    return (
        <div className="lg:border-r lg:border-neutral-200/20 px-2 py-4">
            <div className="flex flex-col gap-2 mb-8">
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

            <div>
                {date && selectedTime ? (
                    <div className="flex gap-2 p-2 justify-center">
                        <Calendar1 />
                        <div className="flex flex-col">
                            <span>
                                {date?.toLocaleDateString("en-US", {
                                    weekday: "long",
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </span>
                            <span>
                                {formatTime(selectedTime, timeFormat)} -{" "}
                                {formatTime(add30Minutes(selectedTime), timeFormat)}
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
                        src="public/Google-meet-icon.png"
                        className=""
                        height={24}
                        width={24}
                    ></img>
                    <p>Google Meet</p>
                </div>
                <div className="flex justify-center p-2">
                    <Select value={timezone} onValueChange={onTimezoneChange}>
                        <SelectTrigger className="w-[280px] flex items-center gap-2">
                            <Globe className="h-4 w-4" />
                            <SelectValue placeholder="Select timezone">
                                {timezone.replaceAll("_", " ")}
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
                                        {`${tz.replaceAll("_", " ")} ${getGMTOffset(tz)}`}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
};

export default MeetingDetails;
