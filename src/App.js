import { useState } from 'react';
import './App.css';
import { useCatBreeds } from './useCatData';


function App() {

  const catBreeds = useCatBreeds();

  const catBreedsList = [];
  for (var key of Object.keys(catBreeds)) {
    catBreedsList.push(catBreeds[key]);
  }

  const [breedsList, setBreedsList] = useState([]);
  const loadBreed = function(e){
    const breedCatList = catBreedsList.filter((item)=> item.name === e.target.value);
    setBreedsList(breedCatList);
  }

  console.log(breedsList);

  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello Cats!
        </p>
        <select name="catBreeds" id="breeds" onChange={loadBreed}>
            {catBreedsList.map((item,index)=>
              { return <option value={item.name}>{item.name} </option> })}
        </select>
        <div>
            
        </div>
      </header>
    </div>
  );
}

export default App;
