export function CalculateAppointments(date, weeks) {
  date.setDate(date.getDate() + 7 * weeks);
  return date;
}