import './App.css';
import { useState, useEffect } from 'react'

let foodList = ['Burguer', 'Potato', 'Milk', 'Tomato', 'Pizza']

function App() {
  const [state, setState] = useState(foodList)

  useEffect(() => {
    console.log('Mudou')
  }, [])

  function handleClick(food) {
    let newFoodList = state.filter(foodItem => foodItem !== food)
    setState(newFoodList)
  }

  return (
    <ul>
      {state.map((food, index) => 
        <li key={index}>
          <div className="checkbox" onClick={() => handleClick(food)}></div>
          <span>{food}</span>
        </li>
      )}
    </ul>
  );
}

export default App;
