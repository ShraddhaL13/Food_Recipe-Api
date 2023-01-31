import React from "react";

export default function Card(props) {
  return (
    <div className="cardDiv" style={{color:"black"}}>
      <div className="card" >
        <img src={props.image} className="card-top-img" alt="..." style={{padding:"20px"}}/>
        <div className="card-body">
         
          <h6 className="card-title">Cuisine Type : {props.cuisineType}</h6>
          <h6 className="card-text">Meal Type : {props.mealType}</h6>
          <h6 class="dishT">Dish Type : {props.dishType}</h6>
          {/* <h6 className="card-text">Diet Labels : {props.dietLabels}</h6> */}
      </div>
    </div>
    </div>
  );
}
