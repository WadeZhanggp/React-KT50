/**
 * Created by zhangguangpeng on 2018/4/10.
 */
import React from 'react';
import {Row, Col} from 'antd'
import Header from './header'
import Footer from './footer'
import Body from './body'

export default class Index extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}