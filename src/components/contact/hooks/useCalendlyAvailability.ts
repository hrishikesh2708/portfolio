import { useState, useEffect } from "react";
import { fetchTwoWeekAvailability } from "../utils/calendlyApi";
import { utcToTimeZone } from "../utils/timeUtils";

interface CalendlySlot {
    start_time: string;
    status: string;
    invitees_remaining: number;
    scheduling_url: string;
}

/**
 * Hook for managing Calendly availability data
 */
export const useCalendlyAvailability = (timezone: string) => {
    const [allAvailability, setAllAvailability] = useState<CalendlySlot[]>([]);
    const [availableDates, setAvailableDates] = useState<Date[]>([]);
    const [availableTimes, setAvailableTimes] = useState<string[]>([]);
    const [date, setDate] = useState<Date>(() => {
        const d = new Date();
        d.setDate(d.getDate() + 2);
        return d;
    });
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    // Load two weeks of availability on mount
    useEffect(() => {
        fetchTwoWeekAvailability().then((slots) => {
            setAllAvailability(slots);
        });
    }, []);

    // Extract available dates from slots
    useEffect(() => {
        if (!allAvailability.length) return;

        const dates = Array.from(
            new Set(
                allAvailability.map((slot) => new Date(slot.start_time).toDateString())
            )
        ).map((d) => new Date(d));

        setAvailableDates(dates);

        // Preselect current + 2 days if available
        const defaultDate = new Date();
        defaultDate.setDate(defaultDate.getDate() + 2);

        const found = dates.find(
            (d) => d.toDateString() === defaultDate.toDateString()
        );
        if (found) setDate(found);
    }, [allAvailability]);

    // Filter times for selected date and timezone
    useEffect(() => {
        if (!date || allAvailability.length === 0) return;

        const times: string[] = allAvailability
            .filter((slot) => {
                const slotDateInTZ = new Date(slot.start_time).toLocaleDateString(
                    "en-US",
                    { timeZone: timezone }
                );
                return (
                    slotDateInTZ ===
                    date.toLocaleDateString("en-US", { timeZone: timezone })
                );
            })
            .map((slot) => utcToTimeZone(slot.start_time, timezone));

        setAvailableTimes(times);
    }, [date, allAvailability, timezone]);

    return {
        allAvailability,
        availableDates,
        availableTimes,
        date,
        setDate,
        selectedTime,
        setSelectedTime,
    };
};
