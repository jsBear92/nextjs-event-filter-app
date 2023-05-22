import Button from "../ui/button";

export default function ResultTitle(props) {
    const {date} = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    });

    return (
        <section className="my-8 m-auto w-11/12 max-w-80 text-center">
            <h1 className="my-4 m-auto text-xl font-bold text-gray-800">Events in {humanReadableDate}</h1>
            <Button link='/events'>Show all events</Button>
        </section>
    );
}