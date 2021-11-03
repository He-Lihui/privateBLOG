'use srtict'

const Controller = require('egg').Controller

class MainController extends Controller {
    async index(){
        this.ctx.body="hi egg"
    }
    async checkLogin () {
        let userName = this.ctx.request.body.userName
        let password = this.ctx.request.body.password
        
        const sql = " SELECT userName FROM admin_user WHERE userName = '"+userName +
                    "' AND password = '"+password+"'"
        const res = await this.app.mysql.query(sql)
        if(res.length > 0) {
            let openId = new Date().getTime()
            this.ctx.session.openId={'openId': openId}
            this.ctx.session.userName={'userName': userName}
            this.ctx.body = {'data':'登录成功','openId':openId,'userName': userName}
        } else {
            this.ctx.body = {'data':'登录失败'}
        }

    }

    async getTypeInfo() {
        const res = await this.app.mysql.select('type')
        this.ctx.body={data: res}
    }

    async addArticle() {
        let tempArticle = this.ctx.request.body
        const res = await this.app.mysql.insert('article',tempArticle)
        const insertSuccess = res.affectedRows === 1
        const insertId= res.insertId

        this.ctx.body={
            isSuccess : insertSuccess,
            insertId : insertId
        }
    }

    async updateArticle() {
        let temArticle = this.ctx.request.body

        const res = await this.app.mysql.update('article',temArticle)
        const updateSuccess = res.affectedRows === 1
        this.ctx.body={
            isSuccess:updateSuccess
        }
    }
}

module.exports = MainController