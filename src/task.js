import React,{Component} from 'react';

function uKey(){  return Math.round(Math.random()*10000)}

class Task extends Component {
    constructor(props){
    super();
        this.state = {
            id:0,
            task:'',
            checked:false,
            editMode:true
        }
        this.TaskBox = this.TaskBox.bind(this);
        this.updateComp = this.updateComp.bind(this);
    }



    updateComp(){
        this.setState(prev=>({checked:true}))
    }

    TaskBox(){
        return (this.state.checked)? <div>
            <img src="./check.svg" width="20px" height="20px"/>
             <p><strike>{this.props.children}</strike></p>
        </div>
        :
        <div>
            <img src="./uncheck.svg" width="20px" height="20px" onClick={this.updateComp}/>
             <p>{this.props.children}</p>
        </div>
    }

    render() { 
        return <div className="Task">
            {this.TaskBox()}       
        </div>;
    }
}
 
export default Task;