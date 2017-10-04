import React from 'react';
import {Row,Col} from 'antd';

import {Tabs,Carousel} from 'antd';
const TabPane=Tabs.TabPane;

export default class PCContainer extends React.Component{
	constructor(){
		super();
		this.state={

		}
	}
	render(){
		const settings={
			dots:true,
			infinite:true,
			speed:500,
			slidesToShow:1,
			autoplay:true
		};
		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20} className="container">
						<div className="left-container">
							<div className="carousel">
								<Carousel {...settings}>
									<div><img src="../static/news_image/1.jpg" width="400px" alt=""/>1</div>
									<div><img src="../static/news_image/2.jpg" width="400px" alt=""/>2</div>
									<div><img src="../static/news_image/3.jpg" width="400px" alt=""/>3</div>
									<div><img src="../static/news_image/4.jpg" width="400px" alt=""/>4</div>
								</Carousel>
							</div>
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		)
	}
}