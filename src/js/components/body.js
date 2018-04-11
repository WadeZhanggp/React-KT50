/**
 * Created by zhangguangpeng on 2018/4/10.
 */
import React from 'react';
import {
    Row,
    Col,
    Carousel,
    Button,
    Modal,
    //Toast
} from 'antd'

function info1() {
    Modal.info({
        title: 'HHU Program install/Upgrading',
        okText:'OK',
        content: (
            <div>
                <p>HHU Program install/Upgrading</p>
            </div>
        ),
        onOk() {},
    });
}

function info2() {
    Modal.info({
        title: 'HHU configuration',
        okText:'OK',
        content: (
            <div>
                <p>Before login to the APP, you need to configure the network ip and determine the connection service.</p>
                <p>1.Click to enter the APP login page</p>
                <p>2.Click the SERCER ADDRESS SETTING button to enter the service configuration page</p>
                <p>3.Enter ip, port and service and click the COMMUNICATION TEST button, If the icon above the button changes from white to green, the service configuration is successful</p>
            </div>
        ),
        onOk() {},
    });
}

function info3() {
    Modal.info({
        title: 'User Login',
        okText:'OK',
        content: (
            <div>
                <p>After the service configuration is successful, you can enter the user name and password to log in to the home page</p>
                <p>Notes: If you have successfully logged in to the app with a network, the next time you log in, you don’t need a network</p>
            </div>
        ),
        onOk() {},
    });
}

function info4() {
    Modal.info({
        title: 'Meter reading data download',
        cancelText:'OK',
        okText:'OK',
        content: (
            <div>
                <p>If you have a network environment, log in to the APP will automatically download the meter reading task，You can do the following：</p>
                <p>1.Pull down refresh data</p>
                <p>2.Pull up to load more data</p>
            </div>
        ),
        onOk() {},
    });
}

function info5() {
    Modal.info({
        title: 'HHU meter reading',
        cancelText:'OK',
        okText:'OK',
        content: (
            <div>
                <p>Go to the homepage and select the All order tab，The Completed/Total menu shows the number of tasks completed and the all number of tasks, If Completed is equal to Total, the task is completed，Otherwise, you need to click on the next page to complete the work order</p>
                <p>There are four states for each meter reading task，they are NONE, SUCCESS,FAIL,WARNING</p>
                <p>When all states are SUCCESS or WARNING, the work order task is completed</p>
                <p>If the ticket status is FAIL，Need to click on the red icon to enter the next page to select the state</p>
                <p>If it is a meter reading task, you can click to enter the manual meter reading, Then click Save.</p>
            </div>
        ),
        onOk() {},
    });
}

function info6() {
    Modal.info({
        title: 'Meter reading data upload',
        cancelText:'OK',
        okText:'OK',
        content: (
            <div>
                <p>If Completed is equal to Total, the task is completed, you can select the completed task to upload，
                    You can select all uploads in a unified way, or upload them individually</p>
            </div>
        ),
        onOk() {},
    });
}

function info7() {
    Modal.info({
        title: 'Meter reading work list rollback',
        cancelText:'OK',
        okText:'OK',
        content: (
            <div>
                <p>Meter reading work list rollback</p>
            </div>
        ),
        onOk() {},
    });
}

function info8() {
    Modal.info({
        title: 'Setting',
        cancelText:'OK',
        okText:'OK',
        content: (
            <div>
                <p>Click on the picture in the upper left corner of the home page, or right click to enter the sliding menu，Click setting to enter the settings page.</p>
                <p>The settings page has the following three function entries, namely Service Configuration, Serial Port Settings, Protocol Configuration.</p>
            </div>
        ),
        onOk() {},
    });
}

export default class Body extends React.Component{

    constructor(){
        super();
        this.state = {
            current: 1,
            modalVisible: false,
        };
    };

    render(){
        return(
            <div id="mobilebody">
                <h2 class="about">About Hexing</h2>
                <p class="content">Hexing, established in 1992, is a multi-national company offering variety of electrical equipment and relevant solution to global power utilities.

                    With more than two decades of industrial experiences, Hexing is dedicated to develop customized sustainable ecosystem for energy distribution companies including but not limited to micro-grid with renewable energy, distribution automation and smart meter to cash collection resulting in effective revenue protection.

                    Today, more than 80 countries across the world are utilizing Hexing products and solutions for better tomorrow.</p>
                <h2 class="about">About Meter reading APP</h2>
                <h3 class="content">Function introduction</h3>
                <Button class="content" key="1" onClick={info1}>1.HHU Program install/Upgrading</Button>
                <br />
                <br />
                <Button class="content" key="2" onClick={info2}>2.HHU configuration</Button>
                <br />
                <br />
                <Button class="content" key="3" onClick={info3}>3.User Login</Button>
                <br />
                <br />
                <Button class="content" key="4" onClick={info4}>4.Meter reading data download</Button>
                <br />
                <br />
                <Button class="content" key="5" onClick={info5}>5.HHU meter reading</Button>
                <br />
                <br />
                <Button class="content" key="6" onClick={info6}>6.Meter reading data upload</Button>
                <br />
                <br />
                <Button class="content" key="7" onClick={info7}>7.Meter reading work list rollback</Button>
                <br />
                <br />
                <Button class="content" key="8" onClick={info8}>8.Setting</Button>
                <br />
                <br />
                <div class="line-1"></div>

            </div>
        );
    };

}
