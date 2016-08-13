var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

ReactDOM.render(
  <Home />
  document.getElementbyId("container");
);
