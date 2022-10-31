import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
    return (
        <div className="grid-item">
            <img className="img-responsive" alt="" src={recipe.imageUrl} />
            <Link to={`/details/${recipe._id}`} className="project-description">
                <div className="project-text-holder">
                    <div className="project-text-inner">
                        <h3>{recipe.name}</h3>
                        <p>Discover more</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RecipeCard;
