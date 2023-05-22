export default function LogisticsItem(props) {
    const { icon: Icon } = props;

    return (
        <li className="flex text-xl items-center md:items-start md:text-left flex-col text-center text-teal-300">
            <span className="block w-8 h-8 mr-4 text-teal-600">
                <Icon className="w-8 h-8" />
            </span>
            <span>{props.children}</span>
        </li>
    );
}