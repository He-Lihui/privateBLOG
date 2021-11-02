module.exports = options => {
    return  async function adminCheck(ctx, next){
        console.log("ctx.session.openId",ctx.session.openId)
         if(ctx){
             await next()
         } else {
             ctx.body={data:'没有登录或登录失效啦'}
         }
    }
}