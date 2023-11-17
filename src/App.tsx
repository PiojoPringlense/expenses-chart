import Balance from "./Components/Balance";
import Details from "./Components/Details";
import initialData from "./assets/data.json";

let max = 0;
initialData.forEach((item) => {
	if (item.amount > max) {
		max = item.amount;
	}
});

const data = initialData.map((item) => {
	return { ...item, percent: Math.round((item.amount / max) * 100) };
});

export type DataType = typeof data;

function App() {
	return (
		<div className="font-DM_Sans text-lg bg-neutral-300 w-screen h-screen flex place-content-center">
			<div className="grid place-content-center grid-cols-[1fr] grow max-w-xl gap-6 mx-4">
				<Balance />
				<Details data={data} />
			</div>
		</div>
	);
}

export default App;
