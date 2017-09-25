#### 概述：用最新的版本的模块，参照imooc的视频写的基于react的新闻头条。

#### 关于加载图片的问题。经过现在的测试已经明白。
> 1.如果是在 css 中用url的形式写的，我们可以直接通过 webpack 中的 css-loader和 File-loader 完成。
2. 如果是在 react 组件或者在外部 .html文件里面采用  src  引入的话，都需要一个正确的路径。  必须要确保打包前后的路径是一致的，当然我们不能强行一致，在这里我还没有解决，todo。

#### 在antd中的Form的引用遇到了问题
`export default PCHeader = Form.create({})(PCHeader);`
在render()之前，我们使用的  `let {getFieldProps} = this.props.from;`，这里报错，原因是没有加上上面的那句话。
`Demo = Form.create({})(Demo)`,这里的`Form.create`方法会将 getFieldProps 添加到props上，必须先 Form.create