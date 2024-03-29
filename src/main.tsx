import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import "./index.scss";
import { PageEmployees } from "./pages/PageEmployees.tsx";
import { PageAbout } from "./pages/PageAbout.tsx";
import { Page404 } from "./pages/Page404.tsx";
import { PageSimpleForm } from "./pages/PageSimpleForm.tsx";
import * as config from "./config.ts";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Page404 />,
		element: <App />,
		children: [
			{
				path: "/simple-form",
				element: (
					<>
						{config.getEnvironment() === "development" ? (
							<PageSimpleForm />
						) : (
							<p>no access</p>
						)}
					</>
				),
			},
			{
				path: "employees",
				element: <PageEmployees />,
			},
			{
				path: "about",
				element: <PageAbout />,
			},
			{
				path: "/",
				element: (
					<>
						{config.getEnvironment() === "development" ? (
							<Navigate to="/simple-form" replace />
						) : (
							<Navigate to="/employees" replace />
						)}
					</>
				),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
