let ipUrl = 'http://127.0.0.1:7001/default/'

let servicePath = {
    getArticleById: ipUrl + 'getArticleById/', // 详细页接口
    getArticleList: ipUrl + 'getArticleList',  // 首页接口
    getTypeInfo: ipUrl + 'getTypeInfo',
    getListById: ipUrl + 'getListById/'  // 根据文章列表获取文章id
}

export default servicePath