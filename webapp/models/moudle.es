 import rp from 'request-promise';
 class indexModel{
    constructor(ctx){
        this.ctx=ctx;
    }

    updatenum(){
        var options = {
             method:"get",
             url: 'http://localhost/php/Praise.php'
        }   
        return new Promise((resolve,reject)=>{
            rp(options).then(function (result) {            
                        const info = JSON.parse(result);
                        if(info.success){
                            resolve({data:1});
                        }else{
                            reject({data:0});
                        }
                 });
            })
    }
 }

export default indexModel;
