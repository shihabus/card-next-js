import React from "react";
import "./index.css";
import Card from "./Card";
import data from "../data/data.json";

class Index extends React.Component {
  static async getInitialProps() {
    return { cards: data };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="../static/logo.png" className="static-logo" alt="log0" />
        </header>
        <div className="Grid">
          {this.props.cards.map(card => (
            <Card key={card.id}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Index;
