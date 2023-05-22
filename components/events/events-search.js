'use client';

import { useRef } from "react";
import Button from "../ui/button";

export default function EventSearch(props) {
    const yearInputRef = useRef();
    const monthInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;

        props.onSearch(selectedYear, selectedMonth);
    }

    return (
        <form className="my-8 m-auto shadow-md p-4 bg-white rounded-md w-11/12 max-w-80 flex justify-between flex-col md:flex-row gap-8" onSubmit={submitHandler}>
            <div className="w-full md:w-[90%] flex flex-row gap-8">
                <div className="flex gap-4 items-center justify-between">
                    <label className="font-bold" htmlFor="year">Year</label>
                    <select className="font-inherit bg-white rounded-lg w-[70%] md:w-full p-1" id="year" ref={yearInputRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                </div>
                <div className="flex gap-4 items-center justify-between">
                    <label className="font-bold" htmlFor="month">Month</label>
                    <select className="font-inherit bg-white rounded-lg w-[70%] p-1" id="month" ref={monthInputRef}>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    );
}