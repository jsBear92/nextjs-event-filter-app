export default function EventContent(props) {
    return (
        <section className="text-2xl text-gray-800 w-11/12 max-w-2xl m-auto mt-20 text-center">
            {props.children}
        </section>
    );
}