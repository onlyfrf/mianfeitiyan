var HOST = "https://sdk.yunhetong.com/sdk/";
//var HOST = "https://sdklink.yunhetong.com/sdk/";
//var HOST = "https://testsdk.yunhetong.com/sdk/";
//定于全局变量
var token="";         //用户token
var tokend="";        //平台token
var templateId="59806";    //合同模板
var title="";         //合同标题
var useCer="1";       //是否使用存证服务， 0不使用，1使用
var param="";         //合同占位符
var partners="";      //合同参与者
//模拟用户会员号
$(".membership").html("fengcheg000");
//切换合同类型
$("*[name='contrat_type']").change(function(){
	if($("*[name='contrat_type']").val()==1){
		templateId="59806";
		console.log(templateId);
	}else if($("*[name='contrat_type']").val()==2){
		templateId="59806";
		console.log(templateId);
		
	}
});
//获取用户名称生成合同名称
$("*[name='userName']").blur(function(){
	var name= $("*[name='userName']").val();
	title = name+"业务合同";
	console.log(title);
});
//企业，个体切换、据用户类型生成证件类别
$("*[name='userType']").change(function(){
	if($("*[name='userType']").val()==1){
		$(".userType").html("用户名");
		$("*[name='certifyType'] option").remove();
		$("*[name='certifyType']").append("<option value='1'>身份证</option>");
		$("*[name='certifyType']").append("<option value='2'>护照</option>");
		$("*[name='certifyType']").append("<option value='3'>军官证</option>");
		
	}else if($("*[name='userType']").val()==2){
		$(".userType").html("企业名称");
		$("*[name='certifyType'] option").remove();
		$("*[name='certifyType']").prepend("<option value='4' selected>营业执照</option>");
		$("*[name='certifyType']").prepend("<option value='5'>组织机构代码</option>");
		$("*[name='certifyType']").prepend("<option value='6''>社会统一信用码</option>");
	}
});

//定义合同参与者
$(".membership").blur(function(){
	var mem =$(".membership").val();
	var par=[{"appUserId":"fengcheng7080","locationName":"SA","keyWord":"卖方"},{"appUserId":mem,"locationName":"SB","keyWord":"买方"}];
	partners=JSON.stringify(par);
});





var addUser=function () {
    var data='?';
    data+='appId='+'2017092610081200843';
    data+='&appUserId='+$(".membership").val();
    data+='&cellNum=' +$("*[name='cellNum']").val();
    data+='&userType='+$("*[name='userType']").val();
    data+='&userName='+$("*[name='userName']").val();
    data+='&certifyType='+$("*[name='certifyType']").val();
    data+='&certifyNumber='+$("*[name='certifyNumber']").val();
    data+='&createSignature='+$("*[name='createSignature']").val();
    data+='&password='+'fengcheng7080'; 
    
    $.ajax({
        type: 'POST',
        url: HOST+'userInfo/addUser'+data,
        cache : false,
        dataType: 'json',
        data:{},
        success:function(data){

            var info ="添加用户结果:" + JSON.stringify(data);
            console.log(info);
            var errinfo= JSON.stringify(data.message);
            var code= JSON.stringify(data.subCode);
            console.log(code);
            if(code!=="200"){
            	alert(errinfo);
            }else{
            	console.log("添加用户成功");        	
            }
        },
        error:function(){
            alert("error!!!!")
        }
    });
};
   
var getToken=function () {
	//获取用户token
    var data='?';
    data+='appId='+'2017092610081200843';
    data+='&appUserId='+$(".membership").val();
    data+='&password=' +'fengcheng7080';

    $.ajax({
        type: 'POST',
        url: HOST+'token/getToken'+data,
        cache : false,
        dataType: 'json',
        data:{},
        success:function(data){
            var info="验证token"+JSON.stringify(data);
            console.log(info);
            var tokenn = data.value.token.toString();
            console.log("token:"+tokenn);
            token=data.value.token.toString();
            
        },
        error:function(){
            alert("error!!!!")
        }
    });
    
    //获取平台token
	var datad='?';
    datad+='appId='+'2017092610081200843';
    datad+='&appUserId='+"fengcheng7080";
    datad+='&password=' +'fengcheng7080';

    $.ajax({
        type: 'POST',
        url: HOST+'token/getToken'+datad,
        cache : false,
        dataType: 'json',
        data:{},
        success:function(data){
        	
            var infoo="平台token"+JSON.stringify(data);
            console.log(infoo);
            tokend = data.value.token.toString();
            console.log("token:"+tokend);
            tokend=data.value.token.toString();
            
        },
        error:function(){
            alert("error!!!!")
        }
    });
    //获取token后自动根据模板创建合同
   setTimeout(function(){
   	var data='?token='+tokend;
    data+='&title='+title;
    data+='&defContractNo='+$("*[name='defContractNo']").val();
    data+='&templateId='+templateId;
    data+='&useCer='+useCer;
    data+='&param='+param;

    $.ajax({
        type: 'POST',
        url: HOST+'contract/templateContract'+data,
        cache : false,
        dataType: 'json',
        data:{},
        success:function(data){
            var info='  生成合同结果：'+ JSON.stringify(data);
            console.log(info);
            //获取合同编号并写入页面中
            var contractId =data.value.contractId;
            $("*[name='contractId']").val(contractId);
            console.log(data.value.contractId);
            //获取参与者写入合同参与者表
            var user =$("*[name='userName']").val();
            $("#partnters").val("广西峰程璇科技有限公司、"+user);
            
            var errinfo= JSON.stringify(data.message);
            var code= JSON.stringify(data.subCode);
            console.log(code);
            if(code!=="200"){
            	alert(errinfo);
            }else{
            	console.log("添加用户成功");        	
            }
        },
        error:function(){
            alert("error!!!!");
        }
    });
   },400);
   //添加合同参与者
// setTimeout(function(){
// 	var data='?token='+tokend;
//  data+='&contractId='+$("*[name='contractId']").val();
//  data+='&partners='+partners;
//
//  $.ajax({
//      type: 'POST',
//      url: HOST+'contract/addPartner'+data,
//      cache : false,
//      dataType: 'json',
//      data:{},
//      success:function(data){
//          var info='添加合同参与者结果：'+JSON.stringify(data);
//          console.log(info);
//      },
//      error:function(){
//          alert("error!!!!");
//      }
//  });
// },600);
   //设置平台自动签署合同
// setTimeout(function(){
// 	 	var data='?token='+tokend;
// 	 	var con = $("*[name='contractId']").val();
// 	 	console.log(con);
//  
//  	data+='&contractId='+$("*[name='contractId']").val();
//  	data+='&signer='+"['feng000']";
//
//	    $.ajax({
//	        type: 'POST',
//	        url: HOST+'contract/signContract'+data,
//	        cache : false,
//	        dataType: 'json',
//	        data:{},
//	        success:function(data){
//	            var info='合同自动签署结果：'+JSON.stringify(data);
//	            console.log(info);
//	        },
//	        error:function(){
//	            alert("error!!!!");
//	        }
//	    });
// },800)
   
};
//验证token
var checkToken=function () {
    var data='?token='+token;
    $.ajax({
        type: 'GET',
        url: HOST+'token/checkToken'+data,
        cache : false,
        dataType: 'json',
        data:{},
        success:function(data){
            var info=' 检验token结果：'+JSON.stringify(data);
            console.log(info);
           
        },
        error:function(){
            alert("error!!!!")
        }
    });
    var datad='?token='+tokend;
    console.log(tokend);
    $.ajax({
        type: 'GET',
        url: HOST+'token/checkToken'+datad,
        cache : false,
        dataType: 'json',
        data:{},
        success:function(data){
            var info=' 检验token结果：'+JSON.stringify(data);
            console.log(info);
           
        },
        error:function(){
            alert("error!!!!")
        }
    });
};

var addPartner=function () {
    var data='?token='+tokend;
    data+='&contractId='+$("*[name='contractId']").val();
    data+='&partners='+partners;

    $.ajax({
        type: 'POST',
        url: HOST+'contract/addPartner'+data,
        cache : false,
        dataType: 'json',
        data:{},
        success:function(data){
            var info='添加合同参与者结果：'+JSON.stringify(data);
            console.log(info);
            
            var errinfo= JSON.stringify(data.message);
            var code= JSON.stringify(data.subCode);
            console.log(code);
            if(code!=="200"){
            	alert(errinfo);
            }else{
            	console.log("添加用户成功");        	
            }
        },
        error:function(){
            alert("error!!!!");
        }
    });
    
     // 设置平台自动签署合同
   setTimeout(function(){
   	 	var data='?token='+tokend;
   	 	var con = $("*[name='contractId']").val();
   	 	console.log(con);
    
    	data+='&contractId='+$("*[name='contractId']").val();
    	data+='&signer='+"['fengcheng7080']";

	    $.ajax({
	        type: 'POST',
	        url: HOST+'contract/signContract'+data,
	        cache : false,
	        dataType: 'json',
	        data:{},
	        success:function(data){
	            var info='合同自动签署结果：'+JSON.stringify(data);
	            console.log(info);
	        },
	        error:function(){
	            alert("error!!!!");
	        }
	    });
   },200);
    
};


//设置自动签署合同
//var autoSignContract=function () {
//  var data='?token='+tokend;
//  var con = $("*[name='contractId']").val();
//  console.log(con);
//  
//  data+='&contractId='+$("*[name='contractId']").val();
//  data+='&signer='+"['feng000']";
//
//  $.ajax({
//      type: 'POST',
//      url: HOST+'contract/signContract'+data,
//      cache : false,
//      dataType: 'json',
//      data:{},
//      success:function(data){
//          var info='合同自动签署结果：'+JSON.stringify(data);
//          console.log(info);
//      },
//      error:function(){
//          alert("error!!!!");
//      }
//  });
//};
//签署合同
var signContract=function () {
	
    var data='?token='+token;
    data+='&contractId='+$("*[name='contractId']").val();
    //data+='&noticeParams={"code":"success"}';
    window.open(HOST+'viewsopen/contract_view_p.html'+data);
};
//合同作废
var invalid=function () {
    var data='?token='+token;
    data+='&contractId='+$("*[name='contractId']").val();
    $.ajax({
        type: 'POST',
        url: HOST+'contract/invalid'+data,
        cache : false,
        dataType: 'json',
        data:{},
        success:function(data){
            var info='合同作废结果：'+JSON.stringify(data);
        },
        error:function(){
            alert("error!!!!");
        }
    });
};
//查看合同列表
var contractList=function () {
    var data='?token='+token;
    data+='&pageNum='+$("*[name='pageNum']").val();
    data+='&pageSize='+$("*[name='pageSize']").val();
    $.ajax({
        type: 'GET',
        url: HOST+'contract/list'+data,
        cache : false,
        dataType: 'json',
        data:{},
        success:function(data){
            var info='合同列表信息：'+JSON.stringify(data);
            console.log(info);
        },
        error:function(){
            alert("error!!!!");
        }
    });
};
//查看合同状态
var contractDetail=function () {
    var data='?token='+token;
    data+='&contractId='+$("*[name='contractId']").val();
    $.ajax({
        type: 'GET',
        url: HOST+'contract/detail'+data,
        cache : false,
        dataType: 'json',
        data:{},
        success:function(data){
            var info='合同签署状态信息：'+JSON.stringify(data);
            console.log(info);
        },
        error:function(){
            alert("error!!!!");
        }
    });
};
var contractDownload=function () {
    var data='?token='+token;
    data+='&contractId='+$("*[name='contractId']").val();
    window.open(HOST+'contract/download'+data);
};


//修改用户手机号
//var modifyCellNum=function () {
//  var data='?token='+token+'&cellNum='+$("*[name='newCellNum']").val();
//  $.ajax({
//      type: 'POST',
//      url: HOST+'userInfo/modifyCellNum'+data,
//      cache : false,
//      dataType: 'json',
//      data:{},
//      success:function(data){
//          var info=$("*[name='info']").val()+'\r\n  修改手机号结果：';
//          $("*[name='info']").val(info+JSON.stringify(data));
//      },
//      error:function(){
//          alert("error!!!!")
//      }
//  });
//};
//修改用户名
//var modifyUserName=function () {
//  var data='?token='+token;
//  data+='&userName='+$("*[name='newUserName']").val();
//  data+='&createSignature='+$("*[name='newCreateSignature']").val();
//  $.ajax({
//      type: 'POST',
//      url: HOST+'userInfo/modifyUserName'+data,
//      cache : false,
//      dataType: 'json',
//      data:{},
//      success:function(data){
//          var info=$("*[name='info']").val()+'\r\n  修改用户名结果：';
//          $("*[name='info']").val(info+JSON.stringify(data));
//      },
//      error:function(){
//          alert("error!!!!")
//      }
//  });
//};
//var templateContract=function () {
//  var data='?token='+tokend;
//  data+='&title='+$("*[name='title']").val();
//  data+='&defContractNo='+$("*[name='defContractNo']").val();
//  data+='&templateId=' +$("*[name='templateId']").val();
//  data+='&useCer='+$("*[name='useCer']").val();
//  data+='&param='+$("*[name='param']").val();
//
//  $.ajax({
//      type: 'POST',
//      url: HOST+'contract/templateContract'+data,
//      cache : false,
//      dataType: 'json',
//      data:{},
//      success:function(data){
//          var info='  生成合同结果：'+ JSON.stringify(data);
//          console.log(info);
//      },
//      error:function(){
//          alert("error!!!!");
//      }
//  });
//};
//var fileContract=function(){
//  var data=new FormData();//'?token='+token;
//  data.append('token',token);
//  data.append('title',$("*[name='title']").val());
//  data.append('defContractNo',$("*[name='defContractNo']").val());
//  data.append('useCer',$("*[name='useCer']").val());
//  data.append('file',$("*[name='file']")[0].files[0]);
//  $.ajax({
//      type: 'POST',
//      url: HOST+'contract/fileContract',
//      data: data,
//      processData:false,
//      contentType:false,
//      success:function(data){
//          var info=$("*[name='info']").val()+'\r\n  生成合同结果：';
//          $("*[name='info']").val(info+JSON.stringify(data));
//      },
//      error:function(){
//          alert("error!!!!");
//      }
//  });
//};