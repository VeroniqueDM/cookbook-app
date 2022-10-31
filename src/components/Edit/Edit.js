import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as recipeService from '../../services/recipeService';
import useRecipeState from '../../hooks/useRecipeState';
import { Alert } from 'react-bootstrap';

const types = [
    { value: 'breakfast', text: 'Breakfast' },
    { value: 'aprecipeizer', text: 'Aprecipeizer' },
    { value: 'soup', text: 'Soup' },
    { value: 'salad', text: 'Salad' },
    { value: 'hors-doeuvre', text: "Hors d'oeuvre" },
    { value: 'dessert', text: 'Dessert' },
    { value: 'main-course', text: 'Main course' },
]

const Edit = () => {
    const { recipeId } = useParams();
    const [errors, setErrors] = useState({name: false})
    const [recipe, setRecipe] = useRecipeState(recipeId);

    const recipeEditSubmitHandler = (e) => {
        e.preventDefault();

        let recipeData = Object.fromEntries(new FormData(e.currentTarget))

        recipeService.update(recipe._id, recipeData);
    }

    const nameChangeHandler = (e) => {
        let currentName = e.target.value;
        if (currentName.length < 3) {
            setErrors(state => ({...state, name: 'Your name sould be at least 3 characters!'}))
        } else if (currentName.length > 25) {
            setErrors(state => ({...state, name: 'Your name sould be max 25 characters!'}))
        } else {
            setErrors(state => ({...state, name: false}))
        }
    };

    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" method="POST" onSubmit={recipeEditSubmitHandler}>
                <fieldset>
                    <legend>Edit my recipe</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input" style={{borderColor: errors.name ? 'red' : 'inherit'}}>
                            <input type="text" name="name" id="name" defaultValue={recipe.name} onChange={nameChangeHandler} />
                        </span>
                        <Alert variant="danger" show={errors.name}>{errors.name}</Alert>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" defaultValue={recipe.description} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" defaultValue={recipe.imageUrl} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type" value={recipe.type} onChange={(e) => setRecipe(s => ({...s, type: e.target.value}))}>
                                {types.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Save" />
                </fieldset>
            </form>
        </section>
    );
}

export default Edit;