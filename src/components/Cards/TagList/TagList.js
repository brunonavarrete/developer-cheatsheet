import React from "react";

const TagList = (props) => {
	return (
		<div>
			{props.tags.map((t) => {
				return (
					<span className="Tag" key={t}>
						[{t}]
					</span>
				);
			})}
		</div>
	);
};

export default TagList;