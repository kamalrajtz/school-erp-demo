import { addDays } from "date-fns";
import { generateId, toDateKey } from "./utils/dateHelpers";

const today = new Date();

export const SEED_EVENTS = [
    {
        id: generateId(),
        title: "Team Standup",
        description: "Daily sync with engineering team",
        date: toDateKey(today),
        startTime: "09:00",
        endTime: "09:30",
        colorIdx: 0,
    },
    {
        id: generateId(),
        title: "Product Review",
        description: "Q3 roadmap discussion",
        date: toDateKey(today),
        startTime: "11:00",
        endTime: "12:00",
        colorIdx: 2,
    },
    {
        id: generateId(),
        title: "Client Call",
        description: "Demo walkthrough for new client",
        date: toDateKey(addDays(today, 1)),
        startTime: "14:00",
        endTime: "15:00",
        colorIdx: 4,
    },
];
