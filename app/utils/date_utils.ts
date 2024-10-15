export function formatTime(date: Date): string {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    let result = ''
    if (hours > 0) result += `${hours}h `
    if (minutes > 0 || hours > 0) result += `${minutes}m `
    result += `${seconds}s`

    return result.trim()
}

export function convertMilliseconds(ms: number): string {
    const days = Math.floor(ms / (24 * 60 * 60 * 1000));
    const daysMs = ms % (24 * 60 * 60 * 1000);

    const hours = Math.floor(daysMs / (60 * 60 * 1000));
    const hoursMs = daysMs % (60 * 60 * 1000);

    const minutes = Math.floor(hoursMs / (60 * 1000));
    const minutesMs = hoursMs % (60 * 1000);

    const seconds = Math.floor(minutesMs / 1000);

    // Build the duration string dynamically based on which values are present
    const parts: string[] = [];

    if (days > 0) parts.push(`${days}d`);
    if (hours > 0 || days > 0) parts.push(`${hours}h`); // Include hours if there are days
    if (minutes > 0 || hours > 0 || days > 0) parts.push(`${minutes}m`); // Include minutes if there are hours or days
    if (seconds > 0 || minutes > 0 || hours > 0 || days > 0) parts.push(`${seconds}s`); // Always include seconds if non-zero

    return parts.join(' ');
}

// Example usage
const ms = 987654321; // Replace this with your milliseconds value
console.log(convertMilliseconds(ms));
