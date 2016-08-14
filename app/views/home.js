var React = require('react');

export default class Home extends React.Component({
  render() {
    return (
      <div>
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

ReactDOM.render(
   React.createElement(Home, null),
  document.getElementbyId("container");
);
