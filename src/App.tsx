import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog, { loader as PostsLoader } from "./pages/Blog";
import PostPage, { loader as PostLoader } from "./pages/PostPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Header />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "blog",
				element: <Blog />,
				loader: PostsLoader,
			},
			{
				path: "blog/:postId",
				element: <PostPage />,
				loader: PostLoader,
			},
		],
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
			<Footer />
		</>
	);
}

export default App;
