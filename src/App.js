import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';
import logo from './foodies.png'


require('dotenv').config();
const APP_ID = process.env.REACT_APP_ID;
const APP_KEY = process.env.REACT_APP_KEY;


const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
   getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data)
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <header>
        <h1><img alt="food" src={logo}></img>  <br/> Find your favorite recipes </h1>
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Type an ingredient, a dish, a recipe..."/>
          <button className="search-button" type="submit">Search</button>
        </form>
      </header>
       
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        url={recipe.recipe.url}
        />
      ))}
      </div>
    </div>
  )
}

export default App;
