import {Avatar,Divider} from 'antd'
import {
    QqCircleFilled,
    WeiboCircleFilled
  } from '@ant-design/icons'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://images.pexels.com/photos/4589729/pexels-photo-4589729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/></div>
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