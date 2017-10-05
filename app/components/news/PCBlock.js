import React from 'react';
import {Card} from 'antd';
import {BrowserRouter as StaticRouter,Router,Switch,Route,Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();

export default class PCBlock extends React.Component{
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
				return (<li key={i}>
					<Router history={customHistory}>			
						<Link to={`details/${item.uniquekey}`} target="_blank">
							{item.title}
						</Link>
					</Router>
				</li>)
			}) :
			"没有加载到任何新闻";
		return (
			<div className="top-news-list">
				<Card>
					<ul>
						{newsList}
					</ul>
				</Card>
			</div>
		)
	}
}