"use strict"
import indexmodule from "../models/moudle";
const indexController={
    index(){
        return async(ctx,next)=>{
            ctx.body = await ctx.render('thumb',{
                title:'大拇指点赞页面',
                user: {
                  name: 'fundon',
                  email: 'cfddream@gmail.com'
                }
            })
        }
    },
    update(){
        return async(ctx,next)=>{
            const indexM=new indexmodule();
            const data = await indexM.updatenum();
            ctx.body = data;
                }
        }
    }


export default indexController;