import { format, isValid } from 'date-fns'
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/solid';

interface DateFormatterProps {
    date?: Date | string | number
}

export default function DateComponent({ date }: DateFormatterProps = {}) {
    const formatDate = (inputDate: Date | string | number | undefined): string => {
        try {
            const dateObject = inputDate ? new Date(inputDate) : new Date()

            if (!isValid(dateObject)) {
                throw new Error('Invalid date')
            }

            const formattedDate = format(dateObject, "EEE dd MMM, yyyy")
            const formattedTime = format(dateObject, "HH:mm")

            return `${formattedDate} ${formattedTime}`
        } catch (error) {
            console.error('Error formatting date:', error)
            return 'Invalid date'
        }
    }

    const formattedDateTime = formatDate(date)

    return (
        <div className="flex justify-center items-center space-x-2 text-xs">
            <CalendarIcon className="w-3 h-3" />
            <span>{formattedDateTime.split(' ').slice(0, -1).join(' ')}</span>
            <ClockIcon className="w-3 h-3 ml-2" />
            <span>{formattedDateTime.split(' ').pop()}</span>
        </div>
    )
}