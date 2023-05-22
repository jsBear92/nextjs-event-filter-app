import Link from "next/link";

export default function MainHeader() {
    return (
        <header className="w-full flex justify-between items-baseline py-4 px-[10%] h-20 bg-gray-900">
            <div className="text-lg md:text-2xl text-white font-sans h-full flex justify-center items-center text-teal-200">
                <Link className="no-underline text-teal-200" href='/'>NextEvents</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link className="no-underline text-teal-500 text-lg md:text-xl" href='/events'>Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}