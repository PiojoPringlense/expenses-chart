import { DataType } from "../App";
import GraphBar from "./GraphBar";

type DetailsProps = {
	data: DataType;
};

export default function Graph({ data }: DetailsProps) {
	return (
		<div className="flex justify-between gap-4 py-8 h-60">
			{data.map((d, i) => (
				<GraphBar key={i} bar={d} />
			))}
		</div>
	);
}
