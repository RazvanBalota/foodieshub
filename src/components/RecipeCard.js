import CustomImage from "./CustomImage";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.image} pt={"65%"} />
      <div className="recipe-card-info">
        <img className="chef-pic" src={recipe.chefPic} alt="" />
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-info">
          Voluptate elit eu velit excepteur occaecat ullamco Lorem sit fugiat
          nulla. Ut excepteur irure sit occaecat ipsum.
        </p>
        <a href="#" className="view-button">
          VIEW RECIPE
        </a>
      </div>
    </div>
  );
}
