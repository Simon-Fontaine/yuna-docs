import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
	return (
		<Layout title={"Support Us"} description="Feel like our work deserves a little extra ? Buy one of our supporter plans !">
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					fontSize: "20px",
					padding: "2rem",
				}}
			>
				<h1>Support Us</h1>
				<p>This is a React page in docusaurus</p>
			</div>
		</Layout>
	);
}
