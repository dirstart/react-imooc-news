import React from 'react';
import PCHeader from './PCHeader';
import PCFooter from './PCFooter';
import NewsPCContainer from './news/PCContainer';
import "../css/pc.less";


export default class PCIndex extends React.Component{
	render(){
		return (
			<div>
				<PCHeader></PCHeader>
				<NewsPCContainer></NewsPCContainer>
				<PCFooter></PCFooter>
			</div>
		)
	}
}