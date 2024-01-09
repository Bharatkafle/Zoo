import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./routes/Home";
import Animals from "./routes/Animal";
import Birds from "./routes/Birds";
import About from "./routes/About";
import { animals, birds } from "./animalsLists";
import ErrorPage from "./routes/Error-page";
import Root from "./routes/Root";
import Card from "./Components/Card";

import "./CSS/Cards.css";
import "./CSS/index.css";

const App = () => {
  const [animalData, setAnimals] = useState(animals);
  const [birdList, setBirds] = useState(birds);
  const [search, setSearch] = useState("");
  const location = useLocation();
  console.log(location)

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const removeHandler = (name) => {
    removeAnimalsHandler(name);
    removeBirdsHandler(name);
  };

  const removeAnimalsHandler = (name) => {
    const updatedArray = animalData.filter((animal) => animal.name !== name);
    setAnimals(updatedArray);
  };

  const removeBirdsHandler = (name) => {
    const birdsUpdatedArray = birdList.filter((bird) => bird.name !== name);
    setBirds(birdsUpdatedArray);
  };

  const likesHandler = (name, action) => {
    const updatedArray = animalData.map((animal) => {
      if (animal.name === name) {
        if (action === "increase") {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return { ...animal, likes: animal.likes - 1 };
        }
      } else {
        return animal;
      }
    });
    setAnimals(updatedArray);
  };

  const birdsLikesHandler = (name, action) => {
    const updatedArray = birdList.map((bird) => {
      if (bird.name === name) {
        if (action === "increase") {
          return { ...bird, likes: bird.likes + 1 };
        } else {
          return { ...bird, likes: bird.likes - 1 };
        }
      } else {
        return bird;
      }
    });
    setBirds(updatedArray);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home searchHandler={searchHandler} /> },
        {
          path: "/animals",
          element: (
            <Animals
              searchHandler={searchHandler}
              removeHandler={removeHandler}
              likesHandler={likesHandler}
              search={search}
              animalData={animalData}
            />
          ),
        },
        {
          path: "/birds",
          element: (
            <Birds
              searchHandler={searchHandler}
              removeHandler={removeHandler}
              birdsLikesHandler={birdsLikesHandler}
              search={search}
              birdList={birdList}
            />
          ),
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);



  return (
    <>
      <RouterProvider router={router}>
        <input type="text" placeholder="Search" onChange={searchHandler} />
        <Header name="Welcome To ZOO" />
        <main>
          <div className="reactions"></div>
          <Card addLikesHandler={likesHandler} />
        </main>
       
      </RouterProvider>
      <Footer copy="footer" isAboutPage={location.pathname === '/about'} />
     
    </>
  );
};

export default App;
