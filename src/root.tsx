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
	Link,
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
				<Title>Find my Pantone | HEX to Pantone TCX Converter</Title>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta
					name="description"
					content="Find the closest Pantone TCX colors for any HEX color code."
				/>
				<Meta
					name="google-site-verification"
					content="PylHrwBjrOCS_OfF-zHvdOxMGMCZzGulDMC9z18CSZg"
				/>
				<Link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/apple-touch-icon.png"
				/>
				<Link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<Link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<Link rel="manifest" href="/site.webmanifest" />
				<Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<Meta name="msapplication-TileColor" content="#da532c" />
				<Meta name="theme-color" content="#ffffff"></Meta>
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
