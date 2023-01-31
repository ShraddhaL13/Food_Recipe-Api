import "./App.css";
import "./index.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import { YOUR_APP_ID, YOUR_APP_KEY } from "./Constant";
import Card from "./Card";

function App() {
  const [apiData, setApiData] = useState([]);
  const [dietType, setDietType] = useState("");
  const [dishType, setDishType] = useState("");
  const [searchValue, setsearchValue] = useState("");

  useEffect(() => {
    return () => { };
  }, []);

  const url = `https://api.edamam.com/search?q=${searchValue}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}
  &from=0&to=100&calories=591-722&health=alcohol-free&diet=${dietType}&&dishType=${dishType}`;

  const getAppData = async () => {
    var res = await Axios.get(url);
    setApiData(res.data.hits);
    // console.log(res);
  };

  return (
    <div className="container" >

      <h1 style={{ textAlign: "center", fontWeight: "bold", fontStyle: "oblique" }}>Food Recipe</h1>

      <br />
      <form>
        <input type="text" placeholder="Search" onChange={(e) => setsearchValue(e.target.value)}
          style={{ borderRadius: "10px", padding: "8px", margin: "5px" }} />

        <select className="dietType_drop" onChange={(e) => setDietType(e.target.value)}>
          <option>Select</option>
          <option>balanced</option>
          <option>high-protein</option>
          <option>high-fiber</option>
          <option>low-fat</option>
          <option>low-carb</option>
        </select>

        <select className="dishType_drop" onChange={(e) => setDishType(e.target.value)}>
          <option>Select</option>
          <option>soup</option>
          <option>dessert</option>
        </select>
        <br />
        <input type="btn" className="btn btn-primary" value="Search" onClick={getAppData}
          style={{ borderRadius: "20px", }} />
      </form>
      <div>
        {apiData.map((val) => {
          return (
            <Card
              image={val.recipe.image}
              cuisineType={val.recipe.cuisineType}
              mealType={val.recipe.mealType}
              dishType={val.recipe.dishType}
            // dietLabels={val.recipe.dietLabels}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
