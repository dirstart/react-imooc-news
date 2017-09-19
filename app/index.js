import React from 'react';
import ReactDOM from 'react-dom';
import PCHeader from './components/PCHeader.js';
import 'antd/dist/antd.css';

import './css/pc.css';

class Index extends React.Component{
	constructor(){
		super();
	}
	render(){
		return <div>
			<PCHeader />
			<div className="image-test"></div>
			<img src="../static/45.jpg" />
		</div>
	}
}

ReactDOM.render(<Index />,document.getElementById("app"));
