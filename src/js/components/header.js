/**
 * Created by zhangguangpeng on 2018/4/10.
 */
import React from 'react';
import {Row, Col} from 'antd'

export default class Header extends React.Component{

    render(){
        return(
            <div id="mobileheader">
                <header>
                    <img src="./src/images/ic_launcher.png" alt="logo" />
                    <h3>KT50 Meter reading APP</h3>
                    <h3>1.0.0</h3>
                    <div class="line-1"></div>
                </header>
            </div>
        );
    };

}
