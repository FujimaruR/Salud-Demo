export const specialistFor = {
  general: ["ana"],
  cleaning: ["ana"],
  orthodontics: ["mateo"],
  restoration: ["ana"],
  children: ["sofia"],
  cosmetic: ["ana"],
};
export function upcomingDates(now = new Date()) {
  return Array.from({ length: 21 }, (_, i) => {
    const d = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + i + 1,
      12,
    );
    return [
      d.getFullYear(),
      String(d.getMonth() + 1).padStart(2, "0"),
      String(d.getDate()).padStart(2, "0"),
    ].join("-");
  });
}
export function availableSlots(date, doctor, dates = upcomingDates()) {
  if (!dates.includes(date) || !["ana", "mateo", "sofia"].includes(doctor))
    return [];
  const day = new Date(date + "T12:00:00").getDay();
  if (day === 0) return [];
  const times =
    day === 6
      ? ["09:00", "10:30"]
      : ["09:00", "10:30", "12:00", "15:30", "17:00"];
  return times.filter(
    (_, i) =>
      i !== (["ana", "mateo", "sofia"].indexOf(doctor) + day) % times.length,
  );
}
