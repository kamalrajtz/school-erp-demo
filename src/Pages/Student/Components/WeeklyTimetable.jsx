import { useMemo, useState } from "react";
import { addDays, format, isToday, startOfWeek } from "date-fns";

/**
 * WeeklyTimetable Component
 *
 * Props:
 * - days: string[]          — Column headers, e.g. ["Monday","Tuesday",...]
 * - timeSlots: { time: string; label: string }[]  — Row time ranges
 * - schedule: Record<string, Record<string, string>>
 *     Keys are time slot labels → day names → subject name
 *     e.g. { "09:00 AM - 09:45 AM": { Monday: "Mathematics", Tuesday: "English", ... } }
 * - subjectColors: Record<string, string>  — Optional subject → Tailwind bg class
 * - weekDate: Date          — Any date within the week to display (defaults to today)
 */

const DEFAULT_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const DEFAULT_TIME_SLOTS = [
    { time: "09:00 AM -\n09:45 AM", label: "09:00 AM - 09:45 AM" },
    { time: "09:45 AM -\n10:30 AM", label: "09:45 AM - 10:30 AM" },
    { time: "10:30 AM -\n11:15 AM", label: "10:30 AM - 11:15 AM" },
    { time: "11:15 AM -\n12:00 PM", label: "11:15 AM - 12:00 PM" },
];

const DEFAULT_SCHEDULE = {
    "09:00 AM - 09:45 AM": {
        Monday: "Mathematics",
        Tuesday: "English",
        Wednesday: "Social",
        Thursday: "Tamil",
        Friday: "Science",
        Saturday: "Mathematics",
    },
    "09:45 AM - 10:30 AM": {
        Monday: "English",
        Tuesday: "Science",
        Wednesday: "Mathematics",
        Thursday: "English",
        Friday: "Tamil",
        Saturday: "Social",
    },
    "10:30 AM - 11:15 AM": {
        Monday: "Mathematics",
        Tuesday: "English",
        Wednesday: "Social",
        Thursday: "Tamil",
        Friday: "Science",
        Saturday: "Mathematics",
    },
    "11:15 AM - 12:00 PM": {
        Monday: "English",
        Tuesday: "Science",
        Wednesday: "Mathematics",
        Thursday: "English",
        Friday: "Tamil",
        Saturday: "Social",
    },
};

// Soft pastel subject color map — extend or override via props
const DEFAULT_SUBJECT_COLORS = {
    Mathematics: "bg-blue-50 text-blue-700",
    English: "bg-rose-50 text-rose-700",
    Social: "bg-amber-50 text-amber-700",
    Tamil: "bg-emerald-50 text-emerald-700",
    Science: "bg-purple-50 text-purple-700",
};

export default function WeeklyTimetable({
    days = DEFAULT_DAYS,
    timeSlots = DEFAULT_TIME_SLOTS,
    schedule = DEFAULT_SCHEDULE,
    subjectColors = DEFAULT_SUBJECT_COLORS,
    weekDate = new Date(),
}) {
    const [hoveredCell, setHoveredCell] = useState(null);

    // Map each day column to its actual date for the week containing `weekDate`.
    // Week starts on Monday (weekStartsOn: 1) to match the default Mon–Sat columns.
    const dayDates = useMemo(() => {
        const weekStart = startOfWeek(weekDate, { weekStartsOn: 1 });
        return days.map((_, index) => addDays(weekStart, index));
    }, [days, weekDate]);

    const getSubjectStyle = (subject) =>
        subjectColors[subject] ?? "bg-gray-50 text-gray-700";

    return (
        <div className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden font-sans">
            {/* Timetable Grid */}
            <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] border-collapse">
                    <thead>
                        <tr>
                            {/* Empty top-left corner */}
                            <th className="w-[140px] border-r border-b border-gray-200" />
                            {days.map((day, index) => {
                                const date = dayDates[index];
                                const today = isToday(date);
                                return (
                                    <th
                                        key={day}
                                        className="border-r border-b border-gray-200 py-4 px-3 text-center last:border-r-0"
                                    >
                                        <div className="flex flex-col items-center gap-1">
                                            <span
                                                className={`text-sm font-semibold tracking-wide ${today ? "text-indigo-600" : "text-gray-700"
                                                    }`}
                                            >
                                                {day}
                                            </span>
                                            <span
                                                className={`text-xs font-medium ${today
                                                    ? "rounded-full bg-indigo-500 px-2.5 py-0.5 text-white"
                                                    : "text-gray-400"
                                                    }`}
                                            >
                                                {format(date, "d MMM")}
                                            </span>
                                        </div>
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>

                    <tbody>
                        {timeSlots.map((slot, rowIdx) => (
                            <tr key={slot.label} className="group">
                                {/* Time Column */}
                                <td className="border-r border-b border-gray-200 px-4 py-6 text-center align-middle last:border-b-0">
                                    <span className="text-xs font-semibold text-indigo-500 leading-relaxed whitespace-pre-line">
                                        {slot.time}
                                    </span>
                                </td>

                                {/* Subject Cells */}
                                {days.map((day, colIdx) => {
                                    const subject = schedule[slot.label]?.[day] ?? "";
                                    const cellKey = `${rowIdx}-${colIdx}`;
                                    const isHovered = hoveredCell === cellKey;

                                    return (
                                        <td
                                            key={day}
                                            className="border-r border-b border-gray-200 p-2 text-center align-middle last:border-r-0"
                                            onMouseEnter={() => setHoveredCell(cellKey)}
                                            onMouseLeave={() => setHoveredCell(null)}
                                        >
                                            {subject ? (
                                                <div
                                                    className={`
                            inline-flex items-center justify-center
                            w-full py-3 px-2 rounded-lg
                            text-sm font-medium
                            transition-all duration-200
                            ${getSubjectStyle(subject)}
                            ${isHovered ? "shadow-sm scale-[1.03]" : ""}
                          `}
                                                >
                                                    {subject}
                                                </div>
                                            ) : (
                                                <span className="text-gray-300 text-xs">—</span>
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}