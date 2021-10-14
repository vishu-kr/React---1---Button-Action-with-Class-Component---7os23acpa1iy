import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {
		flag : false
		}
	};

	myfunc() {
		this.setState({
			flag : true
		})
	}

    render() {
    	return(
    		<div id="main">
				{this.state.flag && <p id ="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
				<button id ="click" onClick = {()=>this.myfunc() }>click</button>
				{ /* Do not remove this main div!! */ }
			
    		</div>
    	);
    }
}


export default App;

