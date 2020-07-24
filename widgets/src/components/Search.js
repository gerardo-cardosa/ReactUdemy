import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("Programming");
  const [results, setResults] = useState([]);


  /* First argument is a function.
       Second Argument controls when it is executed
       this argument is empty, empty array, array with vals
       [] = Runs at initial render
       nothing = runs at initial render and  after every
                 re-render
       [data] = Runs at initial render and after every
                re-render if data has changed since 
                last render
    */
  useEffect(() => {
    const search = async () => {
      const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    search();
  }, [term]);

  const renderResults = results.map((result) => {
      return (
            <div className="item" key={result.pageid}>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
                </div>
            </div>
      );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term:</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">
            {renderResults}
      </div>
    </div>
  );
};

export default Search;
