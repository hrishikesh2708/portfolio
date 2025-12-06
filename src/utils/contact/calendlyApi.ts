/**
 * Calendly API integration utilities
 */

interface CalendlySlot {
    start_time: string;
    status: string;
    invitees_remaining: number;
    scheduling_url: string;
}

interface CalendlyAvailabilityResponse {
    collection: CalendlySlot[];
}

/**
 * Fetch available time slots from Calendly
 * @param startTime - Start time in ISO format
 * @param endTime - End time in ISO format
 */
export const fetchCalendlyAvailability = async (
    startTime: string,
    endTime: string
): Promise<CalendlySlot[]> => {
    const url =
        `https://api.calendly.com/event_type_available_times` +
        `?event_type=${import.meta.env.VITE_CALENDLY_EVENT_TYPE}` +
        `&start_time=${startTime}` +
        `&end_time=${endTime}`;

    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_CALENDLY_TOKEN}`,
        },
    });

    const data: CalendlyAvailabilityResponse = await res.json();
    return data.collection;
};

/**
 * Fetch two weeks of availability from Calendly
 */
export const fetchTwoWeekAvailability = async (): Promise<CalendlySlot[]> => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const startISO = today.toISOString();

    const week1End = new Date();
    week1End.setDate(today.getDate() + 7);
    const week1EndISO = week1End.toISOString();

    const week2End = new Date();
    week2End.setDate(today.getDate() + 14);
    const week2EndISO = week2End.toISOString();

    const week1 = await fetchCalendlyAvailability(startISO, week1EndISO);
    const week2 = await fetchCalendlyAvailability(week1EndISO, week2EndISO);

    return [...week1, ...week2];
};

/**
 * Create a scheduled event in Calendly
 */
export const createCalendlyEvent = async (params: {
    email: string;
    name: string;
    startTime: string;
    timezone: string;
}): Promise<unknown> => {
    const res = await fetch("https://api.calendly.com/scheduled_events", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_CALENDLY_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            event_type: import.meta.env.VITE_CALENDLY_EVENT_TYPE,
            invitee_email: params.email,
            invitee_name: params.name,
            start_time: params.startTime,
            timezone: params.timezone,
            cancel_url: "",
            reschedule_url: "",
        }),
    });

    return res.json();
};
