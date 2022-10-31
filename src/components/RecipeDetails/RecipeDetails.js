import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as recipeService from '../../services/recipeService';
import * as likeService from '../../services/likeService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import useRecipeState from '../../hooks/useRecipeState';

import { Button } from 'react-bootstrap';
import ConfirmDialog from '../Common/ConfirmDialog';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const { recipeId } = useParams();
    console.log(recipeId)
    const [recipe, setRecipe] = useRecipeState(recipeId);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    console.log(recipe)
    useEffect(() => {
        likeService.getRecipeLikes(recipeId)
            .then(likes => {
                setRecipe(state => ({...state, likes}))
            })
    }, []);

    const deleteHandler = (e) => {
        e.preventDefault();

        recipeService.destroy(recipeId, user.accessToken)
            .then(() => {
                navigate('/dashboard');
            })
            .finally(() => {
                setShowDeleteDialog(false);
            });
    };

    const deleteClickHandler = (e) => {
        e.preventDefault();
        console.log(process.env.NODE_ENV);
        setShowDeleteDialog(true);
    }

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${recipe._id}`}>Edit</Link>
            <a className="button" href="#" onClick={deleteClickHandler}>Delete</a>
        </>
    );

    const likeButtonClick = () => {
        if (user._id === recipe._ownerId) {
            return;
        }

        if (recipe.likes.includes(user._id)) {
            addNotification('You cannot like again')
            return;
        }

        likeService.like(user._id, recipeId)
            .then(() => {
                setRecipe(state => ({...state, likes: [...state.likes, user._id]}));

                addNotification('Successfuly liked a recipe :)', types.success);
            });
    };

    const userButtons = <Button onClick={likeButtonClick} disabled={recipe.likes?.includes(user._id)}>Like</Button>;

    return (
        <>
            <ConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler} />
            <section id="details-page" className="details">
                <div className="recipe-information">
                    <h3>Name: {recipe.name}</h3>
                    <p className="type">Type: {recipe.type}</p>
                    <p className="img"><img src={recipe.imageUrl} /></p>
                    <div className="actions">
                        {user._id && (user._id == recipe._ownerId
                            ? ownerButtons
                            : userButtons
                        )}

                        <div className="likes">
                            <img className="hearts" src="/images/heart.png" />
                            <span id="total-likes">Likes: {recipe.likes?.length || 0}</span>
                        </div>
                    </div>
                </div>
                <div className="recipe-description">
                    <h3>Description:</h3>
                    <p>{recipe.description}</p>
                </div>
            </section>
        </>
    );
}

export default Details;