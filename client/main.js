import React from 'react'
import ReactDOM from 'react-dom'


const APP = () => {
   return (
       <div>
          Huhuu
       </div>
   )
};

Meteor.startup(() => {
   ReactDOM.render(<APP />, document.getElementById('render-target'));
});