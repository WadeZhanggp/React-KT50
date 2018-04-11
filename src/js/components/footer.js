/**
 * Created by zhangguangpeng on 2018/4/10.
 */
import React from 'react';
import { Menu, Icon ,Row, Col} from 'antd';

export default class Footer extends React.Component{
    render(){
        return(
            <footer class="footer">
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} >
                        &copy;&nbsp;Copyright ©2017 Hexing Electrical Co.Ltd . All Rights Reserved.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        );
    }
}
