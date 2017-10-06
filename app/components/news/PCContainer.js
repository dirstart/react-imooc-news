import React from 'react';
import {Row,Col} from 'antd';

import {Tabs,Carousel} from 'antd';
const TabPane=Tabs.TabPane;

import NewsPCBlock from './PCBlock';
import NewsPCImage from './PCImage';

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
									<div><img src="../static/news_image/1.jpg"  alt=""/></div>
									<div><img src="../static/news_image/2.jpg"  alt=""/></div>
									<div><img src="../static/news_image/3.jpg"  alt=""/></div>
									<div><img src="../static/news_image/4.jpg"  alt=""/></div>
								</Carousel>
							</div>
							<NewsPCImage count={6} type="guoji" cardTitle="国际头条" width="400px" imageWidth="112px"></NewsPCImage>
						</div>
						<Tabs className="tabs-news">
							<TabPane tab="头条新闻" key="1">
								<NewsPCBlock count={22} type="top" width="100%" bordered="false"></NewsPCBlock>
							</TabPane>
							<TabPane tab="国际" key="2">
								<NewsPCBlock count={22} type="top" width="100%" bordered="false"></NewsPCBlock>
							</TabPane>
						</Tabs>
						<div>
							<NewsPCImage count={8}  type="guonei" width="100%" cardTitle="国内新闻"  imageWidth="132px"></NewsPCImage>
							<NewsPCImage count={16} type="yule"   width="100%" cardTitle="娱乐新闻"  imageWidth="132px"></NewsPCImage>
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		)
	}
}