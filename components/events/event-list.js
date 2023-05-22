import EventItem from "./event-item";

export default function EventList(props) {
    const { items } = props;

    return <ul className="w-11/12 m-20 flex flex-col justify-center items-center">
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