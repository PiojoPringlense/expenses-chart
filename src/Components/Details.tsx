import { DataType } from "../App";
import Graph from "./Graph";

type DetailsProps = {
	data: DataType;
};

export default function Details({ data }: DetailsProps) {
	return (
		<div className="bg-neutral-100 rounded-2xl p-8 text-neutral-900 flex flex-col gap-6 justify-between">
			<div className="grid gap-8 border-b-[#f4ede4] border-b">
				<p className=" font-bold text-2xl sm:text-3xl">Spending - Last 7 days</p>
				<Graph data={data} />
			</div>
			<div className="flex justify-between gap-8 leading-none">
				<div className="flex flex-col justify-end gap-2">
					<p className="text-neutral-600 text-sm sm:text-base">Total this month</p>
					<p className="sm:text-[3rem] text-3xl font-bold">$478.33</p>
				</div>
				<div className="text-right flex flex-col justify-end gap-1">
					<p className="font-bold">+2.4%</p>
					<p className="text-neutral-600 text-sm sm:text-base">from last month</p>
				</div>
			</div>
		</div>
	);
}
