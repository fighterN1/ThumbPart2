"use strict"
import indexmodule from "../models/moudle";
const indexController={
    index(){
        return async(ctx,next)=>{
            ctx.body = await ctx.render('index',{
                title:'大拇指点赞'
            })
        }
    },
    update(){
        return async(ctx,next)=>{
            const indexM=new indexmodule();
            const data = await indexM.updatenum();
            ctx.body = data;
                }
        },
    thumb(){
         return async(ctx,next)=>{
            ctx.body = await ctx.render('thumb',{
                title:'拇指页面'
            })
        }
    }
}


export default indexController;