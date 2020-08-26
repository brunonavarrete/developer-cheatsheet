import React from "react";
import classes from "./Card.module.css";

import TagList from "../TagList/TagList";
import Tooltip from "../Tooltip/Tooltip";

const Card = (props) => {
	let rand = Math.floor(Math.random() * (350 - 400 + 1)) + 400;
	let backgroundStyle = {
		backgroundImage: `url(https://picsum.photos/${rand}/${rand})`,
	};
	return (
		<div className={classes.Card}>
			<div className={classes.image} style={backgroundStyle}>
				<h2>{props.title}</h2>
			</div>
			<div className={classes.details}>
				<div className={classes.center}>
					<h1>{props.title}</h1>
					<p>{props.summary}</p>
					<a 
					 target="_blank"
					 href={props.sourceUrl}>{props.source}</a>
					<TagList tags={props.tags} />
					<Tooltip goodToKnow="{props.goodToKnow}"/>
				</div>
			</div>
		</div>
	);
};

export default Card;