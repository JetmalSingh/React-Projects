import { useState } from "react"
function App() {
  const [color, setColor] = useState("white")
  return (
    <div 
     style={{color:"white",backgroundColor:color, height:"100vh",widows:"30px", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", height:"60px",padding:"15px",gap:"10px", borderRadius:"20px"}}>
      <button onClick={() => setColor("red")}
  style={{
    backgroundColor: "red",
    borderRadius: "50%",
    border: "1px solid black",
    height: "60px",
    width: "60px",
    color: "white",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  }}
>
 Red
      </button>
      <button onClick={() => setColor("green")}
  style={{
    backgroundColor: "green",
    borderRadius: "50%",
    border: "1px solid black",
    height: "60px",
    width: "60px",
    color: "white",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  }}
>
 Green
      </button>
      <button onClick={() => setColor("blue")}
  style={{
    backgroundColor: "blue",
    borderRadius: "50%",
    border: "1px solid black",
    height: "60px",
    width: "60px",
    color: "white",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  }}
>
 Blue
      </button>
      <button onClick={() => setColor("olive")}
  style={{
    backgroundColor: "olive",
    borderRadius: "50%",
    border: "1px solid black",
    height: "60px",
    width: "60px",
    color: "white",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  }}
>
 Olive
      </button>
      <button onClick={() => setColor("yellow")}
  style={{
    backgroundColor: "yellow",
    borderRadius: "50%",
    border: "1px solid black",
    height: "60px",
    width: "60px",
    color: "black",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  }}
>
 Yellow
      </button>
      <button onClick={() => setColor("pink")}
  style={{
    backgroundColor: "pink",
    borderRadius: "50%",
    border: "1px solid black",
    height: "60px",
    width: "60px",
    color: "black",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  }}
>
 Pink
      </button>
      <button onClick={() => setColor("purple")}
  style={{
    backgroundColor: "purple",
    borderRadius: "50%",
    border: "1px solide black",
    height: "60px",
    width: "60px",
    color: "white",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  }}
>
 Purple
      </button>
      <button onClick={() => setColor("white")}
  style={{
    backgroundColor: "white",
    borderRadius: "50%",
    border: "1px solid black",
    height: "60px",
    width: "60px",
    color: "black",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  }}
>
 White
      </button>
      <button onClick={() => setColor("black")}
  style={{
    backgroundColor: "black",
    borderRadius: "50%",
    border: "1px solid white",
    height: "60px",
    width: "60px",
    color: "white",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  }}
>
 Black
      </button>
      </div>
    </div>
  )
}
export default App
