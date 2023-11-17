import { DataType } from "../App";

type BarType = DataType[number];

export default function GraphBar({ bar }: { bar: BarType }) {
	const today = new Date().toLocaleDateString("en-US", { weekday: "short" }).toLowerCase();

	return (
		<div className="h-full w-full flex flex-col justify-end gap-1">
			<div
				style={{ height: `${bar.percent}%` }}
				className={`${
					today === bar.day ? "bg-primaryCyan" : "bg-primaryRed"
				}  w-full mt-auto rounded relative hover:bg-opacity-60 group transition-opacity cursor-pointer`}>
				<span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -left-3 -right-3 -top-14 text-center bg-neutral-900 text-neutral-100 p-2 rounded">
					${bar.amount}
				</span>
			</div>
			<p className="text-neutral-600 text-center text-sm sm:text-base">{bar.day}</p>
		</div>
	);
}
