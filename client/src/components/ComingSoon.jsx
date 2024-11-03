"use client";
import React from "react";
import { Link } from "react-router-dom";

function ComingSoon() {
	return (
		<div className=" flex flex-col items-center justify-center bg-slate-100 bg-opacity-75 min-h-screen  min-w-full">
			<h1 className=" text-3xl">This Page is Coming Soon</h1>
			<h2 className=" text-2xl mt-3">Thankyou for Visiting</h2>
			<Link className=" text-xl mt-2" to={"/"}>
				Home
			</Link>
		</div>
	);
}

export default ComingSoon;
