import logo from "../assets/logo.svg";

export default function Balance() {
	return (
		<div className="bg-primaryRed rounded-2xl p-8 text-neutral-100 flex gap-6 justify-between">
			<div className="flex flex-col gap-3">
				<p className="text-neutral-100">My Balance</p>
				<p className="text-3xl font-bold">$921.48</p>
			</div>
			<img src={logo} alt="" />
		</div>
	);
}
