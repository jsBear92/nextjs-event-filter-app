export default function EventSummary(props) {
    const { title } = props;

    return (
        <section className="w-full h-[20vh] bg-emerald-500 bg-gradient-to-bl">
            <h1 className="m-0 pt-12 text-4xl md:text-5xl text-center text-white">{title}</h1>
        </section>
    );
}