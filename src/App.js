import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams } from "react-router-dom";
import whiskey from "./whiskey.jpg";
import duke from "./duke.jpg";
import perry from "./perry.jpg";
import tubby from "./tubby.jpg";

const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: whiskey,
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    name: "Duke",
    age: 3,
    src: duke,
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    name: "Perry",
    age: 4,
    src: perry,
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  },
  {
    name: "Tubby",
    age: 4,
    src: tubby,
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore."
    ]
  }
];

function DogList() {
  return (
    <div>
      {dogs.map((dog, index) => (
        <div key={index}>
          <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
        </div>
      ))}
    </div>
  );
}

function DogDetails() {
  const { name } = useParams();
  const dog = dogs.find(dog => dog.name === name);

  if (!dog) {
    return <Navigate to="/dogs" />;
  }

  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={dog.src} alt={dog.name} />
      <h3>Age: {dog.age}</h3>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        {dogs.map((dog, index) => (
          <Link key={index} to={`/dogs/${dog.name}`}>
            {dog.name}
          </Link>
        ))}
      </nav>
      <Routes>
        <Route exact path="/dogs"
          element={<DogList />}
        />
        <Route path="/dogs/:name"
          element={<DogDetails />}
        />
        <Route path="*" 
          element={<DogList />}
        />
        
      </Routes>
    </Router>
  );
}

export default App;
