import { Link } from "react-router-dom"; 
import { useState } from "react";
import jarImg from "../assets/jar.png";
import cakeImg from "../assets/cake1.png";
import potsImg from "../assets/potsnpans.png";

function Home(){
    const [showConversion, setShowConversion] = useState(false)
    const [isUploadOpen, setIsUploadOpen] = useState(false);
    const [uploadModal, setUploadModal] = useState (null);
    const [hoveredCard, setHoveredCard] = useState(null);
    const linkStyle = { 
      textDecoration: "none", 
      color: "inherit",
      display: "block"
    };

    const cardStyle = {
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        gap: "20px",
        padding: "20px", 
        borderRadius: "15px", 
        backgroundColor: "#fdf4ed", 
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        cursor: "pointer" 
      };

    const circleStyle = {
      position: "absolute",
      width: "240px",
      height: "240px",
      borderRadius: "50%",
      backgroundColor: "#efe2d6",
      opacity: 0.6,
      top: "52%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      filter: "blur(1px)",
      zIndex: 0
    };

    const buttonStyle = {
      color: "#fdf4ed",
      border: "none",
      padding: "12px 18px",
      borderRadius: "10px",
      fontWeight: "500",
      cursor: "pointer"
    };

    const imageBoxStyle = {
      height: "240px",
      width: "100%",
      borderRadius: "14px",
      backgroundColor: "#fdf4ed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      position: "relative"
    };

    const imgStyle = {
      maxWidth: "85%",
      maxHeight: "85%",
      objectFit: "contain",
      display: "block",
      transform:  "translateY(-6px)",
      position: "relative",
      zIndex:1
    };

    const primaryImgStyle = {
      ...imgStyle,
      maxWidth: "92%",
      maxHeight: "92%"
    }
      

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

              fontSize: "18px", 
              fontWeight: "600",
              color: "#fdf4ed"
          }}>Thyme Cabinet</div>
          <button
          style={{
            ...buttonStyle,
            backgroundColor: "#c57b57"
          }}>Log Out?</button>
        </div> 
        <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 20px 80px"
        }}>
        

        <div style={ {padding: "80px 0 40px", textAlign: "center"}}>
          <h1 style={{ fontSize: "35px", fontWeight: "600", color: "#303633", marginTop: "10px"}}>Hello User! whats cookin :3</h1>
          <p
          style={{
            marginTop: "10px", fontSize: "16px", color: "#5a615c", marginBottom: 0 }}>
              What would you like to do today?
            </p>
        </div>

        {/*button cards*/ }
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "40px",
          maxWidth: "980px",
          padding:"0 24px",
          width: "100%",
          margin: "0 auto ",
          textAlign: "center", 
          }}>
            <Link to="/recipes" style={linkStyle}>
            <div style={{ 
              ...cardStyle,
              transform: hoveredCard === "recipes" ? "scale(1.03)" : "scale(1)"
            }}
            onMouseEnter={() => setHoveredCard("recipes")}
            onMouseLeave={() => setHoveredCard(null)}>
                <div style={imageBoxStyle}>
                <div style={circleStyle}></div>
                <img src={jarImg} alt="Recipe jar" style={imgStyle} />
              </div>
              <h2 style ={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#303633",
                margin: 0
              }}>View Recipes</h2>

                  <button
                  style={{
                    backgroundColor: "#A1683A",
                    ...buttonStyle
                  }}>View Recipes</button>
            </div>
            </Link>
          <div style={{ 
            ...cardStyle,
            border: "2px solid #869d7a",
            boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
            transform: hoveredCard === "upload" ? "scale(1.03)" : "scale(1)"
          }}
          onMouseEnter={() => setHoveredCard("upload")}
          onMouseLeave={() => setHoveredCard(null)}>
              <div style={imageBoxStyle}>
                <div style={circleStyle}></div>
              <img src={cakeImg} alt="Recipe cake" style={imgStyle} />
              </div>
              <h2 style ={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#303633",
                margin: 0
              }}>Upload Recipes</h2>
                  <button 
                  onClick={() => setIsUploadOpen(true)}
                  style={{
                    backgroundColor: "#869d7a",
                    ...buttonStyle}}
                    >Upload Recipe</button> 

            </div>
          <div style={{ 
            ...cardStyle,
            transform: hoveredCard === "bin" ? "scale(1.03)" : "scale(1)"
            }}
            onMouseEnter={() => setHoveredCard("bin")}
            onMouseLeave={() => setHoveredCard(null)}>
              <div style={imageBoxStyle}>
                <div style={circleStyle}></div>
                <img src={potsImg} alt="Recipe bin" style={imgStyle} />
              </div>
              <h2 style ={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#303633",
                margin: 0
              }}>Open Bin</h2>
                <Link to="/bin" style={linkStyle}>
                  <button
                    style={{
                    backgroundColor: "#A1683A",
                    ...buttonStyle}}>
                      Open Bin</button>
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