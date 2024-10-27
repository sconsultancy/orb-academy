import "./App.css";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { Outlet } from "react-router-dom";
import { Toaster, toast } from "sonner";

function App() {
	return (
		<div>
			<h1>
				<Toaster position="top-center" richColors />
				<Header></Header>
				<Outlet></Outlet>
			</h1>
		</div>
	);
}

export default App;
/*
-> Change Side Navbar span cursor design to hand
-> Register normally later on if someone wants to teach then ok no seperate category 
-> Backend and Frontend for 5 Star also total number of Reviews












*/
