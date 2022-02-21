import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,url}) => {
    const cal = Math.floor(calories)
    return(
        <div className={style.recipe}>
            <img className={style.image} src={image} alt=""/>
            <h2>{title}</h2>
            <p>{cal} cal</p>
            <a href={url} target="_blank" rel="noopener noreferrer">See the recipe</a>
            
            
        </div>
    );
}

export default Recipe;