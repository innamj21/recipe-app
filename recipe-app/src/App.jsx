function App() {
  return (
    <div style={{ 
      padding: "15px",
      minHeight: "100vh",
      position: "relative"}}>

      <h1>Hello User! </h1>
    
        
  <div style={{ 
    backgroundColor: "white",
    padding: "60px",
    display: "flex",
    gridTemplateColumns: "repeat(2, 250px)",
    justifyContent: "center",
    borderRadius: "10px",
    gap: "40px",
    width: "70vw",
    minHeight: "60vh",
    alignItems: "center",
    margin: "60px auto"     
  }}>
        <button style={{
          display: "flex",
          padding: "20px",
          fontSize: "20px",
          width: "250px",
          height: "150px",
          borderRadius: "10px",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
          }}>
        View Recipes
        </button>
        <button style={{
          display: "flex",
          padding: "20px",
          fontSize: "20px",
          width: "250px",
          height: "150px",
          borderRadius: "10px",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
          }}>
            Upload Recipe
            </button>
        <button style={{
          display: "flex",
          padding: "20px",
          fontSize: "20px",
          width: "250px",
          height: "150px",
          borderRadius: "10px",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
          }}>
            Conversion Tool
            </button>
        <button style={{
          display: "flex",
          padding: "20px",
          fontSize: "20px",
          width: "250px",
          height: "150px",
          borderRadius: "10px",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
          }}>
            Open Bin
            </button>
      </div>


      <button style={{ position: "absolute", bottom: "20px", left: "20px" }}>
        Log Out 
      </button>
    </div>
  );
}

export default App;
