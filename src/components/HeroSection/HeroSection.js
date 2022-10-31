import { useEffect, useState } from "react";
import * as recipeService from '../../services/recipeService';
import RecipeList from "../RecipeList/RecipeList";

const HeroSection = () => {
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
    return (
        <div className="hero-full-wrapper">
  <div className="grid" 
  >
  <div className="gutter-sizer"></div>
    <div className="grid-sizer"></div>
    <h1>Top Recipes</h1>
   <section>
   <RecipeList recipes={recipes} />
   </section>
    
    
  </div>
</div>
    );
};
export default HeroSection;
