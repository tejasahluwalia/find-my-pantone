import { For, createEffect, createSignal } from "solid-js";
import PantoneChip from "~/components/PantoneChip";
import SearchBox from "~/components/SearchBox";
import getClosestColors from "~/utils/nearestPantone";
import isValidHex from "~/utils/validateHex";
import { useSearchParams } from "solid-start";

export default function Home() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [hex, setHex] = createSignal(
		searchParams.hex?.replace("#", "") ?? "ABCDEF"
	);
	const closestPantones = () => {
		if (isValidHex(hex())) return [...new Set(getClosestColors(hex(), 5))];
	};

	createEffect(() => {
		if (isValidHex(hex())) setSearchParams({ hex: `${hex()}` });
	});

	return (
		<main>
			<section class="mx-auto text-gray-700 p-4 container">
				<h1 class="text-4xl lg:text-6xl text-sky-950 font-bold my-16 text-center">
					Convert HEX to Pantone
				</h1>
				<SearchBox hex={hex} setHex={setHex} />
			</section>

			<h2 class="text-2xl lg:text-4xl text-center mb-8 font-bold text-sky-950">
				Similar Pantone TCX colors
			</h2>
			<ol class="grid gap-12 grid-flow-col-dense overflow-x-auto w-screen px-12">
				<For each={closestPantones()}>
					{(pantone) => <PantoneChip {...pantone} />}
				</For>
			</ol>
		</main>
	);
}
