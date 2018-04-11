/**
 * Created by zhangguangpeng on 2018/4/10.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive'
import Index from './components/index'


export default class Root extends React.Component {
    render() {
        return (
            <div>
                <Index/>
            </div>
    );
    };
}
ReactDOM.render(
<Root/>, document.getElementById('mainContainer'));
