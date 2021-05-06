import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) => {
    const cal = Math.floor(calories)
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>{cal} cal</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}

export default Recipe;