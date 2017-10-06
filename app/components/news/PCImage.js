import React from 'react';
import {Card} from 'antd';
import {BrowserRouter as StaticRouter,Router,Switch,Route,Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();

export default class PCImage extends React.Component{
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
		const styleImage={
			display:"block",
			width:this.props.imageWidth,
			height:"90px"
		};
		const styleH3={
			width:this.props.imageWidth,
			whiteSpace:"nowrap",
			overflow:"hidden",
			textOverflow:"ellipsis"
		}
		const {news}=this.state;
		const newsList=news.length ?
			news.map((item,i)=>{
				return (<div key={i} className="image-block">
					<Router history={customHistory}>
						<Link to="haha" target="_blank">	
							<div className="custom-image">
								<img src={item.thumbnail_pic_s} style={styleImage} alt=""/>
							</div>
							<div className="custom-card">
								<h3 style={styleH3}>{item.title}</h3>
								<p>{item.author_name}</p>
							</div>
						</Link>
					</Router>
				</div>)
			}) 
			:
			"图片信息没有成功加载";
		return (
			<div className="top-news-list">
				<Card title={this.props.cardTitle} bordered={true} style={{width:this.props.width}}>
					{newsList}
				</Card>
			</div>
		)
	}
}