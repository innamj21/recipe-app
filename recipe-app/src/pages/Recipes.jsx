import { useState } from "react";

function Recipes() {
  const [isExpanded, setIsExpanded] = useState(false);

  const  toggleSidebar = () => {
    setIsExpanded(prev => {
      if (prev) {
        setIsRatingExpanded(false);
      }
      return !prev
  });
  };
  
  const sidebarItemStyle = {
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    display: "flex",
    justifyContent: isExpanded ? "flex-start"  : "center"
  };

  const [isRatingExpanded, setIsRatingExpanded] = useState(false);
  const toggleRating = () => { setIsRatingExpanded(prev => !prev);};

  const [isModalOpen, setIsModalOpen] = useState(false);

  const placeholderRecipes = [
    {id: 1, title: "Soup"}, {id: 2, title: "Banana Bread"},
    {id: 3, title: "Pizza"}, {id: 4, title: "Curry"}
  ];

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div
        style={{
          width: isExpanded ? "240px" : "50px",
          height: "100vh",
          transition: "width 0.15s ease",
          backgroundColor: "pink",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent:  "space-between",
          padding: "20px",
        
        }}
      >

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px"
            }}
          >
            {/* top */}
            <div 
            style={{ display: "flex", justifyContent: "flex-end"}}>
            <div onClick={toggleSidebar}
            style={{
              cursor: "pointer",
              fontSize: "20px",
              marginBottom: "10px"
            }}>☰</div>
            </div>

            <div style={{ display: "flex",  flexDirection: "column", gap:  "10px"}}> 
              <div>{isExpanded && "User pfp and info"}</div>

              <button 
              onClick={(e) => {
                e.stopPropagation(); 
                setIsModalOpen(true)
              }}
              style={{
                backgroundColor: "darksalmon",
                color: "white"
              }}> {isExpanded ? "Create New Folder" : "+"}</button>
            </div>

            {/* middle */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px"
              }}
            >
              <div style={sidebarItemStyle}>{isExpanded && "All Recipes" }</div>
              <div style={sidebarItemStyle}>{ isExpanded && "Favourites"}</div>
              <div style={sidebarItemStyle}>{isExpanded && "Recently Added"}</div>
              <div style={sidebarItemStyle}>{isExpanded && "Least Accessed"}</div>
              <div onClick={toggleRating} style={sidebarItemStyle}>
                {isExpanded && (
                  <>
                  Rating{isRatingExpanded ? "  ▼" : "  ▶" }
                  </>
                )}
                </div>
                
              {isExpanded && isRatingExpanded && (
                <div style={{ 
                  display:  "flex",
                  flexDirection: "column",
                  gap: "10px", padding: "20px"  }}>
                  <div style={sidebarItemStyle}>5 Stars</div>
                  <div style={sidebarItemStyle}>4 Stars</div>
                  <div style={sidebarItemStyle}>3 Stars</div>
                  <div style={sidebarItemStyle}>2 Stars</div> 
                  <div style={sidebarItemStyle}>1 Star </div>
                  </div>
              )}
            </div>
            </div> 

            {/* bottom */}
            <div>
            <div style={sidebarItemStyle}>{isExpanded && "Archive"}</div>
          </div>
      </div>

      <div style={{ 
        flex: 1,
        display: "flex",
        flexDirection:"column",
        padding: "40px",
        gap: "20px",
        alignItems: "center"
       }}>
        {/* recipe section */}

        {/*search bar */}
        <input type="text" placeholder="Search recipes.." 
        style={{ 
          width: "100%", borderRadius: "8px", padding: "15px", border: "1px solid #ccc", boxSizing: "border-box"

        }}/>

        {/*recipe grid */}

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
          padding: "pointer"        
        }}> View Recipe </button>
        </div>
        ))}
      </div>
      {isModalOpen && (
        <div 
            onClick={() => setIsModalOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0, width: "100vw", height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.4)", display: "flex",
              justifyContent: "center", alignItems: "center",
              zIndex: 1000
            }} >
              <div onClick={(e) => e.stopPropagation()}
                style={{
                  backgroundColor: "blue",
                  padding: "30px",
                  borderRadius: "10px",
                  width: "300px",
                  display: "flex", flexDirection: "column",
                  gap: "15px"
                }}>
                  <h3> Create new category:</h3>

                  <input 
                  type="text" 
                  placeholder="Please enter folder name.."
                  style= {{
                    padding: "7px",
                    borderRadius: "5px", 
                    border: "1px solid #ccc"
                  }}
                  />
                  <div 
                  style={{ display: "flex", justifyContent: "flex-end", gap: "10px"}}>
                    <button  onClick={() => setIsModalOpen(false)}>
                      Cancel
                    
                    </button>
                    <button
                    style={{
                      backgroundColor: "darksalmon",
                      color: "white",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "5px"
                    }} 
                     onClick={() => setIsModalOpen(false)}>
                      Create
                     </button>
                  </div>
                   </div>
                </div>
      )}
    </div>
     </div> 
  );
}

export default Recipes;
