import Link from "next/link";

export default function Button(props) {
    if(props.link) {
        return (
            <Link className="no-underline cursor-pointer font-inherit bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-500 border border-solid border-emerald-400 hover:border-emerald-500 active:border-emerald-500 rounded-md text-teal-100 py-2 px-6 align-center shadow-md" href={props.link}>
                {props.children}
            </Link>
        );
    }

    return (
    <button onClick={props.onClick} className="no-underline cursor-pointer font-inherit bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-500 border border-solid border-emerald-400 hover:border-emerald-500 active:border-emerald-500 rounded-md text-teal-100 py-2 px-6 align-center shadow-md">
        {props.children}
    </button>
    );
}