var React = require('react');

export default class Home extends React.Component({
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
