import React from "react";
import ReactDom from "react-dom";

class HelloMessage extends React.Component{
  	render(){
		return <div>hello {this.props.name}</div>;	
	}
}

var mountNode = document.getElementById("app");
ReactDom.render(<HelloMessage name="jane" />,mountNode)
