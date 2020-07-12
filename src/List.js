import React from 'react';
import Cards from './Cards';



const List=({robots}) =>{
    // looping
  const cardComponent = robots.map((user,i)=>{
      return  <Cards key={i} id-={robots[i].id} name={robots[i].name} email={robots[i].email} />
  })
    return(<div>
     {cardComponent }
</div> )
}

export default List;