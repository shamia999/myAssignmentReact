import React,{Component} from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import './Home.css';
import Header from "../../common/header/Header";
class Home extends Component{
    render()
    {
        return(
            <div>
                <Header/>
            </div>
        )
    }

}
export default Home;