import React, {useState} from 'react'
import { Layout, Menu, Breadcrumb, Button, Message } from '@arco-design/web-react';
import { IconHome, IconCalendar, IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';
import '../static/css/adminIndex.css'
import { Route } from 'react-router-dom';
import AddArticle from './AddArticle';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

function AdminIndex () {
  const [collapsed,setCollapsed] = useState(false)

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
          <div className='logo' />
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
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
              <Breadcrumb.Item>工作台</Breadcrumb.Item>
              <Breadcrumb.Item>123</Breadcrumb.Item>
            </Breadcrumb>
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