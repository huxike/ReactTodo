import React,{Component} from 'react';
import "./ListItem.css"



class ListItem extends Component{
  OnTextClick = (event) =>{
    console.log(event.target.id)
   // this.props.changeItem(event)
   this.props.changeItem(event.target.id)
   this.forceUpdate();
 
  }

  constructor(props){
    super(props)
  }
  
  render(){
    const item = this.props.item;
    if(item.done){
      return (<p className="done-item">{item.content}</p>);
    } else{
      return (<p className="item" onClick={this.OnTextClick} id={item.content}>{item.content}</p>);
    }
  }
}




export default ListItem;