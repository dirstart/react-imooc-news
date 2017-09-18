let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');


module.exports={
	entry:"./app",
	output:{
		path:path.resolve(__dirname,'./build/'),
		filename:'bundle.js'
	},
	module:{
		rules:[{
			test:/\.(js|jsx)$/,
			loader:'babel-loader',
			exclude:/node_modules/,
			include:path.resolve(__dirname,'app'),
			query:{
				presets:["react","es2015"]
			}
		},{
			test:/\.css$/,
			use:[{
				loader:'style-loader'
			},{
				loader:'css-loader'
			}]
		}]
	},
	devServer:{
		contentBase:"./",
		historyApiFallback:true,
		inline:true,
		// hot:true,
		port:"8080"
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:'Hello',
			template:path.resolve(__dirname,'index.html')
		})
	]
}