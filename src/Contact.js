import React,{useEffect,useState} from 'react';

function Contact(){

    const [name, setName]=useState('Subho');

    useEffect(()=>{
        console.log('using effect');
    })
    return(
        <div>
            <h1>Contact Us</h1>
            <h2>{name}</h2>
            <button onClick={()=>setName('Subhadeep Ghosh')}>Change It</button>
        </div>
    )
        
    
}

export default Contact;