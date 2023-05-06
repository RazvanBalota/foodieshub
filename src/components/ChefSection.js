import ChefCard from "./ChefCard";

export default function ChefSection() {
  const chefs = [
    {
      name: "Juan Carlos",
      img: "/img/top-chiefs/img_1.jpg",
      recipesCount: "10",
      cuisine: "Mexican",
    },
    {
      name: "John Doe",
      img: "/img/top-chiefs/img_2.jpg",
      recipesCount: "5",
      cuisine: "Japanese",
    },
    {
      name: "Erich Maria",
      img: "/img/top-chiefs/img_3.jpg",
      recipesCount: "13",
      cuisine: "Italian",
    },
    {
      name: "Chris Brown",
      img: "/img/top-chiefs/img_4.jpg",
      recipesCount: "8",
      cuisine: "American",
    },
    {
      name: "Blake Lively",
      img: "/img/top-chiefs/img_5.jpg",
      recipesCount: "9",
      cuisine: "French",
    },
    {
      name: "Ben Affleck",
      img: "/img/top-chiefs/img_6.jpg",
      recipesCount: "4",
      cuisine: "Indian",
    },
  ];

  return (
    <div className="section chefs">
      <h1 className="title">Our Top Chefs</h1>
      <div className="chef-container">
        {chefs.map((chef) => (
          <ChefCard key={chef.name} chef={chef} />
        ))}
      </div>
    </div>
  );
}
