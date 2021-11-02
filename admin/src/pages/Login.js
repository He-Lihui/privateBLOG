import React, { useState }from 'react'
import { Card,Input,Button,Spin,Space,Message,Carousel  } from '@arco-design/web-react';
import { IconUser,IconInfoCircle  } from '@arco-design/web-react/icon';
import '../static/css/login.css'
import Axios from 'axios';
import servicePath from '../config/apiUrl';

function Login (props) {


    const imageSrc = [
        '//cdn.pixabay.com/photo/2016/11/19/22/51/notebook-1841548_960_720.jpg',
        '//cdn.pixabay.com/photo/2017/03/27/13/32/lamps-2178743_960_720.jpg',
        '//cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg',
        '//cdn.pixabay.com/photo/2017/03/27/14/14/coffee-2179009_960_720.jpg'
      ];
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    const checkLogin=()=>{
        setIsLoading(true)
       if(!userName){
        Message.info('用户名不能为空哦')
        setTimeout( ()=> {
            setIsLoading(false)
        },500)
        return false
       } else if (!password) {
        Message.info('密码不能为空哦')
        setTimeout( ()=> {
            setIsLoading(false)
        },500)
        return false
       }
    const onkeydown = (e)=> {
        console.log(e.keyCode)
    }
       let dataProps = {
           'userName': userName,
           'password': password
       }

       Axios({
           method:'POST',
           url:servicePath.checkLogin,
           data: dataProps,
           withCredentials:true
       }).then(
           res=>{
            setIsLoading(false)
            if(res.data.data === "登录成功") {
                localStorage.setItem('openId', res.data.openId)
                localStorage.setItem('userName', res.data.userName)
                props.history.push('/index')
            } else {   
                setIsLoading(true)
                Message.info({ 
                    content: '用户名或密码不正确，登录失败', 
                    closable: true, 
                    duration: 2000,
                    onClose: ()=>{setIsLoading(false)}
                });
            }
           }
       )
    }
    return (
        <div className="login_wrapper">
        <Carousel
      autoPlay={{hoverToPause:false,interval:3000}}
      animation='fade'
      showArrow='never'
      moveSpeed='2000'
      style={{height:'100vh',width:'100%'}}
    >
      {imageSrc.map((src, index) => (
        <div key={index} style={{ width: '100%' }}>
          <img
            src={src}
            style={{
              width: '100%',
              height:'100%'
            }
            
            }
          />
        </div>
      ))}
    </Carousel>
    <div className="login-div">
            <Spin dot loading={isLoading}>
                <Card title="TianQin BLOG"
                    hoverable
                    style={{width:400}}
                >
                    <Space direction='vertical' size='large' style={{width:360}}>
                        <Input
                        id="userName"
                        prefix={<IconUser />}
                        placeholder='Please enter your username...'
                        size="large"
                        onChange={ (value) => {setUserName(value)}}
                        />
                    <Input.Password
                        id="password"
                        prefix={<IconInfoCircle />}
                        placeholder='Please enter your password...'
                        size="large"
                        onChange={ (value) => {setPassword(value)}}
                        />
                        <Button type='primary' long
                        onClick={checkLogin}
                        >Login In</Button>
                    </Space> 
                </Card>
            </Spin>
        </div>
    </div>
    )
}

export default Login 