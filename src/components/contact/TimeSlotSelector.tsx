import { Button } from "@/components/ui/button";
import { formatTime } from "@/utils/contact/timeUtils";

interface TimeSlotSelectorProps {
    date: Date;
    availableTimes: string[];
    selectedTime: string | null;
    onTimeSelect: (time: string) => void;
    timeFormat: "12" | "24";
    onToggle12Hr: () => void;
    onToggle24Hr: () => void;
}

/**
 * Time slot selection panel with format toggle
 */
const TimeSlotSelector = ({
    date,
    availableTimes,
    selectedTime,
    onTimeSelect,
    timeFormat,
    onToggle12Hr,
    onToggle24Hr,
}: TimeSlotSelectorProps) => {
    return (
        <div className="md:border-t-0 md:border-l border-t p-6">
            {/* Header row */}
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
                            className={`h-5 w-7 text-xs ${timeFormat === "12"
                                    ? "bg-primary text-primary-foreground"
                                    : ""
                                }`}
                            onClick={onToggle12Hr}
                        >
                            12hr
                        </Button>

                        <Button
                            variant="ghost"
                            className={`h-5 w-7 text-xs ${timeFormat === "24"
                                    ? "bg-primary text-primary-foreground"
                                    : ""
                                }`}
                            onClick={onToggle24Hr}
                        >
                            24hr
                        </Button>
                    </div>
                </div>
            </div>

            {/* Time slots */}
            <div className="no-scrollbar overflow-y-auto max-h-72 md:max-h-120 grid gap-2 px-4">
                {availableTimes.map((time) => (
                    <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        onClick={() => onTimeSelect(time)}
                        className="w-full shadow-none"
                    >
                        {formatTime(time, timeFormat)}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default TimeSlotSelector;
