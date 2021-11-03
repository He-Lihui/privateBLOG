import React, {useState, useEffect} from 'react'
import { Layout, Menu, Breadcrumb, Button, Message,Grid, Space } from '@arco-design/web-react';
import { IconHome, IconCalendar, IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';
import '../static/css/adminIndex.css'
import { Route } from 'react-router-dom';
import AddArticle from './AddArticle';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Row = Grid.Row;
const Col = Grid.Col;
const Sider = Layout.Sider;
const Footer = Layout.Footer;
const Content = Layout.Content;

function AdminIndex () {
  const username =  localStorage.getItem('userName')
  const [collapsed,setCollapsed] = useState(false);
  const [userName, setUserName] = useState(username);
  
  const handleCollapsed = (collapsed) => {
    setCollapsed(collapsed)
  };
    return (
      <Layout className='layout-collapse-demo' style={{minHeight:'100vh'}}>
        <Sider collapsed={collapsed} 
               collapsible 
               onCollapse={handleCollapsed}  
               trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}
               breakpoint='xl'
        >
          <div className='logo'>
            {collapsed ? '' :"你好"+userName }
          </div>
          <Menu
            defaultOpenKeys={['1']}
            defaultSelectedKeys={['0_3']}
            onClickMenuItem={(key) =>
              Message.info({ content: `You select ${key}`, showIcon: true })
            }
          
            style={{ width: '100%' }}
          >
            <MenuItem key='0_1'>
              <IconHome />
              工作台
            </MenuItem>
            <MenuItem key='0_2'>
              <IconCalendar />
              添加文章
            </MenuItem>
            <SubMenu
              key='1'
              title={
                <span>
                  <IconCalendar />
                  文章管理
                </span>
              }
            >
              <MenuItem key='1_1'>添加文章</MenuItem>
              <MenuItem key='1_2'>文章列表</MenuItem>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Layout style={{ padding: '0 24px' }}>
          <Row>
            <Col span={18}>
              <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
              <Breadcrumb.Item>工作台</Breadcrumb.Item>
            </Breadcrumb>
            </Col>
            <Col  span={3} offset={3}>
             <Space style={{marginTop:10}}>
               <Button type='primary'>返回博客页</Button>
               <Button type='primary'>退出</Button>
             </Space>
            </Col>
          </Row>      
            <Content>
                <div>
                    <Route path="/index/" exact component={AddArticle}/>
                </div>
            </Content>
            <Footer>Arco Design</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }

export default  AdminIndex