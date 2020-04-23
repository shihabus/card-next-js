import React from "react";
import "./index.css";
import Card from "./Card";
import { bindActionCreators } from "redux";
import { initStore, initialCards, addItems } from "../store";
import withRedux from "next-redux-wrapper";

class Index extends React.Component {
  static async getInitialProps({ store }) {
    store.dispatch(initialCards());
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="../static/logo.png" className="static-logo" alt="log0" />
        </header>
        <div className="Grid">
          {this.props.cards.map(card => (
            <Card key={card.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ cards: state.cards });

const mapDispatchToProps = dispatch => ({
  initialCards: bindActionCreators(initialCards, dispatch),
  addItems: bindActionCreators(addItems, dispatch)
});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index);
