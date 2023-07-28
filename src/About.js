import React,{useState} from 'react';

class About extends React.Component {
    constructor(){
        super();
        this.state = {
            name:'Subhadeep'
        }
    }
    componentDidMount(){
        console.log('Did Mount');
    }
    render(){
        return(
            <div>
                <h1>About Us page Component</h1>
                <h1>{this.state.name}</h1>
                <button onClick={()=>{this.setState({name:'Dilip Ghosh'})}}>Change it</button>
            </div>
        )
    }
}

export default About;