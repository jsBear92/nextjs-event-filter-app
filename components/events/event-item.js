import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

export default function EventItem(props) {
    const { title, image, date, location, id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    });
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return (
        <li className="shadow rounded-md overflow-hidden bg-white m-4 flex flex-col md:flex-row gap-4">
            <Image className="w-full md:w-2/5 object-cover h-40 md:h-56" src={'/' + image} alt={title} width={250} height={160} />
            <div className="w-full md:w-3/5 py-0 px-4 md:p-0 text-center md:text-left">
                <div>
                    <h2 className="font-bold my-2 mx-0 md:my-4 md:mx-0">{title}</h2>
                    <div className="flex gap-2 items-center">
                        <span className="h-5 w-5 text-zinc-500"><DateIcon /></span>
                        <time className="text-zinc-500 font-bold">{humanReadableDate}</time>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="h-5 w-5 text-zinc-500"><AddressIcon /></span>
                        <address className="text-zinc-500 my-2 mx-0 whitespace-pre">{formattedAddress}</address>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-end p-4">
                    <Button className="block align-middle" link={exploreLink}>
                        <span>Explore Event</span>
                        <span className="ml-3 inline-flex justify-center items-stretch h-5 w-5"><ArrowRightIcon /></span>
                    </Button>
                </div>
            </div>
        </li>
    );
}