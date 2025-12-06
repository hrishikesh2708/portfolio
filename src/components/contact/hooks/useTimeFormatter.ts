import { useState } from "react";

/**
 * Hook for managing time formatting (12hr/24hr)
 */
export const useTimeFormatter = () => {
    const [timeFormat, setTimeFormat] = useState<"12" | "24">("24");

    const handle12Hr = () => setTimeFormat("12");
    const handle24Hr = () => setTimeFormat("24");

    return {
        timeFormat,
        handle12Hr,
        handle24Hr,
    };
};
