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
		</div>
	}
}

ReactDOM.render(<Index />,document.getElementById("app"));
