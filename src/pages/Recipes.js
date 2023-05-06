import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const recipes = [
    {
      title: "Chicken Pan Pizza",
      image: "/img/gallery/img_1.jpg",
      chefPic: "/img/top-chiefs/img_1.jpg",
    },
    {
      title: "Spaghetti and Meatballs",
      image: "/img/gallery/img_4.jpg",
      chefPic: "/img/top-chiefs/img_2.jpg",
    },
    {
      title: "American Cheeseburger",
      image: "/img/gallery/img_5.jpg",
      chefPic: "/img/top-chiefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/img/gallery/img_6.jpg",
      chefPic: "/img/top-chiefs/img_5.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "/img/gallery/img_10.jpg",
      chefPic: "/img/top-chiefs/img_6.jpg",
    },
    {
      title: "Chicken Pan Pizza",
      image: "/img/gallery/img_1.jpg",
      chefPic: "/img/top-chiefs/img_1.jpg",
    },
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <PreviousSearches />
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
