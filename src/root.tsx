// @refresh reload
import { Suspense } from "solid-js";
import {
	useLocation,
	A,
	Body,
	ErrorBoundary,
	FileRoutes,
	Head,
	Html,
	Meta,
	Routes,
	Scripts,
	Title,
} from "solid-start";
import "./root.css";

export default function Root() {
	const location = useLocation();
	const active = (path: string) =>
		path == location.pathname
			? "border-sky-600"
			: "border-transparent hover:border-sky-600";
	return (
		<Html lang="en">
			<Head>
				<Title>Find my Pantone | Hex to Pantone TCX Converter</Title>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta
					name="description"
					content="Find the closest Pantone TCX colors for any hex color code."
				/>
				<Meta
					name="google-site-verification"
					content="PylHrwBjrOCS_OfF-zHvdOxMGMCZzGulDMC9z18CSZg"
				/>
				<script
					defer
					src="https://static.cloudflareinsights.com/beacon.min.js"
					data-cf-beacon='{"token": "cb2bce9f81a74212a469d2f4e0773764"}'
				></script>
			</Head>
			<Body>
				<Suspense>
					<ErrorBoundary>
						<Routes>
							<FileRoutes />
						</Routes>
					</ErrorBoundary>
				</Suspense>
				<Scripts />
				<footer class="text-center text-gray-700 p-4">
					<p class="my-4">
						PANTONE® and other Pantone trademarks are the property of Pantone
						LLC.
					</p>
				</footer>
			</Body>
		</Html>
	);
}
