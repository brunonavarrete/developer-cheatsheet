import React from 'react';
import Card from './Card/Card';
import classes from './Cards.module.css';

const Cards = (props) => {
	return (
		<div className={ classes.Cards }>
			{ props.cards.map(c => {
        		return <Card 
         		 id={ c.id } 
         		 title={ c.title } 
         		 summary={ c.summary } 
         		 tags={ c.tags }
         		 source={ c.source } 
         		 sourceUrl={ c.sourceUrl }
         		 goodToKnow={ c.goodToKnow }
        		 key={ c.id } />
    		})}
    	</div>
    )
}

export default Cards;