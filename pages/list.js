import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState,useEffect} from 'react'
import { Button } from 'antd'
import {Row, Col, List, Breadcrumb} from 'antd'
import {
  BookTwoTone,
  DashboardTwoTone
} from '@ant-design/icons'
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import marked from 'marked'
import hljs from 'highlight.js'
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem'

import axios from 'axios'
import servicePath from '../config/apiUrl'
import link from 'next/link'


const MyList = (list) => {
  const [mylist, setMylist] = useState(list.data)
  useEffect(() => {
    setMylist(list.data)
  })

  const renderer = new marked.Renderer()
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    highlight: function(code) {
      return hljs.highlightAuto(code).value
    }
  })
  return (
    <div>
      <Head>
        <title>我的文章</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
      <div className="bread-div">
          <Breadcrumb>
            <BreadcrumbItem>
            <Link href="/">
              <a>首页</a>
            </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
                 我的文章
            </BreadcrumbItem>
          </Breadcrumb> 
      </div>
      <List
        header={<div>最新日志</div>}
        itemLayout="vertical"
        dataSource={mylist}
        renderItem={item => (
          <List.Item>
            <div className="list-title">
              <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                <a>{item.title}</a>
              </Link>
            </div>
            <div className="list-icon">
              <p><DashboardTwoTone />{item.addTime}</p>
              <p><BookTwoTone />  {item.typename}</p>
            </div>
            <div className="list-context"
              dangerouslySetInnerHTML={{__html:marked(item.introduce)}}
            ></div>  
          </List.Item>
    )}
  />    
      </Col>

      <Col className="comm-box" xs={0} sm={0} md={7} lg={5} xl={4}>
      <Author></Author>
      </Col>
    </Row>
    <Footer></Footer>
    </div>
  )
}

MyList.getInitialProps = async (context) => {
  let id = context.query.id
  const promise = new Promise((reslove) => {
      axios(servicePath.getListById + id)
      .then( res => {
        console.log('res',res.data)
        reslove(res.data)
      })
  })
  return await promise
}

export default MyList