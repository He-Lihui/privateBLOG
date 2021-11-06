import React, {useEffect, useState} from 'react'
import { Button, Space, List, Modal, Message, Grid } from '@arco-design/web-react';
import { IconDelete,IconCalendarClock,IconStar } from '@arco-design/web-react/icon';

import axios from 'axios';
import servicePath from '../config/apiUrl';

const Row = Grid.Row
const Col = Grid.Col

function ArticleList(props) {
    const [list,setList] = useState([])

    useEffect(() => {
      getLsit()
      console.log(list)
    }, [])

    const getLsit = () =>{
      axios({
          method:'GET',
          url: servicePath.getArticleList,
          withCredentials: true
      }).then(
        res => {
          setList(res.data.list)
        }
        )
    }
    const delArticle = (id)=> {
      Modal.confirm({
        title: 'Confirm deletion',
        content:
          'Are you sure you want to delete the selected items? Once you press the delete button, the items will be deleted immediately. You can’t undo this action.',
        okButtonProps: { status: 'danger' },
        onOk: () => {
          axios({
            url:servicePath.deleteAticle+id,
            withCredentials:true
          }).then(
            res=>{
              Message.success('文章删除成功！')
              getLsit()
            }
          )

        },
      });
    }

    const updateAricle = (id) => {
      props.history.push('/index/add/'+ id)
    }
    return (
        <div>
          <List
    className='list-demo-action-layout'
    // wrapperStyle={{ maxWidth: 830 }}
    bordered={false}
    pagination={{
      pageSize: 5,
    }}
    dataSource={list}
    render={(item, index) => (
      <List.Item
        key={index}
        style={{ padding: '20px 0', borderBottom: '1px solid var(--color-fill-3)' }}
        actionLayout='vertical'
        actions={[
          <span key={2}>
           <IconStar style={{ fontSize: 16, color: '#ffcd00' }} /> {item.typename}
          </span>,
          <span key={3}>
            <IconCalendarClock /> {item.addTime}
          </span>,
        ]}
        extra={
            <Space
              style={{marginTop:20}}
            >
                <Button
                  size='large'
                  type='primary'
                  onClick={() =>{updateAricle(item.id)}}
                >编辑</Button>
                <Button
                onClick={() =>{ delArticle(item.id)}}
                  icon={<IconDelete />}
                  size='large'
                  type='primary'
                  status='danger'
                >删除</Button>
            </Space>
        }
      >
        <List.Item.Meta
        style={{color:'#165DFF',fontSize:20}}
          title={item.title}
        />
        <List.Item.Meta  
          style={{marginRight:20}}
          description={item.introduce}
        />
      </List.Item>
    )}
  />
        </div>
    )
}

export default ArticleList