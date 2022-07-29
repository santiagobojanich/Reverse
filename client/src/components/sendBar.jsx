import axios from "axios";
import { useState } from "react";
import { Card } from "./card";

export const SendBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);

  const textLoad = (e) => {
    setInputValue(e.target.value);
  };

  const sendWord = async () => {
    let resp = await axios.get(
      `http://localhost:3001/iecho?text=${inputValue}`
    );
    setResults([resp.data, ...results]);
  };

  return (
    <div>
      <div className="row ">
        <div className="col-12">
          <div className="bar">
            <input
              type="text"
              placeholder="Insert Text"
              className="form-control"
              onChange={textLoad}
            />
            <button className="btn btn-primary" onClick={sendWord}>
              Send
           </button>
          </div>
        </div>
      </div>
      
      <div className="container "> 
      <div className="row">
       
       <div className="background-result">
        <div className="result">
        <p> Results:</p>
        </div>
        <div className="box-result">
       {results.map( result => {
         return (
           <Card result={result}/>
           )
          })} 
        </div>
       </div>
          </div>
      </div>
    </div>
  );
};
