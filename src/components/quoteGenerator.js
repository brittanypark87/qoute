import React from "react";
import quotes from "./quotes.json";
class QuoteGenerator extends React.Component {
       constructor(props) {
              super(props);
              this.state = {
                  randomIndex: 0
              }
              this.ask = this.ask.bind(this);
       }
       ask() {
             
                     this.setState({
                            randomIndex: Math.floor(Math.random() * 100),
                           });
              }
       render() {
          const quote = quotes[this.state.randomIndex]["quote"]
          const author = quotes[this.state.randomIndex]["author"];
          return (
                 <div>
                        <button id="btn" onClick = {this.ask}>New Quote</button>
                        <p id="quote1">{quote}</p>
                        <p id="author">{author}</p>
                 </div>
          );    
             
            
       }
};



export default QuoteGenerator;