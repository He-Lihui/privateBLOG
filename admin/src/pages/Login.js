import React, { useState }from 'react'
import { Card,Input,Button,Spin,Space } from '@arco-design/web-react';
import { IconUser,IconInfoCircle  } from '@arco-design/web-react/icon';
import '../static/css/login.css'
import { last } from 'lodash';
function Login () {

    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    const checkLogin=()=>{
        setIsLoading(true)
        setTimeout( ()=> {
            setIsLoading(false)
        },2000)
    }
    return (
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
    )
}

export default Login 