'use client';

import EventList from "@/components/events/event-list";
import ResultTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/dummy-data";
import { useParams } from "next/navigation";
import { Fragment } from "react";

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
        return (
            <Fragment>
                <ErrorAlert>
                    <p>Invalid filter. Please adjust your values!</p>
                </ErrorAlert>
                <div className="m-auto text-center">
                    <Button  link="/events">Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>No events found for the chosen filter!</p>
                </ErrorAlert>
                <div className="m-auto text-center">
                    <Button  link="/events">Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <Fragment>
            <ResultTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    );
}