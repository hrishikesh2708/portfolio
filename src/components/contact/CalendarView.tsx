import { Calendar } from "@/components/ui/calendar";

interface CalendarViewProps {
    date: Date;
    onDateSelect: (date: Date) => void;
    availableDates: Date[];
}

/**
 * Calendar display component for date selection
 */
const CalendarView = ({ date, onDateSelect, availableDates }: CalendarViewProps) => {
    return (
        <div className="p-6 md:col-span-2">
            <Calendar
                required={true}
                mode="single"
                selected={date}
                onSelect={onDateSelect}
                defaultMonth={date}
                disabled={(day) => {
                    const d = day.toDateString();
                    return !availableDates.some((x) => x.toDateString() === d);
                }}
                showOutsideDays={false}
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
    );
};

export default CalendarView;
