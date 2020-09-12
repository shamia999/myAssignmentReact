import React, { Component } from 'react';
import Header from "./Header";

import "./App.css";
class App extends Component {
  render(){
  let subscribers=[
    {id:1,
name:"Naila",
phone:"9999999"

    },
    {id:2,
      name:"razia",
      phone:"8888888"
    }
]
  
                                                                                
    return (
      <div>
         <Header/>
         <div className="component-body-container">
           <button className="custom-btn add-btn">Add</button>
         <div className="grid-container heading-container">
          <span className=" grid-item name-heading ">Name</span>
          <span className="  grid-item phone-heading">Phone</span>
     </div> 
{
subscribers.map(sub =>{
 return <div key= {sub.id} className="grid-container"> 
    <span className="grid-item">{sub.name}</span>
    <span className="grid-item">{sub.phone}</span>
  </div>}
  )}
     
          



     </div>
      </div>
    );
  }
}
 

export default App;
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