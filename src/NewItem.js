import React , {Component} from 'react';

class NewItem extends Component{
constructor(props){
    super(props)
    this.state={
        inputContent:''
    }
}

onInputChange=(event)=>{
    this.setState({
      inputContent:event.target.value
    })
    console.log(this.state.inputContent)
}

onAddbtnClick=()=>{
    this.props.addItem(this.state.inputContent)
    this.setState({
        inputContent:''
    })
}

  render(){
      return(
        <div>
            <input onChange={this.onInputChange} value={this.state.inputContent} />
            <button onClick={this.onAddbtnClick} >Add</button>
        </div>
      )
          
  }
}
export default NewItem;