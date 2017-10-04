import React from 'react';
import  { BrowserRouter as StaticRouter, Router, Switch, Route, Link } from 'react-router-dom';
import  createBrowserHistory from 'history/createBrowserHistory';
const   customHistory = createBrowserHistory();
// for Link
import {Icon,Modal,Tabs,Input,Form,Button,message} from 'antd';
const TabPane=Tabs.TabPane;
const FormItem=Form.Item;
class MobileHeader extends React.Component{
	constructor(){
		super();
		this.state={
			hasLogined:false,
			modalVisible:false,
			action:'login'
		}
	}

	setModalVisible(value){
		this.setState({
			modalVisible:value
		})
	}
	login(){
		this.setModalVisible(true);
	}
	handleSubmit(e){
		//页面开始向 API 进行提交数据
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET'
		};
		var formData= this.props.form.getFieldsValue();
		console.log(formData);
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
		+ "&username="+formData.userName+"&password="+formData.password
		+"&r_userName=" + formData.r_userName + "&r_password="
		+ formData.r_password + "&r_confirmPassword="
		+ formData.r_confirmPassword, myFetchOptions)
		.then(response => response.json())
		.then(json => {
			this.setState({userNickName: json.NickUserName, userid: json.UserId});
		});
		if (this.state.action=="login") {
			this.setState({hasLogined:true});
		}
		message.success("请求成功！");
		this.setModalVisible(false);
	}
	callback(key){
		if(key==='1'){
			this.setState({action:'login'})
		}else if(key==='2'){
			this.setState({action:'register'})
		}
	}
	render(){
		let {getFieldProps}=this.props.form;
		const userShow=this.state.hasLogined ?
			(<Router history={customHistory}>
		        <Link to="god">
    				<Icon type="inbox" />	
		        </Link>
			</Router>)
			:
			(<Icon type="setting" onClick={this.login.bind(this)} />)

		return (
			<div className="mobile-header">
				<header>
					<img src="../../static/logo.png" alt="logo"/>
					<span>ReactNews</span>
					{userShow}
				</header>
				{
					<Modal
						title="用户中心"
						wrapClassName="vertical-center-modal"
						visible={this.state.modalVisible}
						onCancel={() => this.setModalVisible(false)}
						onOk={() => this.setModalVisible(false)}
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
				}
			</div>
		)
	}
}

export default MobileHeader=Form.create({})(MobileHeader);