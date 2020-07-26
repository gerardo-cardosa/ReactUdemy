import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import Conver from './Convert';

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  const [debauncedText, setDebouncedText] = useState(text);

  useEffect(()=>{
    const timerID = setTimeout(()=>{
        setDebouncedText(text);
    },500);

    return ()=>{
        clearTimeout(timerID);
    }

  },[text]);

  useEffect(()=>{


  },[debauncedText]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        label="Select a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">
            Output
      </h3>
      <Conver 
        text={debauncedText}
        language={language}
      />
    </div>
  );
};

export default Translate;
