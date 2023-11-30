import React from "https://esm.sh/react"
import ReactDOM from "https://esm.sh/react-dom"
//import { Provider, connect } from "https://esm.sh/react-redux"
//import { createStore, combineReducers, applyMiddleware } from "https://esm.sh/redux"
//import thunk from "https://esm.sh/redux-thunk"

//import rootReducer from './redux/reducers'

const quotes = () => {
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    });
    //.then(function(data) {
    //  console.log(data);
    //});
  }
  console.log(quotes);

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div id="quote-box">
                <p id="text">{this.quotes[0].text}</p>
                    <p id="author">{quotes[0].author}</p>
                    <button id="new-quote">New Quote</button>
                    <a id="tweet-quote">tweet this</a>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);