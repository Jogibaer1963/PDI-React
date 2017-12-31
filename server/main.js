import { Meteor } from 'meteor/meteor';
import ReactDOM from "react-dom";

Meteor.startup(() => {
  // code to run on server at startup
    ReactDOM.render(<APP />, document.getElementById('render-target'));
});
