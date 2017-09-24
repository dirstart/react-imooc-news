import React from 'react';
export default class MobileHeader extends React.Component{
	render(){
		return (<div id="mobile_header">
			<header>
				<img src="../../static/logo.png" alt="logo"/>
				<span>ReactNews</span>
			</header>
		</div>)
	}
}