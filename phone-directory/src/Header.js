// import React from'react';
// const Header=function()
// {
//     return (
//         <div className="header">
//           phone Directory
//         </div>
//     )
// }
// export default Header;
    
    // TODO 1: Create 'Header' as a functional component to display the heading text. Write necessary import statement(s) too.
import React from 'react';
const Header=function()
{ 
    const headerStyle={color:'white',
    background:'#000',
    padding:20,
    textAlign:'center',
    textTransform:'uppercase'};
     return(
        <div style={headerStyle}>
        Phone Directory
        </div>
        )
}
export default Header;