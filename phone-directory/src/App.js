import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div>
        {/* <div className="header">
          phone Directory
    </div>
        <button>Add</button>
        <div>
          <span>Name</span><br/>
          <span>Phone</span>

        </div> */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="type here" defaultValue="naila"/>
      </div>
    );
  }
}

export default App;
