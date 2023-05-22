'use client';

import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/dummy-data";
import { useParams } from "next/navigation";
import { Fragment } from "react";

export default function EventDetailPage() {
    const params = useParams();

    const eventId = params.eventId;
    const event = getEventById(eventId);

    if (!event) {
        return <p>No event found!</p>;
    }

    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}