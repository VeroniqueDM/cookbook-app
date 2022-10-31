import { useNavigate } from 'react-router-dom';
import * as recipeService from '../../services/recipeService';
import { useAuthContext } from '../../contexts/AuthContext';

const Create = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const onRecipeCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');

        recipeService.create({
            name,
            description,
            imageUrl,
            type,
        }, user.accessToken)
            .then(result => {
                navigate('/dashboard');
            })
    }

    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onRecipeCreate} method="POST">
                <fieldset>
                    <legend>Add new Recipe</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>

                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="breakfast">Breakfast</option>
                                <option value="appetizer">Appetizer</option>
                                <option value="soup">Soup</option>
                                <option value="salad">Salad</option>
                                <option value="main-course">Main course</option>
                                <option value="hors-doeuvre">Hors d'oeuvre</option>
                                <option value="dessert">Dessert</option>

                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Recipe" />
                </fieldset>
            </form>
        </section>
    );
}

export default Create;