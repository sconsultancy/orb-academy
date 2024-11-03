import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store.js";
import { Provider } from "react-redux";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import TeacherScreen from "./screens/TeacherScreen.jsx";
import AddClassScreen from "./screens/AddClassScreen.jsx";
import TeacherEditScreen from "./screens/TeacherEditScreen.jsx";
import CourseScreen from "./screens/CourseScreen.jsx";
import ClassScreen from "./screens/ClassScreen.jsx";
import ComingSoon from "./screens/ComingSoonScreen.jsx";

// const { id } = useParams();
// console.log(useParams());

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App></App>}>
			<Route index={true} path="/" element={<HomeScreen></HomeScreen>}></Route>
			<Route path="/login" element={<LoginScreen></LoginScreen>}></Route>
			<Route
				path="/register"
				element={<RegisterScreen></RegisterScreen>}
			></Route>

			<Route path="/courses" element={<CourseScreen></CourseScreen>}></Route>
			<Route path="/courses/:id" element={<ClassScreen></ClassScreen>}></Route>
			<Route path="/resources" element={<ComingSoon></ComingSoon>}></Route>

			<Route path="" element={<PrivateRoute></PrivateRoute>}>
				<Route
					path="/profile"
					element={<ProfileScreen></ProfileScreen>}
				></Route>
				<Route
					path="/teacher"
					element={<TeacherScreen></TeacherScreen>}
				></Route>
				<Route
					path="/teacher/:id"
					element={<TeacherEditScreen></TeacherEditScreen>}
				></Route>
				<Route
					path="/add-class"
					element={<AddClassScreen></AddClassScreen>}
				></Route>
			</Route>
		</Route>
	)
);

createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<StrictMode>
			<RouterProvider router={router}></RouterProvider>
		</StrictMode>
	</Provider>
);
