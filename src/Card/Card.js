import React from 'react';
import classes from "./Card.module.css";

const Card = (props) => {
	let rand = Math.floor(Math.random() * (350 - 400 + 1)) + 400;
	let backgroundStyle = { backgroundImage: `url(https://picsum.photos/${rand}/${rand})` }
	return (

  	/*

		
  	*/

 //    <div className={ classes.Card } key={ props.id }>
	//   <div className={ classes.Card__inner }>
	//     <div className={ classes.Card__front }>
	//       <h2 className={ classes.Card__title }>{ props.title }</h2>
	//     </div>
	//     <div className={ classes.Card__back }>
	//       <h2 className={ classes.Card__title }>{ props.title }</h2>
	//     </div>
	//   </div>
	// </div>

	<div className={ classes.Card }>
		<div className={ classes.image } style={ backgroundStyle }>
			<h2>{ props.title }</h2>
		</div>
		<div className={ classes.details }>
	      <div className={ classes.center }>
	        <h1>Someone famous<span>team leader</span></h1>
	        <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
	      </div>
	    </div>
	</div>


  )
}

export default Card;