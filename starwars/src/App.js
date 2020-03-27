import React, {useState, useEffect} from 'react';
import './App.scss';
import axios from 'axios';
import StarWars from './components/StarWars';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
    .get('https://swapi.co/api/people/')
    .then(response => {
      //console.log(response.data.results)
      setCharacters(response.data.results)
    })
    .catch(error => console.log('error: ', error))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {/* map over character array that was set with axios get request */}
      <div>
        {characters.map((character, index) => {
          return (
            <StarWars key={index} character={character}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
