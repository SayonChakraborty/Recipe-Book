

import './App.css';

import Axios from "axios";
import { useState } from "react";



function App() {
  const [query , setquery]= useState("")
  const  [recipes, setrecipes] = useState([])
  
  

  var url = `https://api.edamam.com/search?q=${query}&app_id=1f1eebfb&app_key=5c572b84ca4b5c0b246ae8b50d70ca87&&health=alcohol-free`;

// here we uses the async and await bcz we want to wait till the paje loads
   async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits)
    console.log(result.data);


  }
  const onSubmit =(e) =>{
    // prevent default helps to search any content without reloading the page
    e.preventDefault();
    getRecipes();

  }

  return (
    <div className="app">

      <h1>🍔🍔RECIPE MASTER🍔🍔</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input type="text"
        className='input_class'
         placeholder='enter ingredient'
        vaalue ={query} onChange = {(e) => setquery(e.target.value)}
        />
        <input className='app_submit'  type= "submit" value ="Search"/>
      </form>
      <div>
        {recipes.map((recipe) =>{
          return <p>{recipe["recipe"] ["label"]}</p>
        })}
      </div>

    </div>
  );
}

export default App;
