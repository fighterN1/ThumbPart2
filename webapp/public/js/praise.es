
class PraiseButton {
    constructor(num, element) {
        this.num = num;
        this.element = element;

    }

    clickAction() {
        this.element.click(() => {
            if (this.num < 10) {
                this.element.css('-webkit-filter', 'grayscale(0)');
                $('#animation').addClass('num');
                this.num = add(this.num);
                setTimeout(function() {
                    $('#animation').removeClass('num');
                }, 1000);

                //请求数据
                axios.get('/index/updata', {
                        params: {
                          UserID: "user1"
                        }
                      })
                      .then(function (response) {
                        console.log("添加成功",response);
                      })
                      .catch(function (error) {
                        console.log("添加失败",error);
                 });
            }else{
                this.element.css('-webkit-filter', 'grayscale(1)');
                this.num=0;
            }
            
        })
    }
}


class Thumb extends PraiseButton{
    constructor(num,element){
        super(num,element);
    }
}
 export
 default{
    Thumb
 }
// let f= new Thumb(0,$('#thumb'));
// f.clickAction();