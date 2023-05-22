import EventItem from "./event-item";

export default function EventList(props) {
    const { items } = props;

    return <ul className="w-11/12 max-w-2xl m-20">
        {items.map((event) => (
            <EventItem
                key={event.id}
                id={event.id}
                title={event.title}
                location={event.location}
                date={event.date}
                image={event.image}
            />
        ))}
    </ul>;
}