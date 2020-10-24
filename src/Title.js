import React,{Component} from 'react';

class Title extends Component{
    constructor(props){
        super();
        this.state = {
          editMode:false,
          text: props.children,
        };
        this.EditMode = this.EditMode.bind(this);
        this.TextMode = this.TextMode.bind(this);
        this.toggleMode = this.toggleMode.bind(this);
        this.updateComp = this.updateComp.bind(this);
    }

    updateComp(e){
        const target = e.target.parentNode.children[0];
        if(!target.value) return;
        this.setState(prevState=>({...prevState,text:target.value}))
        this.toggleMode();
        
    }

    toggleMode(){
        this.setState(prevState=>({editMode:!prevState.editMode}));
    }
    EditMode(){
        return <div style={{display:"flex"}}>
            <input defaultValue={this.state.text} />
            <button onClick={this.updateComp} className="Btn sm c5">OK</button>
        </div>
    }
    TextMode(){
        return <div style={{display:"flex"}}>
            <h3>{this.state.text}</h3>
            <img src="pencil.png" width="10px" height="10px"  onClick={this.toggleMode}/>
        </div>
    }

    render(){

        return(<div className="Title">
            {this.state.editMode? this.EditMode():this.TextMode()}
        </div>)
    }

}


export default Title;