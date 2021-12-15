import Axios from "axios";
import { useState } from "react";
import RecipeList from "./RecipeList";

const Search = () => {
  const [query, setQuery] = useState(``);
  const [recipes, setRecipes] = useState([]);
  
  export async function getServerSideProps(context) {
    const APP_ID = process.env.REACT_APP_APP_ID;
    const APP_KEY = process.env.REACT_APP_APP_KEY;

    let urlV2 = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const req = context.req;
    const res = context.res;
    
    let result = await Axios.get(urlV2);
    setRecipes(result.data.hits);
    // Fetch data from API or database
    // Good to use when you need to make an authenticated request where you never want the client to see the information
    return {
      props: {
        meetups: res.data,
      },
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="container">
      <img src="kick-off-logo.png" className="logo" alt="" />
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="user-input"
          type="text"
          placeholder="Enter Ingredient(s)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="search-button" type="submit" value="Search" />
      </form>
      <div className="recipe-list">
        {recipes.map((recipe, index) => {
          return <RecipeList data={recipe} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Search;