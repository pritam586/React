import { createContext, useState } from "react";
import run from "../config/Gimini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRencentPrompt] = useState("");
  const [prevPrompt, setPrevPrommpt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {

    setTimeout(function(){
        setResultData(prev=>prev+nextWord)
    },75*index)
  };
  
  const newChart = ()=>{
    setLoading(false)
    setShowResult(false)
  }

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
     let response ;
    if (prompt!== undefined) {
       response = await run(prompt)
       setRencentPrompt(prompt)
    }else{
        setPrevPrommpt(prev=>[...prev,input])
        setRencentPrompt(input)
        response = await run(input)
    }
   
    let responseArray = response.split("**");
    let newResponse = ""; // Initialize as an empty string

    for (let i = 0; i < responseArray.length; i++) {
      if (i % 2 === 0) {
        // Even indices are outside **
        newResponse += responseArray[i];
      } else {
        // Odd indices are inside **
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    // Replace * with line breaks
    let newResponse2 = newResponse.split("*").join("</br>");

    // Set the result

    // setResultData(newResponse2);

    let newResponseArray = newResponse2.split(" ");
    for(let i =0 ; i<newResponseArray.length;i++){
        const nextWord = newResponseArray[i];
        delayPara(i,nextWord+" ")
    }
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompt,
    setPrevPrommpt,
    onSent,
    setRencentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChart
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
