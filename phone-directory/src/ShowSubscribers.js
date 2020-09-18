import React, { Component } from 'react';
import Header from "./Header";

import "./ShowSubscribers.css";
import {Link} from 'react-router-dom';
class ShowSubscribers extends Component {
  onDeletedClick=(subscriberId)=>
  {this.props.deleteSubscriberHandler(subscriberId);

  }
 render(){
    
//   let subscribers=[
//     {
//       id:1,
// name:"Naila",
// phone:"9999999"

//     },
//     {id:2,
//       name:"razia",
//       phone:"8888888"
//     }
// ]
  
                                                                                
    return (
      <div>
         <Header heading="phone directory"/>
         <div className="component-body-container">
        <Link to="/add"><button className="custom-btn add-btn">Add</button></Link>
         <div className="grid-container heading-container">
          <span className=" grid-item name-heading ">Name</span>
          <span className="  grid-item phone-heading">Phone</span>
     </div> 

{
this.props.subscribersList.map(sub =>{

 return <div key= {sub.id} className="grid-container"> 

    <span className="grid-item">{sub.name}</span>

    <span className="grid-item">{sub.phone}</span>

<span className="grid-item">
<button className="custom-btn dlt-btn" onClick={this.onDeletedClick.bind(sub.id)}>Delete</button>
</span>

  </div>
  }
  )
  
  }
      </div>
      </div>
    );
  }
}
 

export default ShowSubscribers;
/* TODO 5: Create 'App' as a class component which encompasses all other components in the following order:
  1. Header
  2. Password
  3. ProgressBar
  4. StrengthCriteria 
  Note: Write necessary import statement(s) too. 
  
  Also, remember to use 'React.Component' as the base class instead of 'Component' class. Don't worry. This is just an exceptional case in the DoSelect IDE that you are currently working on. At other places, you can write as you have learned, i.e., importing the { Component } as named import from 'react' package and then using 'Component' as the base class for a class component.
*/
// import React,{Component} from 'react';
// import Header from "./Header";
// import Password from "./Password";
// class App extends Component{
//     render()
//     {
//         return(
//             <div>
//             <Header/>
//             </div>
//             );
//     }
// }
//export default App;