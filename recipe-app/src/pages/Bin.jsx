import { useState } from "react";
  const placeholderRecipes = [
    {id: 1, title: "Soup"}, {id: 2, title: "Banana Bread"},
    {id: 3, title: "Pizza"}, {id: 4, title: "Curry"}
  ];
function Bin(){
    return(
    
        <div style={{ 
        display: "flex",
        flexDirection:"column",
        padding: "40px",
        gap: "20px",
        width: "100%"}}>
        
         <input type="text" placeholder="Search recipes.." 
        style={{ 
          width: "90%", borderRadius: "8px", padding: "15px", border: "1px solid #ccc", boxSizing: "border-box"

        }}/>

            <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          width: "100%"
        }} >
          {placeholderRecipes.map(recipe => (
        <div
        key={recipe.id} style={{
          backgroundColor: "white",
          borderRadius: "12px", display: "flex",
          flexDirection: "column", gap: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
          overflow: "hidden"
        }}> 
        <div style={{
          fontWeight: "bold", fontSize: "16px", padding: "5px 10px"
        }}> {recipe.title}</div>
        {/*placeholder for img */}
        <div style={{
          height: "150px",
          backgroundColor: "#ddd",
          borderRadius: "10px",
          width: "100%"
        }}></div>
        
        <button style={{
          backgroundColor: "darksalmon",
          color: "white",
          border: "none", 
          borderRadius: "6px",
          cursor: "pointer",
          padding: "8px"        
        }}> View Recipe </button>
        <button
        style={{
            backgroundColor: "navy",
            color: "white",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
            padding: "8px" 

        }}>
            Restore?
        </button>
        </div>
        ))}
      </div>
        </div>



    );

}
export default Bin