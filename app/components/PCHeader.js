import React from 'react';
import  { BrowserRouter as StaticRouter, Router, Switch, Route, Link } from 'react-router-dom';
import  createBrowserHistory from 'history/createBrowserHistory';
const   customHistory = createBrowserHistory();

import { Row, Col } from 'antd';
import {Menu,Icon,Tabs,Message,Form,Input,Button,CheckBox,Modal,message} from 'antd';

const FormItem=Form.Item;
const SubMenu=Menu.SubMenu;
const TabPane=Tabs.TabPane;
const MenuItemGroup=Menu.ItemGroup;

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
class PCHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            hasLogined:false,
            action:'login',
            userNickName:'kurousaki',
            modalVisible:true,
            userId:0
        }
    }
	setModalVisible(value){
		this.setState({
			modalVisible:value
		})
	}
	handleClick(e){
		if(e.key=="register"){
			this.setState({current:'register'});
			this.setModalVisible(true)
		}else{
			this.setState({
				current:e.key,
			})		
		}

	}
	handleSubmit(e){
		e.preventDefault();//阻止提交表单
		let myFetchOptions={
			method:'GET'
		}
		let formData=this.props.form.getFieldsValue();
		console.log(formData);
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
		+ "&username="+formData.userName+"&password="+formData.password
		+"&r_userName=" + formData.r_userName + "&r_password="
		+ formData.r_password + "&r_confirmPassword="
		+ formData.r_confirmPassword, myFetchOptions)
		.then(response => response.json())
		.then(json => {
			this.setState({userNickName: json.NickUserName, userid: json.UserId});
			localStorage.userid= json.UserId;
			localStorage.userNickName = json.NickUserName;
		});
		if (this.state.action=="login") {
			this.setState({hasLogined:true});
		}
		message.success("请求成功！");
		this.setModalVisible(false);
	};
	callback(key) {
		if (key == 1) {
			this.setState({action: 'login'});
		} else if (key == 2) {
			this.setState({action: 'register'});
		}
	};
	logout(){
		localStorage.userid= '';
		localStorage.userNickName = '';
		this.setState({hasLogined:false});
	};
    render() {
    	const {getFieldProps, getFieldDecorator} = this.props.form;  // 用于接收页面参数
    	const userShow=this.state.hasLogined ?
	    	(<Menu.Item key="logout" className="register">
	    		<Button type="primary" htmlType="button">
	    			{this.state.userNickName}
	    		</Button>
	    		&nbsp;&nbsp;
	    		{
	    			<Button type="dashed" htmlType="button">
						{
							<Router history={customHistory}>
						        <Link to="god">
						            个人中心
						        </Link>
							</Router>
						}
					</Button>	
		    	}
	    		&nbsp;&nbsp;
	    		<Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
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
						</Menu>
						<Modal 
							title="用户中心" 
							wrapClassName="vertical-center-modal" 
							visible={this.state.modalVisible}
							onCancel={()=>this.setModalVisible(false)}
							onOk={()=>this.setModalVisible(false)}
							okText="关闭"
						>
							<Tabs type="card" onChange={this.callback.bind(this)}>
								<TabPane tab="登录" key="1">
									<Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
										<FormItem label="账户">
											<Input placeholder="请输入您的账号" {...getFieldProps('userName')}/>
										</FormItem>
										<FormItem label="密码">
											<Input type="password" placeholder="请输入您的密码" {...getFieldProps('password')}/>
										</FormItem>
										<Button type="primary" htmlType="submit">登录</Button>
									</Form>
								</TabPane>
								<TabPane tab="注册" key="2">
									<Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
										<FormItem label="账户">
											<Input placeholder="请输入您的账号" {...getFieldProps('r_userName')}/>
										</FormItem>
										<FormItem label="密码">
											<Input  type="password" placeholder="请输入您的密码" {...getFieldProps('r_password')} />
										</FormItem>
										<FormItem label="确认密码">
											<Input type="password"  placeholder="请再次输入您的密码" {...getFieldProps('r_confirmPassword')} />
										</FormItem>
										<Button type="submit" htmlType="submit">注册</Button>
									</Form>
								</TabPane>
							</Tabs>
						</Modal>
					</Col>
					<Col span={2}></Col>
				</Row>
		</header>)
    }
}

export default PCHeader = Form.create({})(PCHeader);

