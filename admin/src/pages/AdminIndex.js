import React, {useState, useEffect} from 'react'
import { Layout, Menu, Breadcrumb, Button, Message,Grid, Space } from '@arco-design/web-react';
import { IconHome, IconCalendar, IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';
import '../static/css/adminIndex.css'
import { Route  } from 'react-router-dom';
import AddArticle from './AddArticle';
import ArticleList from './ArticleList';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Row = Grid.Row;
const Col = Grid.Col;
const Sider = Layout.Sider;
const Footer = Layout.Footer;
const Content = Layout.Content;

function AdminIndex (props) {
  const username =  localStorage.getItem('userName')
  const [collapsed,setCollapsed] = useState(false);
  const [userName, setUserName] = useState(username);
  
  const handleCollapsed = (collapsed) => {
    setCollapsed(collapsed)
  };
  const handlerClickArticle=(key)=> {
    if(key === 'addArticle'){
      props.history.push('/index')
    } else if(key === 'articleList') {
      props.history.push('/index/list')
    }
  }
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
            style={{ width: '100%' }}
            onClickMenuItem={handlerClickArticle}
          >
            <MenuItem key='0_1'>
              <IconHome />
              工作台
            </MenuItem>
            <SubMenu
              key='1'
              // onClick={handlerClickArticle}
              title={
                <span>
                  <IconCalendar />
                  文章管理
                </span>
              }
              {...props}
            >
              <MenuItem key='addArticle'>添加文章</MenuItem>
              <MenuItem key='articleList'>文章列表</MenuItem>
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
                    <Route path="/" exact component={AddArticle}/>
                    <Route path="/index" exact component={AddArticle}/>
                    <Route path="/index/list" exact component={ArticleList}/>
                </div>
          </Content>
          <Footer>Arco Design</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }

export default  AdminIndex