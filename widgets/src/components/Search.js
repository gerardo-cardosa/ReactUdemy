import React, { useState, useEffect } from 'react';

const Search = () => {
    const [term, setTerm] = useState('');

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
    useEffect(()=>{
        console.log('Something something');
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term:</label>
                    <input className="input" 
                        value={term}
                        onChange={ e => setTerm(e.target.value)}
                    
                    />
                </div>
            </div>
        </div>
    )
}

export default Search;