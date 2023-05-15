import { Accessor, Setter } from "solid-js";

export default function SearchBox(props: {
	hex: Accessor<string>;
	setHex: Setter<string>;
}) {
	const { hex, setHex } = props;

	return (
		<div class="flex justify-center gap-8 my-16">
			<div
				class="h-28 w-28 sm:h-48 sm:w-48"
				style={{
					"background-color": `#${hex()[0] === "#" ? hex().slice(1) : hex()}`,
				}}
			></div>
			<form>
				<span class="md:text-lg font-medium my-4">Enter a hex code</span>
				<div class="my-2 border rounded pl-1 py-1">
					<span class="mx-1">#</span>
					<input
						type="text"
						name="hex"
						class="uppercase pl-1"
						value={hex()}
						oninput={(e) => {
							let input = e.currentTarget.value;
							// test if input contains only valid hex characters
							if (
								/^[0-9a-fA-F]+$/.test(input) ||
								input === "" ||
								input === "#"
							) {
								return setHex(input);
							} else {
								return (e.currentTarget.value = hex());
							}
						}}
						maxLength={6}
						required
					/>
				</div>
				<div>
					<button class="border-gray-400 rounded w-full bg-gray-200 py-1">
						Search
					</button>
				</div>
			</form>
		</div>
	);
}
