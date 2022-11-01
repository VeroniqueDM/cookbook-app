import { useState, useEffect } from 'react';

import * as recipeService from '../../services/recipeService';
import { useAuthContext } from '../../contexts/AuthContext';
import RecipeList from '../RecipeList/RecipeList';


const MyRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        recipeService.getMyRecipes(user._id)
            .then(recipeResult => {
                setRecipes(recipeResult);
            });
    }, []);

    return (
        <section id="my-recipes-page" className="my-recipes">
            <h1>My recipes</h1>

            <RecipeList recipes={recipes} />
        </section>
    );
}

export default MyRecipes;