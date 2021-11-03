let ipUrl = 'http://127.0.0.1:7001/admin/'

let servicePath = {
    checkLogin: ipUrl + 'checkLogin/', // 登录验证
    getTypeInfo: ipUrl + 'getTypeInfo', // 获取类型数据
    addArticle: ipUrl + 'addArticle' , // 添加文章
    updateArticle: ipUrl + 'updateArticle'
}

export default servicePath