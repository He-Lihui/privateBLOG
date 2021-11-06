module.exports = app => {
    const { router, controller} = app
    let adminCheck = app.middleware.adminCheck() 
    router.post('/admin/checkLogin',controller.admin.main.checkLogin)
    router.get('/admin/getTypeInfo',adminCheck,controller.admin.main.getTypeInfo)
    router.post('/admin/addArticle',adminCheck,controller.admin.main.addArticle)
    router.post('/admin/updateArticle',adminCheck,controller.admin.main.updateArticle)
    router.get('/admin/getArticleList',adminCheck,controller.admin.main.getArticleList)
    router.get('/admin/deleteAticle/:id',adminCheck,controller.admin.main.deleteAticle)
    router.get('/admin/getArticleById/:id',adminCheck,controller.admin.main.getArticleById)
}