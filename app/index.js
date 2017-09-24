import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';

import MobileIndex from './components/MobileIndex';
import PCIndex from './components/PCIndex';

import 'antd/dist/antd.css';
class Index extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div>
				<MediaQuery query='(min-device-width:1224px)'>
					<PCIndex />
				</MediaQuery>
				<MediaQuery query='(max-device-width:1224px)'>
					<MobileIndex />				
				</MediaQuery>
			</div>
		)
	}
}

ReactDOM.render(<Index />,document.getElementById("app"));
