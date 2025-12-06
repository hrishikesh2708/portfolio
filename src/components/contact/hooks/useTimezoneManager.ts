import { useState, useMemo } from "react";

/**
 * Hook for managing timezone selection and operations
 */
export const useTimezoneManager = () => {
    const timezones = useMemo(() => Intl.supportedValuesOf("timeZone"), []);
    const [timezone, setTimezone] = useState("America/Los_Angeles");

    return {
        timezones,
        timezone,
        setTimezone,
    };
};
