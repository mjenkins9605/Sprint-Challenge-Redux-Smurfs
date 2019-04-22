import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, postSmurfs } from "../actions";
import Smurfs from "./Smurfs";
import SmurfsForm from './SmurfsForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Smurfs smurfs={this.props.smurfs} />
        <SmurfsForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    fetching: state.fetchingSmurfs,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  {
    getSmurfs,
    postSmurfs
  }
)
(App);
