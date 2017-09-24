import React from 'react';
import {Row,Col} from 'antd';
export default class PCFooter extends React.Component{
	render(){
		return (<footer>
			<Row>
				<Col span={2}></Col>
				<Col span={20} className="footer">
					&copy;&copy;2017 React New.All Rights Reserved.
				</Col>
				<Col span={2}></Col>
			</Row>
		</footer>)
	}
}