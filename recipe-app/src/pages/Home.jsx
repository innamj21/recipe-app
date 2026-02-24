import { Link } from "react-router-dom"; 
import { useState } from "react";

function Home(){
    const [showConversion, setShowConversion] = useState(false)
    const [isUploadOpen, setIsUploadOpen] = useState(false);
    const [uploadModal, setUploadModal] = useState (null);
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
    <div style={{
      minHeight: "100vh",
      position: "relative",
      backgroundColor: "#fdf4ed"}}>
        
         <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px",
          backgroundColor: "#869d7a",
          height: "65px",
        }}>
          <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px 30px",
              fontSize: "14px", 
          }}>Logo/app name</div>
          <button
          style={{
            backgroundColor: "#c57b57"
          }}>Log Out?</button>
        </div> 

        <div style={ {padding: "100px 20px", textAlign: "center"}}>
          <h1 style={{ fontSize: "35px", fontWeight: "600", color: "#303633", marginTop: "10px"}}>Hello User! whats cookin :3</h1>
        </div>

        {/*button cards*/ }
    <div style={{
      display: "flex", justifyContent: "center"
    }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 300px)",
          gap: "40px",
          paddingTop: "20px",
          maxWidth: "1100px",
          margin: "-20px auto 0",
          paddingTop: "20px",
          textAlign: "center", 
          }}>

            <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              gap: "20px",
              padding: "20px", 
              borderRadius: "15px", 
              backgroundColor: "#fdf4ed", 
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              cursor: "pointer",
              transform: hoveredCard === "recipes" ? "scale(1.05)" : "scale(1)"
            }}
            onMouseEnter={() => setHoveredCard("recipes")}
            onMouseLeave={() => setHoveredCard(null)}>
              
              <div style={{
                height: "250px",
                backgroundColor: "#ddd",
                marginBottom: "20px"
              }}> image goes here !!! 
              </div>
               <Link to="/recipes">
                  <button>View Recipes</button>
               </Link>
            </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px"}}>
              <div style={{
                height: "250px",
                backgroundColor: "#ddd",
                marginBottom: "20px"
              }}> image goes here !!! 
              </div>
                  <button onClick={() => setIsUploadOpen(true)}>Upload Recipe</button>

            </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px"}}>
              <div style={{
                height: "250px",
                backgroundColor: "#ddd",
                marginBottom: "20px"
              }}> image goes here !!! 
              </div>
                <Link to="/bin">
                  <button>Open Bin</button>
                </Link>
              </div>
            </div>
          </div>
            {/*conversion */}
            <button
            onClick={() => setShowConversion(true)}
            style={{
              position: "fixed",
              bottom: "20px",
              left: "20px",
              borderRadius: "20px",
              padding: "10px 16px"
            }}>Conversion Tool 
            </button>

            {showConversion && (
              <div style={{
                position: "fixed",
                bottom: "90px",
                left: "20px",
                width: "300px",
                padding: "20px",
                backgroundColor: "black",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}>
                <button onClick={() => setShowConversion(false)}>X</button>
                <h3>Conversion tool :3</h3>
              </div>
            )}

            {isUploadOpen && uploadModal == null &&  (
              <div
                onClick={()=> setIsUploadOpen(false)}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "rgba(0,0,0,0.4)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1000
                }}
              >
                <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  backgroundColor: "white",
                  padding: "30px",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  minWidth: "300px",
                  position: "relative"

                }}
              >
                <button
                  onClick={() => setIsUploadOpen(false)}
                  style={{
                    position: "absolute",
                    top: "10px", right: "10px",
                    background: "transparent",
                    border: "none",
                    fontSize: "18px",
                    cursor: "pointer"
                  }}>
                    ✕
                  </button>
                <h3>How would you like to upload?</h3>

                <button 
                onClick={() => setUploadModal("AI")}
                style={{ padding: "10px"}}
                >
                  Use AI </button>

                <button
                onClick={() => setUploadModal("extractor")}
                style={{ padding: "10px"}}
                > 
                  Try Extractor (beta) </button>

                </div>

              </div>


            )}

            {uploadModal !== null && (
              <div
              onClick={() => {
                setUploadModal(null);
                setIsUploadOpen(false);
              }}
              style={{
                position: "fixed",
                top: 0, left: 0, 
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.4)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000
              }}>
                <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  backgroundColor: "white",
                  padding: "30px",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  minWidth: "320px",
                  position: "relative"
                }}>
                  <button
                  onClick={() => {
                    setUploadModal(null);  setIsUploadOpen(false);
                  }}
                  style={{
                    position: "absolute",
                    top: "10px", right: "10px",
                    background: "transparent",
                    border: "none",
                    fontSize: "18px",
                    cursor: "pointer"
                  }}>
                    ✕
                    </button>
                  <h3>
                    {uploadModal === "AI" ? "Upload with AI" : "Upload with Extractor"}
                  </h3>
                  <input type="file" />
                  <button
                  style={{
                    backgroundColor: "darksalmon",
                    color: "white",
                    border: "none",
                    padding: "10px",
                    borderRadius: "6px",
                    cursor: "pointer"
                  }}>
                    Upload Recipe
                  </button>
                  <button
                    onClick={() => setUploadModal(null) }
                    style={{ padding: "8px"}}>
                      Back
                    </button>

                </div>
              </div>
            )}

          </div>

    );
}
export default Home