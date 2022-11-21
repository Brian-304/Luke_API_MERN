import './App.css';
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
//Import components
import StarWarsPeople from './components/StarWarsPeople';
import StarWarsPlanets from './components/StarWarsPlanets';
import Form from './components/Form';
//Import validations
import Error from './components/Error';



function App() {
  return (
    <div>
      <h1>Star Wars Api</h1>

      <hr/ >

      <Routes>

        <Route path="*" element={
          <main style={{ padding: "1rem"}}>
            <Error/>
            </main>
        }
        />
        <Route path="/form" element={<Form />} />
        <Route path="/planets/:planetId" element={<StarWarsPlanets />} />
        <Route path="/people/:peopleId" element={<StarWarsPeople />} />
        <Route path="/error" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
