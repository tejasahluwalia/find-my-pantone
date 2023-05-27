import { createSignal, onMount } from "solid-js";
import titleCase from "~/utils/textTransform";

export default function PantoneChip(props: {
	pantone: string;
	hex: string;
	name: string;
}) {
	const [copySuccess, setCopySuccess] = createSignal(false);
	let canvas: HTMLCanvasElement | undefined;

	function handleHexCopy() {
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

	onMount(() => {
		const ctx = canvas?.getContext("2d");
		if (!ctx) {
			console.error("Could not get canvas context");
			return;
		}

		ctx.fillStyle = props.hex;
		ctx.fillRect(0, 0, 192, 192);
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 192, 192, 320);
		ctx.fillStyle = "#171717";
		ctx.font = "bold 18px Helvetica Neue, Arial, sans-serif";
		ctx.fillText("PANTONE", 16, 192 + 16 + 28);
		ctx.fillText(props.pantone + " TCX", 16, 192 + 16 + 28 + 28);
		ctx.fillText(
			titleCase(props.name.replaceAll("-", " ")),
			16,
			192 + 16 + 28 + 28 + 28
		);
		ctx.lineWidth = 1;
		ctx.strokeStyle = "#a3a3a3";
		ctx.strokeRect(0, 0, 192, 320);
	});

	function handleChipCopy() {
		const ctx = canvas?.getContext("2d");
		if (!ctx) {
			console.error("Could not get canvas context");
			return;
		}
		canvas?.toBlob((blob) => {
			if (!blob) {
				console.error("Could not get blob");
				return;
			}
			navigator.clipboard
				.write([
					new ClipboardItem({
						"image/png": blob,
					}),
				])
				.then(
					() => {
						setCopySuccess(true);
						setTimeout(() => setCopySuccess(false), 1000);
					},
					(err) => {
						console.error("Could not copy text: ", err);
					}
				);
		});
	}

	return (
		<li class="border relative">
			<canvas ref={canvas} height="320" width="192" />
			<div
				class="absolute top-1 -right-8 hover:cursor-pointer"
				onclick={handleHexCopy}
			>
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
			<div
				class="absolute top-12 -right-8 hover:cursor-pointer"
				onclick={handleChipCopy}
			>
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
