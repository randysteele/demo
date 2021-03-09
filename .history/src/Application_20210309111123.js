import React, {Component} from 'react'

class Application extends Component {
    // this will run when the Applicaiton component is instatniated 
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    componentWillMount(props, state){
    }

    componentDidMount(props, state){
        console.log(`Mounted with, ${props}, ${state} `)
    }
    

    render(){
        let {count} = this.state;
        let name = "Randy";
       return (
       <div>
       <h1> 'Hello, {name}, you clicked the button {count} times'</h1>
       <span>This is {name}
       <button Click ME ></button>
       </span>
       </div>
       )}

}
export default Application 