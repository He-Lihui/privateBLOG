import {Avatar,Divider} from 'antd'
import {
    QqCircleFilled,
    WeiboCircleFilled
  } from '@ant-design/icons'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="../static/img/touxiang.jpg"/></div>
            <div className="author-introduction">
                当红女明星，专注于马克思主义中国化研究。
                <Divider>社交账号</Divider>
                    <QqCircleFilled  className="author-icon"/>
                    <WeiboCircleFilled className="author-icon"/>
            </div>
        </div>
    )

}

export default Author