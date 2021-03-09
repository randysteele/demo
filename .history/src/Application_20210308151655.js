import React, {Component} from 'react'

class Application extends Component {
    // this will run when the Applicaiton component is instatniated 
    constructor(props){
        super(props);
    }

    componentWillMount(props, state){

    }

    componentDidMount(props, state){
        console.log(`Mounted with, ${props}, ${state} `)
    }

    render(){
        let name = "Randy";
       return (
       <div>
       <h1> 'Hello, World'</h1>
       <span>This is {name}</span>
       </div>
       )}

}
export default Application 