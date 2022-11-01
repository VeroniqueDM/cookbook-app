import { useEffect, useState } from "react";
import * as recipeService from '../../services/recipeService';
import RecipeList from "../RecipeList/RecipeList";

const Dashboard = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getAll()
            .then(result => {
                setRecipes(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    console.log(recipes)
    return (
        <div className="hero-full-wrapper">
  <div className="grid" 
  >
  <div className="gutter-sizer"></div>
    <div className="grid-sizer"></div>
    <h1>All Recipes</h1>
   <RecipeList recipes={recipes} />
    
    
  </div>
</div>
    );
};
export default Dashboard;
