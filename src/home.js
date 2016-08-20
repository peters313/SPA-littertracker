import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, IndexLink, Link, browserHistory } from 'react-router'

// var { Router,
//   Route,
//   IndexRoute,
//   IndexLink,
//   Link } = ReactRouter;

  const destination = document.getElementById("container");

  const App = React.createClass({
    render() {
      return (
        <div>
        <h1>Litter Tracker</h1>
        <ul className="header">
        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        <li><Link to="/litters" activeClassName="active">Litters</Link></li>
        <li><Link to="/vetInfo" activeClassName="active">Vet Info</Link></li>
        </ul>
        <div className="content">
        {this.props.children}
        </div>
        </div>
      )
    }
  });

  const Home = React.createClass({
    render() {
      return (
        <div>
        <h2>Home</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
        </div>
      );
    }
  });

  const vetInfo = React.createClass({
    render() {
      return (
        <div>
        <h2>Vet Info</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
        </div>
      );
    }
  });

  const litters = React.createClass({
    render() {
      return (
        <div>
        <h2>Litters</h2>
        <p>Here you will be able to track you past litters</p>
        <ol>
        <li>Nulla pulvinar diam</li>
        <li>Facilisis bibendum</li>
        <li>Vestibulum vulputate</li>
        <li>Eget erat</li>
        <li>Id porttitor</li>
        </ol>
        </div>
      );
    }
  });

    const misc = React.createClass({
      render() {
        return (
          <div>
          <h2>Misc</h2>
          <p>Here is where you can put additional information on your page</p>
          <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
          </ol>
          </div>
        );
      }
    });

  ReactDOM.render(
    <Router>
    <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="litters" component={litters} />
    <Route path="vetInfo" component={vetInfo} />
    <Route path="misc" component={misc} />
    </Route>
    </Router>,
    destination
  );
