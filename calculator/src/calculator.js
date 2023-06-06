import React, { useState } from "react";

export default function Calculator() {
  
  const [num, setnum] = useState("");
  const [output, setoutput] = useState('');

  //   ---- calcuate function
  function calc(fn) {
    // eslint-disable-next-line
    return new Function("return " + fn)();
  }
  return (
    <div> 
      <div className="container">
        <div className="output" id="top">
          <p id="output">{num ? num : "Calcuate..."}</p>
          <input  id="ope" type="text" value={output}  disabled='disabled'/>
        </div>
        <br />
        <hr />
        <br />
        <div className="items">
          <div className="set" id="set1">
            <button className="item" id="ac" onClick={(e) => {
              setoutput("")
              setnum("")}}>
              AC
            </button>
            <button
              className="item box"
              id="one"
              value="1"
              onClick={(e) => {
                setnum(num + e.target.value);
              }}
            >
              1
            </button>
            <button
              className="item box"
              id="four"
              value="4"
              onClick={(e) => setnum(num + e.target.value)}
            >
              4
            </button>
            <button
              className="item box"
              id="seven"
              value="7"
              onClick={(e) => setnum(num + e.target.value)}
            >
              7
            </button>
            <button className="item">Null</button>
          </div>
          <div className="set" id="set2">
            <button
              className="item"
              id="cancel"
              onClick={(e) => {
                output ? setoutput("") : setnum(num.slice(0, -1));
              }}
            >
              DEL
            </button>
            <button
              className="item box"
              id="two"
              value="2"
              onClick={(e) => setnum(num + e.target.value)}
            >
              2
            </button>
            <button
              className="item box"
              id="five"
              value="5"
              onClick={(e) => setnum(num + e.target.value)}
            >
              5
            </button>
            <button
              className="item box"
              id="eight"
              value="8"
              onClick={(e) => setnum(num + e.target.value)}
            >
              8
            </button>
            <button
              className="item box"
              id="zero"
              value="0"
              onClick={(e) => setnum(num + e.target.value)}
            >
              0
            </button>
          </div>
          <div className="set" id="set3">
            <button
              className="item box"
              id="modelus"
              value="%"
              onClick={(e) => setnum(num + e.target.value)}
            >
              %
            </button>
            <button
              className="item box"
              id="three"
              value="3"
              onClick={(e) => setnum(num + e.target.value)}
            >
              3
            </button>
            <button
              className="item box"
              id="six"
              value="6"
              onClick={(e) => setnum(num + e.target.value)}
            >
              6
            </button>
            <button
              className="item box"
              id="niegn"
              value="9"
              onClick={(e) => setnum(num + e.target.value)}
            >
              9
            </button>
            <button
              className="item box"
              id="dot"
              value="."
              onClick={(e) => setnum(num + e.target.value)}
            >
              .
            </button>
          </div>
          <div className="set" id="set4">
            <button
              className="item box"
              id="dived"
              value="/"
              onClick={(e) => setnum(num + e.target.value)}
            >
              /
            </button>
            <button
              className="item box"
              id="product"
              value="*"
              onClick={(e) => setnum(num + e.target.value)}
            >
              *
            </button>
            <button
              className="item box"
              id="mines"
              value="-"
              onClick={(e) => setnum(num + e.target.value)}
            >
              -
            </button>
            <button
              className="item box"
              id="add"
              value="+"
              onClick={(e) => setnum(num + e.target.value)}
            >
              +
            </button>
            <button
              className="item"
              id="equal"
              onClick={(e) => {
                try{
                let out = calc(num);
                setoutput(out);
                }
                catch(err){
                  setoutput('Error..')
                }
              }}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
