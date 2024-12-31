export const formatTimeForZone = (date: Date, timezone: string) => {
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: timezone,
  };

  const timeString = date.toLocaleTimeString('en-US', options);
  const [time, period] = timeString.split(' ');
  const [hours, minutes, seconds] = time.split(':');

  return {
    hours,
    minutes,
    seconds,
    period,
  };
};