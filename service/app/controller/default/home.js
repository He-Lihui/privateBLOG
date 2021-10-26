'use strict';

const Controller = require('egg').Controller

class HomeController extends Controller{

    async index(){
        //获取用户表的数据
        this.ctx.body='result'
    }
    async getArticleList() {
        let sql = 'SELECT article.id as id ,' +
                  'article.title as title ,' +  
                  'article.article_introduce as introduce ,' +  
                  "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addtime ," +  
                  'type.typename as typename ' +  
                  'FROM article LEFT JOIN type ON article.type_id = type.id'

        const res = await this.app.mysql.query(sql)
        this.ctx.body={data:res}
    }

    async getArticleById() {
        let id = this.ctx.params.id

        let sql = 'SELECT article.id as id ,' +
                  'article.title as title ,' +  
                  'article.article_introduce as introduce ,' +  
                  'article.article_content as article_content' +
                  "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addtime ," +  
                  'type.typename as typename,' +
                  'type.id as typeId,' +   
                  'FROM article LEFT JOIN type ON article.type_id = type.id,' + 
                  'WHERE article.id='+id

        const res = await this.app.mysql.query(sql)
        this.ctx.body={data:res}
    }

}
module.exports = HomeController;
