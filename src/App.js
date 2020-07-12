import React, { Component } from 'react'
import './App.css'
import {robots} from './robots'
import List from './List'
import SearchBox from'./SearchBox'





class App extends Component{
    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield: ''
        }
    }
   onsearchChange=(event)=>{

this.setState({searchfield: event.target.value})


   }
   render(){

    const filterRobots=this.state.robots.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

     return( <div>
        <h1>robots</h1>
        <SearchBox searchChange={this.onsearchChange}/>
     <List robots={filterRobots} /> 
     </div>)
      }
    }    
   

export default App