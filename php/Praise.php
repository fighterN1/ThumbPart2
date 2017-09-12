<?php
require_once 'DBHelper.php';

class Praise{
    function __construct(){ }
    //更新点赞
    public function  updatePraiseCount( ){
                    //实例
            $db = DBHelper::getInstance();
            $res = $db->update('update TBThumb set PriaseNum=PriaseNum+1  where ID="1"');
            if($res>0){
                    echo json_encode(array('success'=>true,'message'=>'更新成功'));
            }else{
                    echo json_encode(array('success'=>false,'message'=>'更新失败'));
            }
    }
}
//
 $praiseObj = new Praise();
 $praiseObj->updatePraiseCount( );
?>