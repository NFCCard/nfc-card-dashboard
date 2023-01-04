import React, { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

const SpringButtom = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<button onClick={() => setOpen(true)}>Open</button>
			<BottomSheet open={open}>
				<div
					style={{
						height: "50vh",
					}}
				></div>
			</BottomSheet>
		</div>
	);
};

export default SpringButtom;

// import React, { useState } from "react";
// import { BottomSheet } from "react-spring-bottom-sheet";
// import "react-spring-bottom-sheet/dist/style.css";

// export default function SpringButtom() {
// 	const [open, setOpen] = useState(false);

// 	return (
// 		<div>
// 			<button onClick={() => setOpen(true)}>Open</button>
// 			<BottomSheet open={open}>
// 				{" "}
// 				<div
// 					style={{
// 						height: "50vh",
// 					}}
// 				></div>{" "}
// 			</BottomSheet>
// 		</div>
// 	);
// }
