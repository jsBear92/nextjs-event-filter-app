import Image from "next/image";
import LogisticsItem from "./logistics-item";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";

export default function EventLogistics(props) {
    const { date, address, image, imageAlt } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const addressText = address.replace(', ', '\n');

    return (
        <section className="shadow-lg rounded-lg bg-gray-900 p-8 md:p-8 max-w-3xl w-2/5 m-2 md:m-1 md:m-auto m-auto text-green-300 flex justify-between gap-4 md:gap-12 flex-col md:flex-row items-center md:items-stretch">
            <div className="rounded-lg overflow-hidden border-4 border-solid border-white w-80 md:w-1/2 h-40">
                <Image className="object-cover w-80 h-40" src={`/${image}`} alt={imageAlt} width={400} height={400} />
            </div>
            <ul className="flex flex-col basis-3 gap-4 justify-center items-center md:items-start">
                <LogisticsItem icon={DateIcon}>
                    <time>{humanReadableDate}</time>
                </LogisticsItem>
                <LogisticsItem icon={AddressIcon}>
                    <address className="whitespace-pre">{addressText}</address>
                </LogisticsItem>
            </ul>
        </section>
    );
}