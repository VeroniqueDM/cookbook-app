import { Link } from "react-router-dom";

export default function GridItem({ recipe }) {
    return (
        <div className="grid-item">
            <img className="img-responsive" alt="" src={recipe.img} />
            <Link to={`/details/${recipe.id}`} className="project-description">
                <div className="project-text-holder">
                    <div className="project-text-inner">
                        <h3>{recipe.title}</h3>
                        <p>Discover more</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}