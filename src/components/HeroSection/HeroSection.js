import { useEffect, useState } from "react";
import * as recipeService from "../../services/recipeService";
import RecipeList from "../RecipeList/RecipeList";

const HeroSection = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService
            .getSortedRecipes()
            .then((result) => {
                setRecipes(result.slice(0,6));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
  
    return (
       <>
                       <h1>Latest Recipes</h1>

       <div className="hero-full-wrapper">
            <div className="grid">
                <div className="gutter-sizer"></div>
                <div className="grid-sizer"></div>
                    <RecipeList recipes={recipes} />
            </div>
        </div>
        </>
    );
};
export default HeroSection;
