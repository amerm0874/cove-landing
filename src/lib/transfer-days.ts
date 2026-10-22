/** Calendar-day arithmetic, independent of DST and the browser's UTC offset. */
export function calendarDay(value: string): number | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split("-").map(Number);
  if (year < 1900 || year > 2100) return null;
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return null;
  return date.getTime() / 86_400_000;
}

export function localToday(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function transferDays(transfer: string, reference: string, test = "") {
  const start = calendarDay(transfer);
  const end = calendarDay(reference);
  if (start === null || end === null) return { error: "Enter valid transfer and counting dates." } as const;
  const testDay = test ? calendarDay(test) : null;
  if (test && testDay === null) return { error: "Enter a valid clinic test date, or leave it blank." } as const;
  if (testDay !== null && testDay < start) return { error: "Your clinic test date must be on or after your transfer date." } as const;
  return { days: end - start, untilTest: testDay === null ? null : testDay - end } as const;
}
