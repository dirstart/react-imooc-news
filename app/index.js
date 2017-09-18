import React from 'react';
import ReactDOM from 'react-dom';
import PCHeader from './components/PCHeader.js';
import 'antd/dist/antd.css';

class Index extends React.Component{
	constructor(){
		super();
	}
	render(){
		return <div>
			<PCHeader />
		</div>
	}
}

ReactDOM.render(<Index />,document.getElementById("app"));
