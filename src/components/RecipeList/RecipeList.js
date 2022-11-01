import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
    return (
        <>
          
            <div
            //  style={{ display: "inline-flex", flexWrap: "wrap" }}
             >
                {
                    recipes.length > 0 
                    ? (
                        <ul style={{ display: "inline-flex", flexWrap: "wrap" }}>
                            {recipes.map(x => 
                                <RecipeCard key={x._id} recipe={x} />
                            )}
                        </ul>   ) 
                    : (
                        <div className="loader_bg">
                            <div className="loader">
                                <img src="assets/images/loading.gif" alt="#" />
                            </div>
                        </div>
                    )
                    // <h1 className="no-recipes">No recipes in database!</h1>
                }
            </div>
        </>
    );
};

export default RecipeList;
