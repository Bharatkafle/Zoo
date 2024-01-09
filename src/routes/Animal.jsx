import Card from "../Components/Card";

const Animals = ({
  animalData,
  search,
  removeHandler,
  likesHandler,
  searchHandler,
}) => {
  return (
    <>
      <div style={{ display :"flex", justifyContent:'center', alignItems:"center", }} >
        <input 
           style={{textAlign: 'center'}}
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHandler}
      />
     </div>
      <div className="animalsMap">
        {animalData
          .filter((animal) => animal.name.includes(search))
          .map((animal) => (
            <Card
              key={animal.name}
              {...animal}
              removeHandler={() => removeHandler(animal.name)}
              removeLikesHandler={() => likesHandler(animal.name, "decrease")}
              addLikesHandler={() => likesHandler(animal.name, "increase")}
            />
          ))}
      </div>
    </>
  );
};

export default Animals;
