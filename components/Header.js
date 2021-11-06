import React, { useState, useEffect} from 'react'
import {Row,Col, Menu, Icon} from 'antd'
import Router from 'next/router'
import link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import {
    SmileOutlined,
    HeartOutlined,
    HomeOutlined
} from '@ant-design/icons'
const Header = () =>{

    const [navArr, setnavArr] = useState([])
    useEffect(() => {
        const getData = async () =>{
            const result = await axios(servicePath.getTypeInfo)
                .then((res)=>{
                    return res.data.data
                })
            setnavArr(result)
        }
        getData()
    },[])

    const handleClick = (e) => {
        if(e.key == 0){
            Router.push('/')
        } else {
            Router.push('/list?id='+ e.key)
        }
    }
      return  (
            <div className="header">
            <Row type="flex" justify="center">
                <Col  xs={24} sm={24} md={10} lg={10} xl={10}>
                    <span className="header-logo">山火</span>
                    <span className="header-txt">这真的是一个非常可爱的宝贝！</span>
                </Col>

                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal" onClick={handleClick}>
                        <Menu.Item key="0">
                        <HomeOutlined className="header-Icon"/>
                            首页
                        </Menu.Item>
                        {
                            navArr.map( (item) => {
                                return (
                                    <Menu.Item key={item.id}>
                                        <Icon type="smile"/>
                                        <SmileOutlined className="header-Icon"/>
                                             {item.typename}
                                        </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
                
        )
    }
export default Header