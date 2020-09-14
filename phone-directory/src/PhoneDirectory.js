import React,{Component} from 'react';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import AddSubscriber from './AddSubscriber';
class PhoneDirectory extends Component
{
 constructor()
    { super();
        this.state=
        {
            subscribersList:[ 
                {
                id:0,
                name:'saliha',
                phone:'999999'

            },
            { id:1,
                name:'naila',
                phone:'555555'

            }]
        }
    }

    addSubscriberHandler=(newsubscriber)=>
    {
let subscribersList=this.state.subscribersList;
if(subscribersList.length>0)
{
    newsubscriber.id=subscribersList[subscribersList.length-1].id+1;
}
else
{
    newsubscriber.id=1;
}
subscribersList.push(newsubscriber);
this.setState({subscribersList:subscribersList});

    }
    render()
    {
        return(
           // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
         //  <ShowSubscribers subscribersList={this.state.subscribersList}/>
         
             <Router>
<div className="main-container">
                 <Route exact path="/" render={(props)=><ShowSubscribers {...props} subscribersList={this.state.subscribersList}/>}/>
                 <Route exact path="/add" render={({history},props) =><AddSubscriber history={history} {...props}  addSubscriberHandler={this.addSubscriberHandler}/>}/>
</div>
             </Router>
        )

    }
}
export default PhoneDirectory;
