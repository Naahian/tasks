import React,{Component} from 'react'
import Title from './Title.js'
import Task from './task.js'


class Card extends Component {
    
    constructor(props){
        super();
        
        this.state={
            title: props.title,
            tasks: props.tasks,
            EditMode: false

        }
        this.toggleMode = this.toggleMode.bind(this);
        this.addTask = this.addTask.bind(this);
    }   

    addTask(e){
        const task = e.target.parentNode.children[0].value;
        if(!task) return;
        this.setState(prev=>({tasks:prev.tasks.concat(task)}));
        this.toggleMode();
    }
    toggleMode(){
        this.setState(prev=>({EditMode:!prev.EditMode})) 
    }
    
    inputForm(){
        return <div>
            <input type="text" />
            <button className="Btn sm c5" onClick={this.addTask}>add</button>
            <button className="Btn sm c3" onClick={this.toggleMode}>x</button>
        </div>
    }
    
    render() { 
        var style = { borderTop:"15px solid " + this.props.priority };

        return <div className="Card" style={style} id={this.props.id}>
            <img src="./cancel.png" className="deleteCard" onClick={this.props.delete}/>
           

            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <Title>{this.state.title}</Title>
                
            </div>
        <hr/>
            <div>
            {this.state.tasks.map(elm=>{return <Task>{elm}</Task>})}
            </div>

            <span>
                {this.state.EditMode? this.inputForm(): <p onClick={this.toggleMode}>+ add task</p>}
                
            </span> 
        </div>
    }
}
 
export default Card;