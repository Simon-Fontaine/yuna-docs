import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
	{
		title: "Tout et partout",
		Svg: require("../../static/img/undraw_the_world_is_mine.svg").default,
		description: (
			<>
				Yuna Docs est un regroupement de toutes les documentations des <a href="https://github.com/Simon-Fontaine">projets de Simon</a>
				. C'est une librairie globale <b>accessible par tous et partout</b>.
			</>
		),
	},
	{
		title: "Facile à comprendre",
		Svg: require("../../static/img/undraw_learning.svg").default,
		description: (
			<>
				Yuna Docs est <b>le meilleur endroit</b> pour apprendre et se renseigner sur un ou des projets de Simon. Vous y retrouverez{" "}
				<a href="docs/intro">tout ce qu'il vous faut</a> !
			</>
		),
	},
	{
		title: "Partage tes connaissances",
		Svg: require("../../static/img/undraw_sharing_knowledge.svg").default,
		description: (
			<>
				Aide d'autres personnes à perfectionner l'usage de mes outils, <b>partage cette documentation</b> autour de toi !
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
