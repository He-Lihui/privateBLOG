import React,{useState, useEffect} from "react";
import marked from "marked";
import '../static/css/addArticle.css'
import { Input, Select, Grid, Button, DatePicker, Space, Notification } from "@arco-design/web-react";
import { IconBytedanceColor } from '@arco-design/web-react/icon';
import Axios from "axios";
import servicePath from "../config/apiUrl";


const Row = Grid.Row;
const Col = Grid.Col;
const Option = Select.Option
const TextArea = Input.TextArea

function AddArticle (props) {

    const [articleId,setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle,setArticleTitle] = useState('')   //文章标题
    const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
    const [introducemd,setIntroducemd] = useState()            //简介的markdown内容
    const [introducehtml,setIntroducehtml] = useState('等待编辑') //简介的html内容
    const [showDate,setShowDate] = useState()   //发布日期
    const [updateDate,setUpdateDate] = useState() //修改日志的日期
    const [typeInfo ,setTypeInfo] = useState([]) // 文章类别信息
    const [selectedType,setSelectType] = useState(1) //选择的文章类别
    console.log("--->",typeInfo)
    marked.setOptions({
        renderer: marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false
    })

    useEffect(()=> {
        getTypeInfo()
    },[])

    const changeContent = (value) => {
        setArticleContent(value)
        let html = marked(value)
        setMarkdownContent(html)
    }
    const changeIntroduce = (value) => {
        setIntroducemd(value)
        let html = marked(value)
        setIntroducehtml(html)
    }
    const getTypeInfo = () => {
        Axios({
            method:'GET',
            url:servicePath.getTypeInfo,
            withCredentials:true, 
        }).then(
            res =>{
                if(res.data.data ==="没有登录或登录失效啦"){
                Notification.warning({ title: 'Warning', content: res.data.data })
                localStorage.removeItem('openId')
                localStorage.removeItem('username')
                props.history.push('/login')
            } else {
                setTypeInfo(res.data.data)
            }
        })
    }
    return (
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10}>
                        <Col span={20}>
                            <Input
                                placeholder="博客标题"
                                size="large"
                                prefix={<IconBytedanceColor />}
                            />
                        </Col>
                        <Col span={4}>
                            <Select defaultValue={selectedType} size="large">
                                {
                                    typeInfo.map( (item, index) => {
                                        return (
                                            <Option key={index} value={item.id}>{item.typename}</Option>
                                        )
                                    })
                                }
                            </Select>
                        </Col>
                    </Row>
                    <Row gutter={10} style={{marginTop:20}}>
                        <Col span={12}>
                            <TextArea
                                className="markdown-content"
                                rows={35}
                                placeholder="在这里记录下你想记录的一切"
                                onChange={changeContent}
                            />
                        </Col>
                        <Col span={12}>
                            <div className="show-html"
                            dangerouslySetInnerHTML={{__html:markdownContent}}
                            >
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span="24">
                            <Space>
                                <Button size="large">暂存文章</Button>
                                <Button type="primary" size="large">发布文章</Button> 
                                <DatePicker placeholder="发布日期" size="large"></DatePicker>
                            </Space>
                        </Col>
                        <Col span={24} style={{marginTop:20}}>
                            <TextArea
                             rows={4}
                             maxLength={{ length: 150, errorOnly: true }}
                             showWordLimit
                             placeholder="简单的介绍一下你这篇文章叭~"
                             onChange={changeIntroduce}
                            >
                            </TextArea>
                            <br/>
                            <div className="introduce-html"
                                dangerouslySetInnerHTML={{__html:introducehtml}}
                            ></div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default AddArticle