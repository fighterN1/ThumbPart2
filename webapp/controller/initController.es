import indexController from './indexController';
const initController={
    init(app,router){
        app.use(router(_=>{
            _.get('/index/index',indexController.index());
            _.get('/index/updata',indexController.update());
             _.get('/index/thumb',indexController.thumb());
        }))
    }

}

export default initController;
