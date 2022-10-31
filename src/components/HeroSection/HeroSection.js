import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import * as recipeService from '../../services/recipeService';
import GrowSpinner from "../Spinner";
import GridItem from "./GridItem";

const HeroSection = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getAll()
            .then(result => {
                console.log(result)
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
    {recipes.length > 0
                ? (
                    <div  style={{display: "inline-flex", flexWrap: "wrap"}}
                    >
                        {recipes.map(x => <GridItem key={x.id} recipe={x} />)}
                    </div>
                ) 
                : 
                // <GrowSpinner />
                <div className="loader_bg">
         <div className="loader"><img src="assets/images/loading.gif" alt="#" /></div>
      </div>
                // <h1 className="no-recipes">No recipes in database!</h1>
                
            }
    
    
  </div>
</div>
    );
};
export default HeroSection;
