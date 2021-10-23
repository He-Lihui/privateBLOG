import React from 'react'
// import '../static/style/components/header.css'
import {Row,Col, Menu, Icon} from 'antd'
import {
    SmileOutlined,
    HeartOutlined,
    HomeOutlined
} from '@ant-design/icons'
const Header = () => (
    <div className="header">
    <Row type="flex" justify="center">
        <Col  xs={24} sm={24} md={10} lg={10} xl={10}>
            <span className="header-logo">山火</span>
            <span className="header-txt">一句话我还真不知道该怎么形容</span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                <HomeOutlined className="header-Icon"/>
                    首页
                </Menu.Item>
                <Menu.Item key="video">
                <HeartOutlined className="header-Icon"/>
                    文章
                </Menu.Item> 
                <Menu.Item key="life">
                    <Icon type="smile"/>
                    <SmileOutlined className="header-Icon"/>
                    生活
                </Menu.Item>
            </Menu>
        </Col>
    </Row>
 </div>
        
)
export default Header