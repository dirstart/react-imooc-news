import React from 'react';
export default class MobileHeader extends React.Component{
	render(){
		return (<div className="mobile-header">
			<header>
				<img src="../../static/logo.png" alt="logo"/>
				<span>ReactNews</span>
			</header>
		</div>)
	}
}