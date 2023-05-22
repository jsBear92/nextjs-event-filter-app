'use client';

import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/dummy-data";
import { useParams } from "next/navigation";

export default function FilteredEventsPage() {
    const filterData = useParams();
    console.log(filterData);

    if(!filterData) {
        return <p className="m-auto text-center">Loading...</p>
    }

    const filteredYear = filterData.eventId;
    const filteredMonth = filterData.slug;

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth > 12 ||
        numMonth < 1
    ) {
        return <p>Invalid filter. Please adjust your values!</p>;
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return <p>No events found for the chosen filter!</p>;
    }

    return (
        <div>
            <EventList items={filteredEvents} />
        </div>
    );
}