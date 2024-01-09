import Card from "../Components/Card";
const Birds = ({
  birdList,
  search,
  removeHandler,
  birdsLikesHandler,
  searchHandler,
}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => searchHandler(e.target.value)}
      />
      <div className="birdsMap">
        {birdList
          .filter((bird) =>
            bird.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((bird) => (
            <Card
              key={bird.name}
              {...bird}
              removeHandler={() => removeHandler(bird.name)}
              removeLikesHandler={() =>
                birdsLikesHandler(bird.name, "decrease")
              }
              addLikesHandler={() => birdsLikesHandler(bird.name, "increase")}
            />
          ))}
      </div>
    </>
  );
};

export default Birds;
