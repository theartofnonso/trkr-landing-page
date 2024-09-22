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