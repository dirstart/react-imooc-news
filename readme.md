#### 概述：用最新的版本的模块，参照imooc的视频写的基于react的新闻头条。

#### 关于加载图片的问题。经过现在的测试已经明白。
> 1.如果是在 css 中用url的形式写的，我们可以直接通过 webpack 中的 css-loader和 File-loader 完成。
2. 如果是在 react 组件或者在外部 .html文件里面采用  src  引入的话，都需要一个正确的路径。  必须要确保打包前后的路径是一致的，当然我们不能强行一致，在这里我还没有解决，todo。

#### 在antd中的Form的引用遇到了问题
`export default PCHeader = Form.create({})(PCHeader);`
在render()之前，我们使用的  `let {getFieldProps} = this.props.from;`，这里报错，原因是没有加上上面的那句话。
`Demo = Form.create({})(Demo)`,这里的`Form.create`方法会将 getFieldProps 添加到props上，必须先 Form.create

#### 因为教程的版本是`react-router 1`所引起的问题，我使用的是最新的`react-router-dom v4`，遍寻搜索引擎，运气不错，找到了解决方案：`https://stackoverflow.com/questions/44499919/the-context-router-is-marked-as-required-in-link-but-its-value-is-undefine`
> 大神写的解答Demo
```
import  { BrowserRouter as StaticRouter, Router, Switch, Route, Link } from 'react-router-dom';
import  createBrowserHistory from 'history/createBrowserHistory';
const   customHistory = createBrowserHistory();
<!-- 此后的结构这样写 -->
<Router history={customHistory}>
    <div>
        <Link to={'/.../' + linkName1}>
            {itemName1}
        </Link>
        <Link to={'/.../' + linkName2}>
            {itemName2}
        </Link>
    </div>
</Router>
```
从中也理解了Link的结构，实际上就是我们平时用到的 a 标签，在这里还默认设置了其为block，若想要在配合antd的按钮还需要改成`inline-block`或者将其包在按钮里面也行。

#### 今天在自己的瞎测试中算是又学到了一个新的知识
> div.ant-card-body和 .ant-card-body的优先级。这次的问题主要在于自己非常想要覆盖掉antd 的原样式，结果一直出问题（我笨以为在上周自己的实习工作中已经覆盖了无数的antd样式了，以为是轻而易举的），结果自己使用了半天，顺序也换了好多次，结果是优先级上出了问题。后来居上也是没用的。