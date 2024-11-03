import React from "react";

function VideoCard({ fileName, name }) {
	return (
		<div className=" mt-5">
			<span className=" flex">
				{/* <h2>Vid Number: {e.vidNumber}</h2> */}
				<video
					src={`/api/download/video/${fileName}`}
					className=" h-40 "
					controls
				></video>
				<h1 className=" ml-10">{name}</h1>
			</span>
		</div>
	);
}

export default VideoCard;
