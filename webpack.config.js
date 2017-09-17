let path=require('path');


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
		}]
	},
	devServer:{
		contentBase:"./",
		historyApiFallback:true,
		inline:true,
		// hot:true,
		port:"8080"
	}
}