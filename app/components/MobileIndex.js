import React from 'react';
import MobileHeader from './MobileHeader';
import MobileFooter from './MobileFooter';
import "../css/mobile.less";
export default class MobileIndex extends React.Component{
	render(){
		return <div>
			<MobileHeader></MobileHeader>
			<MobileFooter></MobileFooter>
		</div>
	}
}