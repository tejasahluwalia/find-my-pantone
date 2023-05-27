import { createSignal } from "solid-js";
import titleCase from "~/utils/textTransform";

export default function PantoneChip(
	props:
		| {
				pantone?: string;
				hex?: string;
				name?: string;
		  }
		| undefined
) {
	const [copySuccess, setCopySuccess] = createSignal(false);

	function handleCopy() {
		navigator.clipboard.writeText(props?.hex ?? "").then(
			() => {
				setCopySuccess(true);
				setTimeout(() => setCopySuccess(false), 1000);
			},
			(err) => {
				console.error("Could not copy text: ", err);
			}
		);
	}

	return (
		<li class="border relative">
			<div
				class="h-28 w-28 sm:h-48 sm:w-48"
				style={{ "background-color": `${props?.hex}` }}
			></div>
			<div class="p-2 sm:p-4 text-sm sm:text-lg font-bold">
				<span class="block">PANTONE</span>
				<span class="block uppercase">{props?.pantone + " TCX"}</span>
				<span class="block">
					{titleCase(props?.name?.replaceAll("-", " "))}
				</span>
			</div>
			<div class="absolute top-1 -right-8" onclick={handleCopy}>
				{!copySuccess() ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-copy"
					>
						<rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
						<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-copy-check"
					>
						<path d="m12 15 2 2 4-4"></path>
						<rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
						<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
					</svg>
				)}
			</div>
		</li>
	);
}
