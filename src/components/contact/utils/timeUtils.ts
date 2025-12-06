/**
 * Time formatting and manipulation utilities
 */

/**
 * Format time string to 12hr or 24hr format
 * @param time - Time in "HH:MM" format
 * @param format - "12" or "24"
 */
export const formatTime = (time: string, format: "12" | "24"): string => {
    const [hRaw, mRaw] = time.split(":");
    const h = Number(hRaw);
    const m = Number(mRaw);

    if (isNaN(h) || isNaN(m)) return "";

    if (format === "24") {
        return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
    }

    const period = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 || 12;

    return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
};

/**
 * Add 30 minutes to a time string
 * @param time - Time in "HH:MM" format
 */
export const add30Minutes = (time: string): string => {
    if (!time) return "";

    const [hRaw, mRaw] = time.split(":");
    let h = Number(hRaw);
    let m = Number(mRaw);

    if (isNaN(h) || isNaN(m)) return "";

    m += 30;

    if (m >= 60) {
        m -= 60;
        h = (h + 1) % 24;
    }

    const hh = String(h).padStart(2, "0");
    const mm = String(m).padStart(2, "0");

    return `${hh}:${mm}`;
};

/**
 * Convert UTC time to a specific timezone
 * @param utcTime - UTC time string
 * @param tz - Timezone identifier
 */
export const utcToTimeZone = (utcTime: string, tz: string): string => {
    const date = new Date(utcTime);
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    return formatter.format(date);
};

/**
 * Combine date and time in a specific timezone to ISO string
 * @param date - Date object
 * @param time - Time in "HH:MM" format
 * @param tz - Timezone identifier
 */
export const combineDateTimeInTimeZone = (
    date: Date,
    time: string,
    tz: string
): string => {
    const [hours, minutes] = time.split(":").map(Number);

    const y = date.getFullYear();
    const m = date.getMonth();
    const d = date.getDate();

    const local = new Date(Date.UTC(y, m, d, hours, minutes));
    const offset =
        new Date(local.toLocaleString("en-US", { timeZone: tz })).getTime() -
        local.getTime();

    return new Date(local.getTime() - offset).toISOString();
};
