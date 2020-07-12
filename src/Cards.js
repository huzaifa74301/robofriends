import React from 'react'
import './Cards.css';


const cards = (props) => {
    const{name,email,id}=props;
    // we gave the name,email and id a specific property 
 
    return(
        <div className="card" >
            <img alt='robots'src={`https://robohash.org/${id}kvkccxkc`}></img>
            {/* by doing this $ sign thing i can get random images from the site */}
            <div className="info">
    <h2>{name}</h2>
    <p>{email}</p>
            </div>
        </div>
    );
}
export default cards