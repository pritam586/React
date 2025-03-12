import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-150"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-4 shadow-md bg-white px-3 py-2 rounded-xl">
            <button onClick={()=> setColor("red")}
             className="outline-none px-4 rounded-xl text-white" style={{backgroundColor:"red"}} 
            >Red</button>
            <button  onClick={()=> setColor("green")}
            className="outline-none px-4 rounded-xl text-white" style={{backgroundColor:"green"}} 
            >Green</button>
            <button  onClick={()=> setColor("blue")}
            className="outline-none px-4 rounded-xl text-white" style={{backgroundColor:"blue"}} 
            >Blue</button>
            <button  onClick={()=> setColor("yellow")}
            className="outline-none px-4 rounded-xl text-black" style={{backgroundColor:"yellow"}} 
            >Yellow</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
