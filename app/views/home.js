var { Router,
  Route,
  IndexRoute,
  IndexLink,
  Link } = ReactRouter;

  var destination = document.getElementById("container");

  var App = React.createClass({
    render: function() {
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

  var Home = React.createClass({
    render: function() {
      return (
        <div>
        <h2>HELLO</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>

        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>
      );
    }
  });

  var vetInfo = React.createClass({
    render: function() {
      return (
        <div>
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
        </div>
      );
    }
  });

  var litters = React.createClass({
    render: function() {
      return (
        <div>
        <h2>STUFF</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
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
    </Route>
    </Router>,
    destination
  );
