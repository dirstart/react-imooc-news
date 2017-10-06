import React from 'react';
import {Row,Col} from 'antd';
import {BrowserRouter as StaticRouter,Router,Switch,Route,Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();

export default class MobileList extends React.Component{
	constructor(){
		super();
		this.state={
			news:''
		}
	}
	componentWillMount(){
		let myFetchOptions={
			method:'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="
			+this.props.type+"&count="
			+this.props.count,myFetchOptions)
		.then(response=>response.json())
		.then(json=>this.setState({news:json}));
	}
	render(){
		const {news}=this.state;
		const newsList=news.length ?
			news.map((item,i)=>{
				return (<section key={i} className="mobile-section">
					<Router history={customHistory} >
						<Link to="test">
							<div className="mobile-section-img">
								<img src={item.thumbnail_pic_s} alt={item.title} />
							</div>
							<div className="mobile-section-text">
								<div className="text-title">{item.title}</div>
								<div className="text-p">
									<span className="channel">{item.realtype}</span>
									<span className="time">{item.date}</span>
								</div>
							</div>
						</Link>
					</Router>
				</section>)
			})
			:
			"没有加载任何新闻";

		return (
			<div className="mobile-list">
				<Row>
					<Col span={24}>
						{newsList}
					</Col>
				</Row>
			</div>
		)
	}
}