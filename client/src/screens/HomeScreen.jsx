import React from "react";
import Hero from "../components/Hero";
import Dashboard from "../components/Dashboard";
import Benefits from "../components/Benefits";
import Resources from "../components/Resources";
import Footer from "../components/Footer.jsx";
const HomeScreen = () => {
	return (
		<div className=" pt-[100px]">
			<Hero></Hero>
			<Dashboard></Dashboard>
			<Benefits></Benefits>
			<Resources></Resources>
		</div>
	);
};

export default HomeScreen;
