/* eslint-disable react-refresh/only-export-components */
export * from "../data/socials";
export * from "../data/techStack";
export * from "../data/projects";
export * from "../data/experience";

export const openNewTab = (url: string) => {
  window.open(url, "_blank");
};

export function openEmail(to: string, subject = "", body = ""): void {
  try {
    const mailto = `mailto:${encodeURIComponent(
      to
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const opened = window.open(mailto, "_self");

    // If no mail client is configured or blocked by browser
    if (!opened) {
      alert(`No mail app detected.\nPlease email manually at: ${to}`);
    }
  } catch {
    alert(`No mail app detected.\nPlease email manually at: ${to}`);
  }
}

// Helper to compute GMT offset for a timezone
export const getGMTOffset = (tz: string) => {
  const now = new Date();
  const tzDate = new Date(now.toLocaleString("en-US", { timeZone: tz }));
  const offsetMinutes = -(tzDate.getTimezoneOffset() - now.getTimezoneOffset());
  const offsetHours = Math.floor(offsetMinutes / 60);
  const minutes = Math.abs(offsetMinutes % 60);
  const sign = offsetHours >= 0 ? "+" : "-";
  return `GMT ${sign}${String(Math.abs(offsetHours)).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;
};
