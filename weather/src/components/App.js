import React from 'react';
import SearchBar from '../containers/search_bar';


class App extends React.Component{

    render(){
        return(
            <div className="container">
                <SearchBar />
            </div>
        );        
    }
}

export default App;