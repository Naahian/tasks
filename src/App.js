import React, { Component } from 'react';
import Card from './Card'
import './App.css'; 
import './comps.css'

function uKey(){  return Math.round(Math.random()*10000)}


class App extends Component{

  constructor(props){
    super();
    this.state={
      cards:[{id:uKey(),
        title:"Work",
        text:[],
        priority:"#FFC72C"},
      ]
    }
    this.addSection = this.addSection.bind(this);
    this.deleteCard = this.deleteCard.bind(this);

  }

  addSection(e){
    const selectPriorirty = e.target.parentNode.querySelector("#color").value;
    if(selectPriorirty==="Priority") return;
    var temp = this.state.cards;
    temp.push({
      id:uKey(),
      title:"Sample",
      text:[],
      priority:selectPriorirty
    });
    this.setState({cards:temp});

  }

  deleteCard(e){
    const id = e.target.parentNode.id;
    console.log(id)
    this.setState(prev=>({cards:prev.cards.filter(elm=>{ return id!=elm.id;})}))
  }
  

  render(){


    return (<div className="App">

      <div className="inputForm">
        <div>
        <button className="Btn c5" onClick={this.addSection}>Add Section</button>
        <select id="color" className="Btn c4">
          <option value="Priority"> select Priorirty </option>
          <option value="#FF033E" style={{color:'#FF033E'}}> High </option>
          <option value="#FFC72C" style={{color:'#FFC72C'}}> Medium </option>
          <option value="#003399" style={{color:'#003399'}}> Low </option>
        </select>
        </div>
        <h1>tasks.</h1>
      </div>
      
      <div className="cardContain">
        {this.state.cards.map(elm=>{ 
          return(
          <Card title={elm.title} tasks={elm.text} priority={elm.priority} key={elm.id} id={elm.id} delete={this.deleteCard}/>)
        })}
      </div>

      
    </div>);
  }



}


export default App;
