import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
	{
		title: "Entirely Free",
		Svg: require("../../static/img/undraw_free.svg").default,
		description: (
			<>
				If you feel like our work deserves a little extra, feel free to buy one of our <a href="support-us">supporter plans</a>! It
				allows us to remain completely free for other users!
			</>
		),
	},
	{
		title: "Easy to Use",
		Svg: require("../../static/img/undraw_easy.svg").default,
		description: (
			<>
				Make your server feel special and unique with these <a href="/docs/intro">easy-to-use</a>, customizable plugins. We give you
				full control over your server and your plugins.
			</>
		),
	},
	{
		title: "Focus on What Matters",
		Svg: require("../../static/img/undraw_focus.svg").default,
		description: (
			<>
				Help your server achieve it true potential with <a href="/docs/intro">easy-to-use</a> productivity plugins such as a ticketing
				system, message filtering system, and other useful things.
			</>
		),
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} alt={title} />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
