import { useState } from "react";
import './App.css';
    

function App() {

  const MovieForm = (props) => {
    const [title, setTitle] = useState("")
    const [director, setDirector] = useState("")
    const [actors, setActors] = useState("")
    const [plot, setPlot] = useState("")
    const [year, setYear] = useState(0)
    const [rating, setRating] = useState(0)
    return (
      <div>
        <h1>Movie Form</h1>
        <label>Title:</label>
        <input type="text" onChange={(e) => {
          setTitle(e.target.value)
        }}/>
        <p>Current Title: {title}</p>

        <label>Director:</label>
        <input type="text" onChange={(e) => {
          setDirector(e.target.value)
        }}/>
        <p>Current Director: {director}</p>

        <label>Actors:</label>
        <input type="text" onChange={(e) => {
          setActors(e.target.value)
        }}/>
        <p>Current Actors: {actors}</p>

        <label>Plot:</label>
        <input type="text" onChange={(e) => {
          setPlot(e.target.value)
        }}/>
        <p>Current Plot: {plot}</p>

        <label>Year:</label>
        <input type="number" onChange={(e) => {
          setYear(e.target.value)
        }}/>
        <p>Current Year: {year}</p>

        <label>IMDB Rating:</label>
        <input type="number" step="0.1" onChange={(e) => {
          setRating(e.target.value)
        }}/>
        <p>Current Rating: {rating}</p>
      </div>
    )
  };
  return (
    <div className="App App-header">
      <MovieForm />
    </div>
  );
}

export default App;
