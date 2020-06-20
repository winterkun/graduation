<?php
namespace Home\Controller;

use Think\Controller;
class IndexController extends BaseController {
	
    /**
     * 测试函数
     * @return [type] [description]
     */
    public function yiqu_all(){	
      $Message=M('imp');
      $where=array();
      $all_messages=$Message->select();
      $this->ajaxReturn(json_encode($all_messages));
    }
	//实时填报接口
    public function shishi_all(){  	
      $Message=M('shishi');
      $where=array();
      $all_messages=$Message->select();
      $this->ajaxReturn(json_encode($all_messages));
    }
    //重点防控人员接口
    public function fangkong_all(){	
      $Message=M('fangkong');
      $where=array();
      $all_messages=$Message->select();
      $this->ajaxReturn(json_encode($all_messages));
    }
    //进校动态接口
    public function jinxiao_all(){
      $Message=M('dongtai');
      $where=array();
      $all_messages=$Message->select();
      $this->ajaxReturn(json_encode($all_messages));
    }
    //学生填报率接口
    public function tianbao_all(){
    	
      $Message=M('tianbao');
      $where=array();
      $all_messages=$Message->select();
      $this->ajaxReturn(json_encode($all_messages));
    }
    //教师填报率接口
    public function teatianbao_all(){
      $Message=M('teatianbao');
      $where=array();
      $all_messages=$Message->select();
      $this->ajaxReturn(json_encode($all_messages));
    }
    //在杭在临人数接口
    public function renshu_all(){
      $Message=M('renshu');
      $where=array();
      $all_messages=$Message->select();
      $this->ajaxReturn(json_encode($all_messages));
    }
    public function fenbu_all(){
      $Message=M('fenbu');
      $where=array();
      $all_messages=$Message->select();
      $this->ajaxReturn(json_encode($all_messages));
    }

}

