import React from 'react';
import { render } from 'react-dom';
import { Router, Link, Route ,browserHistory} from 'react-router';
import HelloHandler from './hello.js';
import Timer from './timer.js';
import SearchExample from './real-time-search.js';
let App = React.createClass({
  render() {
    return (
      <div className="nav">
        <Link to="/hello" className="hellolink">Say Hello</Link>
        <Link to="/timer" className="timerlink">Timer</Link>
        <Link to="/SearchExample" className="SearchExamplelink">SearchExample</Link>
        {this.props.children}
      </div>
    );
  }
});

let Timer2 = React.createClass({
  render() {
    return (
      <Timer start={Date.now()}/>
    );
  }
});
render(
  (<Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/hello" component={HelloHandler} />
      <Route path="/timer" component={Timer2}/>
      <Route path="/SearchExample" component={SearchExample}/>
    </Route>
  </Router>), document.getElementById('content'));