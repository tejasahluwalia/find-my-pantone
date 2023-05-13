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
	return (
		<li class="border">
			<div
				class="h-28 w-28 sm:h-48 sm:w-48"
				style={{ "background-color": `${props?.hex}` }}
			></div>
			<div class="p-2 sm:p-4 text-sm sm:text-lg font-bold">
				<span class="block">PANTONE</span>
				<span class="block uppercase">{props?.pantone}</span>
				<span class="block">
					{titleCase(props?.name?.replaceAll("-", " "))}
				</span>
			</div>
		</li>
	);
}
