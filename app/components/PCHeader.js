import React from 'react';
import  { BrowserRouter as StaticRouter, Router, Switch, Route, Link } from 'react-router-dom';
import  createBrowserHistory from 'history/createBrowserHistory';
const   customHistory = createBrowserHistory();

import { Row, Col } from 'antd';
import {Menu,Icon,Tabs,Message,Form,Input,Button,CheckBox,Modal} from 'antd';

const FormItem=Form.Item;
const SubMenu=Menu.SubMenu;
const TabPane=Tabs.TabPane;
const MenuItemGroup=Menu.ItemGroup;

class PCHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            hasLogined:true,
            action:'login',
            userNickName:'kurousaki',
            modalVisible:false,
            userId:0
        }
    }
	
	handleClick(e){
		console.log('click',e);
		this.setState({
			current:e.key,
		})
	}
	handleSubmit(){

	}
    render() {
    	const {getFieldProps} = this.props.form;  // 用于接收页面参数
    	const userShow=this.state.hasLogined ?
	    	(<Menu.Item key="logout" className="register">
	    		<Button type="primary" htmlType="button">
	    			{this.state.userNickName}
	    		</Button>
	    		&nbsp;&nbsp;
	    		{
	    			<Button type="dashed" htmlType="button">
						<Router history={customHistory}>
					        <Link to="god">
					            个人中心
					        </Link>
						</Router>
					</Button>	
		    	}
	    		&nbsp;&nbsp;
	    		<Button type="ghost" htmlType="button">退出</Button>
	    	</Menu.Item>)
	    	:
	    	(<Menu.Item key="register" className="register">
	    		<Icon type="appstore" />注册/登录
	    	</Menu.Item>);
        return (<header>
				<Row>
					<Col span={2}></Col>
					<Col span={4}>
						<a href="/" className="logo">
							<img src="../../static/logo.png" alt="logo"/>
							<span>ReactNews</span>
						</a>
					</Col>
					<Col span={16}>
						<Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
							<Menu.Item key="top">
								<Icon type="appstore"/>头条
							</Menu.Item>
							<Menu.Item key="shehui">
								<Icon type="appstore"/>社会
							</Menu.Item>
							<Menu.Item key="guonei">
								<Icon type="appstore"/>国内
							</Menu.Item>
							<Menu.Item key="guoji">
								<Icon type="appstore"/>国际
							</Menu.Item>
							<Menu.Item key="yule">
								<Icon type="appstore"/>娱乐
							</Menu.Item>
							<Menu.Item key="tiyu">
								<Icon type="appstore"/>体育
							</Menu.Item>
							<Menu.Item key="keji">
								<Icon type="appstore"/>科技
							</Menu.Item>
							<Menu.Item key="shishang">
								<Icon type="appstore"/>时尚
							</Menu.Item>
							{userShow}
							<Modal title="用户中心" visible={this.state.modalVisible}>
								<Tabs type="card">
									<TabPane tab="注册" key="2">
										<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
											<FormItem label="账户">
												<input placeholder="请输入您的账号" />
											</FormItem>
											<FormItem label="密码">
												<input placeholder="请输入您的密码" />
											</FormItem>
											<FormItem label="确认密码">
												<input placeholder="请再次输入您的密码" />
											</FormItem>
										</Form>
									</TabPane>
								</Tabs>
							</Modal>
						</Menu>

					</Col>
					<Col span={2}></Col>
				</Row>
		</header>)
    }
}

export default PCHeader = Form.create({})(PCHeader);

