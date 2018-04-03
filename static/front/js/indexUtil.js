// JavaScript Document
//产品显示
function showProData(data) {
    for(var i=0;i<data.length;i++){
        if(data[i].proType=="develop") {
            var type="develop";
            var proInfo=data[i].proInfoList;
            var demand;             //需求定位
            var proSerice;         //需求方案
            var price;             //服务金额
            var time;              //时长
            if(proInfo.length<1){
                return;
            }
            if(proInfo.length==1){
                demand =proInfo[0].demand;
                proSerice  =proInfo[0].service;
                price=proInfo[0].servicePrice;
                time=proInfo[0].timeValue;
            }else{
                for(var j=0;j<proInfo.length;j++){
                    if(proInfo[j].service!="体验版"){//取第一个不是体验版的价格
                        demand =proInfo[j].demand;
                        proSerice =proInfo[j].service;
                        price=proInfo[j].servicePrice;
                        time=proInfo[j].timeValue;
                        break;

                    }
                }
                for(var j=0;j<proInfo.length;j++){
                    if(proInfo[j].service!="体验版"){//取最小的价格
                        if(price*1>proInfo[j].servicePrice*1){
                            price=proInfo[j].servicePrice;
                            demand =proInfo[j].demand;
                            proSerice  =proInfo[j].service;
                            time=proInfo[j].timeValue;
                        }
                    }
                }
                if(price==null || price==""){  //如果需求都是体验版
                    for(var a=0;a<proInfo.length;a++){
                        demand =proInfo[a].demand;
                        proSerice  =proInfo[a].service;
                        price=proInfo[a].servicePrice;
                        time=proInfo[a].timeValue;
                        break;
                    }
                }
            }
            $("#proOne").empty();
            //图片
            var mapData="<div class=\"get-back get-back1\"><img src=\""+map1+"\" onclick=\"proMation("+i+",'"+type+"','"+demand+"','"+proSerice+"')\"></div>";
            //标题 关键词
            var titleData="<p style=\"font-size: 16px;font-family: '微软雅黑';position: relative;top: 6px;\"><a href='javascript:void(null)' onclick=\"proMation("+i+",'"+type+"','"+demand+"','"+proSerice+"')\" >"+data[i].proTitle+"</a></p>"+
                "<p style=\"font-size: 14px;font-family: '微软雅黑';text-align: center;margin: 0 auto;margin-top: 8px;color: #ED0F0F;line-height: 22px;\">虚拟的internet其实是传统广告宣传新产物，两者结合更能广而告之</p>";
            //付款
            var pay= " <p style=\"font-size: 45px;font-family: '微软雅黑';color: #ED0F0F;\">"+price+"<span style=\"font-size: 18px\">元起</span></p>"+
                "<div style=\"margin-left: 105px;background: transparent\"> <button onclick=\"proOrder('"+demand+"-"+proSerice+"','"+time+"','"+1+"','"+data[i].id+"')\" class=\"ljgmbutton\">"+
                " </button>";

            var content="<p class=\"content-right-text-order1-p\"><span style=\"font-size: 14px;font-family: '微软雅黑';\">三了解</span>"+
                "<span style=\"margin-left: 10px\"><span style=\"color: #656565\">了解品牌、了解产品、了解市场、了解消<br>"+
                "费者、了解竞争对手......</span><span onclick=\"proMation("+i+",'"+type+"','"+demand+"','"+proSerice+"','prounderstand')\" style=\"color: #4088E3;cursor: pointer\">more</span></span></p>"+
                " <p class=\"content-right-text-order1-p\"><span style=\"font-size: 14px;font-family: '微软雅黑';\">五了解</span> " +
                "<span style=\"position: relative;left: 10px\"> <span style=\"color: #656565;\">开免费放500名中小型企业体验名额（免费<br>"+
                "<span style=\"margin-left: 50px\">体验）只想展示或者在网络上能够找到我们</span><br><span style=\"margin-left: -107px\">品牌......</span>"+
                "<span span onclick=\"proMation("+i+",'"+type+"','"+demand+"','"+proSerice+"','proscheme')\" style=\"color: #4088E3;cursor: pointer\">more</span></span></span> </p>";
            $("#proOne").append(mapData);
            $("#proOne").append(titleData);
            $("#proOne").append(pay);
            $("#proOne").append(content);
            break;
        }
    }
    for(var i=0;i<data.length;i++){
        if(data[i].proType=="seo") {
            var type="seo";
            var proInfo=data[i].proInfoList;
            var demand;             //需求定位
            var proSerice;         //需求方案
            var price;             //服务金额
            var time;              //时长
            if(proInfo.length<1){
                return;
            }
            if(proInfo.length==1){
                demand =proInfo[0].demand;
                proSerice  =proInfo[0].service;
                price=proInfo[0].servicePrice;
                time=proInfo[0].timeValue;
            }else{
                for(var j=0;j<proInfo.length;j++){
                    if(proInfo[j].service!="体验版"){//取第一个不是体验版的价格
                        demand =proInfo[j].demand;
                        proSerice =proInfo[j].service;
                        price=proInfo[j].servicePrice;
                        time=proInfo[j].timeValue;
                        break;
                    }
                }
                for(var j=0;j<proInfo.length;j++){
                    if(proInfo[j].service!="体验版"){//取最小的价格
                        if(price*1>proInfo[j].servicePrice*1){
                            price=proInfo[j].servicePrice;
                            demand =proInfo[j].demand;
                            proSerice  =proInfo[j].service;
                            time=proInfo[j].timeValue;
                        }
                    }
                }
                if(price==null || price==""){  //如果需求都是体验版
                    for(var a=0;a<proInfo.length;a++){
                        demand =proInfo[a].demand;
                        proSerice  =proInfo[a].service;
                        price=proInfo[a].servicePrice;
                        time=proInfo[a].timeValue;
                        break;
                    }
                }
            }
            $("#proTow").empty();
            //图片
            var mapData="<div class=\"get-back get-back7\"><img src=\""+map7+"\" onclick=\"proMation("+i+",'"+type+"','"+demand+"','"+proSerice+"')\"></div>";
            //标题 关键词
            var titleData="<p style=\"font-size: 16px;font-family: '微软雅黑';position: relative;top:6px\"><a href='javascript:void(null)' onclick=\"proMation("+i+",'"+type+"','"+demand+"','"+proSerice+"')\" >"+data[i].proTitle+"</a></p>"+
                "<p style=\"font-size: 14px;font-family: '微软雅黑';text-align: center;margin: 0 auto;margin-top: 8px;color: #ED0F0F;line-height: 22px;\">虚拟的internet其实是传统广告宣传新产物，两者结合更能广而告之</p>";
            //付款
            var pay= " <p style=\"font-size: 45px;font-family: '微软雅黑';color: #ED0F0F;\">"+price+"<span style=\"font-size: 18px\">元起</span></p>"+
                "<div style=\"margin-left: 105px;background: transparent\"> <button onclick=\"proOrder('"+demand+"-"+proSerice+"','"+time+"','"+1+"','"+data[i].id+"')\" class=\"ljgmbutton\">"+
                " </button>";

            var content="<p class=\"content-right-text-order1-p\"><span style=\"font-size: 14px;font-family: '微软雅黑';\">三了解</span>"+
                "<span style=\"margin-left: 10px\"><span style=\"color: #656565\">了解品牌、了解产品、了解市场、了解消<br>"+
                "费者、了解竞争对手......</span><span onclick=\"proMation("+i+",'"+type+"','"+demand+"','"+proSerice+"','prounderstand')\" style=\"color: #4088E3;cursor: pointer\">more</span></span></p>"+
                " <p class=\"content-right-text-order1-p\"><span style=\"font-size: 14px;font-family: '微软雅黑';\">五了解</span> " +
                "<span style=\"position: relative;left: 10px\"> <span style=\"color: #656565;\">开免费放500名中小型企业体验名额（免费<br>"+
                "<span style=\"margin-left: 50px\">体验）只想展示或者在网络上能够找到我们</span><br><span style=\"margin-left: -107px\">品牌......</span>"+
                "<span span onclick=\"proMation("+i+",'"+type+"','"+demand+"','"+proSerice+"','proscheme')\" style=\"color: #4088E3;cursor: pointer\">more</span></span></span> </p>";
            $("#proTow").append(mapData);
            $("#proTow").append(titleData);
            $("#proTow").append(pay);
            $("#proTow").append(content);
            break;
        }
    }
    for(var i=0;i<data.length;i++){
        if(data[i].proType=="popularize") {
            var type="popularize";
            var proInfo=data[i].proInfoList;
            var demand;             //需求定位
            var proSerice;         //需求方案
            var price;             //服务金额
            var time;              //时长
            if(proInfo.length<1){
                return;
            }
            if(proInfo.length==1){
                demand =proInfo[0].demand;
                proSerice  =proInfo[0].service;
                price=proInfo[0].servicePrice;
                time=proInfo[0].timeValue;
            }else{
                for(var j=0;j<proInfo.length;j++){
                    if(proInfo[j].service!="体验版"){//取第一个不是体验版的价格
                        demand =proInfo[j].demand;
                        proSerice =proInfo[j].service;
                        price=proInfo[j].servicePrice;
                        time=proInfo[j].timeValue;
                        break;
                    }
                }
                for(var j=0;j<proInfo.length;j++){
                    if(proInfo[j].service!="体验版"){//取最小的价格
                        if(price*1>proInfo[j].servicePrice*1){
                            price=proInfo[j].servicePrice;
                            demand =proInfo[j].demand;
                            proSerice  =proInfo[j].service;
                            time=proInfo[j].timeValue;
                        }
                    }
                }
                if(price==null || price==""){  //如果需求都是体验版
                    for(var a=0;a<proInfo.length;a++){
                        demand =proInfo[a].demand;
                        proSerice  =proInfo[a].service;
                        price=proInfo[a].servicePrice;
                        time=proInfo[a].timeValue;
                        break;
                    }
                }
            }
            $("#proThree").empty();
            //图片
            var mapData="<div class=\"get-back get-back4\"><img src=\""+map4+"\" onclick=\"proMation("+i+",'"+type+"','"+demand+"','"+proSerice+"')\"></div>";
            //标题 关键词
            var titleData="<p style=\"font-size: 16px;font-family: '微软雅黑';position: relative;top:6px\"><a href='javascript:void(null)' onclick=\"proMation("+i+",'"+type+"','"+demand+"','"+proSerice+"')\" >"+data[i].proTitle+"</a></p>"+
                "<p style=\"font-size: 14px;font-family: '微软雅黑';text-align: center;margin: 0 auto;margin-top: 8px;color: #ED0F0F;line-height: 22px;\">虚拟的internet其实是传统广告宣传新产物，两者结合更能广而告之</p>";
            //付款
            var pay= " <p style=\"font-size: 45px;font-family: '微软雅黑';color: #ED0F0F;\">"+price+"<span style=\"font-size: 18px\">元起</span></p>"+
                "<div style=\"margin-left: 105px;background: transparent\"> <button onclick=\"proOrder('"+demand+"-"+proSerice+"','"+time+"','"+1+"','"+data[i].id+"')\" class=\"ljgmbutton\">"+
                " </button>";

            var content="<p class=\"content-right-text-order1-p\"><span style=\"font-size: 14px;font-family: '微软雅黑';\">三了解</span>"+
                "<span style=\"margin-left: 10px\"><span style=\"color: #656565\">了解品牌、了解产品、了解市场、了解消<br>"+
                "费者、了解竞争对手......</span><span onclick=\"proMation("+i+",'"+type+"','"+demand+"','"+proSerice+"','prounderstand')\" style=\"color: #4088E3;cursor: pointer\">more</span></span></p>"+
                " <p class=\"content-right-text-order1-p\"><span style=\"font-size: 14px;font-family: '微软雅黑';\">五了解</span> " +
                "<span style=\"position: relative;left: 10px\"> <span style=\"color: #656565;\">开免费放500名中小型企业体验名额（免费<br>"+
                "<span style=\"margin-left: 50px\">体验）只想展示或者在网络上能够找到我们</span><br><span style=\"margin-left: -107px\">品牌......</span>"+
                "<span span onclick=\"proMation("+i+",'"+type+"','"+demand+"','"+proSerice+"','proscheme')\" style=\"color: #4088E3;cursor: pointer\">more</span></span></span> </p>";
            $("#proThree").append(mapData);
            $("#proThree").append(titleData);
            $("#proThree").append(pay);
            $("#proThree").append(content);
            break;
        }
    }
    for(var i=0;i<data.length;i++){
        if(data[i].proType=="marketing") {
            var type="marketing";
            var proInfo=data[i].proInfoList;
            var demand;             //需求定位
            var proSerice;         //需求方案
            var price;             //服务金额
            var time;              //时长
            if(proInfo.length<1){
                return;
            }

            if(proInfo.length==1){
                demand =proInfo[0].demand;
                proSerice  =proInfo[0].service;
                price=proInfo[0].servicePrice;
                time=proInfo[0].timeValue;
            }else{
                for(var j=0;j<proInfo.length;j++){
                    if(proInfo[j].service!="体验版"){//取第一个不是体验版的价格
                        demand =proInfo[j].demand;
                        proSerice =proInfo[j].service;
                        price=proInfo[j].servicePrice;
                        time=proInfo[j].timeValue;

                        break;
                    }
                }

                for(var j=0;j<proInfo.length;j++){
                    if(proInfo[j].service!="体验版"){//取最小的价格
                        if(price*1>proInfo[j].servicePrice*1){
                            price=proInfo[j].servicePrice;
                            demand =proInfo[j].demand;
                            proSerice  =proInfo[j].service;
                            time=proInfo[j].timeValue;
                        }
                    }
                }

                if(price==null || price==""){  //如果需求都是体验版  体验版0钱
                    for(var a=0;a<proInfo.length;a++){
                        demand =proInfo[a].demand;
                        proSerice  =proInfo[a].service;
                        price=proInfo[a].servicePrice;
                        time=proInfo[a].timeValue;
                        break;
                    }
                }
            }

            $("#proFour").empty();
            //图片
            var mapData="<div class=\"get-back get-back3\"><img src=\""+map3+"\" onclick=\"proMation("+i+",'"+type+"','"+demand+"','"+proSerice+"') \"></div>";
            //标题 关键词
            var titleData="<p style=\"font-size: 16px;font-family: '微软雅黑';position: relative;top:6px\"><a href='javascript:void(null)' onclick=\"proMation("+i+",'"+type+"','"+demand+"','"+proSerice+"')\" >"+data[i].proTitle+"</a></p>"+
                "<p style=\"font-size: 14px;font-family: '微软雅黑';text-align: center;margin: 0 auto;margin-top: 8px;color: #ED0F0F;line-height: 22px;\">虚拟的internet其实是传统广告宣传新产物，两者结合更能广而告之</p>";
            //付款
            var pay= " <p style=\"font-size: 45px;font-family: '微软雅黑';color: #ED0F0F;\">"+price+"<span style=\"font-size: 18px\">元起</span></p>"+
                "<div style=\"margin-left: 105px;background: transparent\"> <button onclick=\"proOrder('"+demand+"-"+proSerice+"','"+time+"','"+1+"','"+data[i].id+"')\" class=\"ljgmbutton\">"+
                " </button>";

            var content="<p class=\"content-right-text-order1-p\"><span style=\"font-size: 14px;font-family: '微软雅黑';\">三了解</span>"+
                "<span style=\"margin-left: 10px\"><span style=\"color: #656565\">了解品牌、了解产品、了解市场、了解消<br>"+
                "费者、了解竞争对手......</span><span onclick=\"proMation("+i+",'"+type+"','"+demand+"','"+proSerice+"','prounderstand')\" style=\"color: #4088E3;cursor: pointer\">more</span></span></p>"+
                " <p class=\"content-right-text-order1-p\"><span style=\"font-size: 14px;font-family: '微软雅黑';\">五了解</span> " +
                "<span style=\"position: relative;left: 10px\"> <span style=\"color: #656565;\">开免费放500名中小型企业体验名额（免费<br>"+
                "<span style=\"margin-left: 50px\">体验）只想展示或者在网络上能够找到我们</span><br><span style=\"margin-left: -107px\">品牌......</span>"+
                "<span span onclick=\"proMation("+i+",'"+type+"','"+demand+"','"+proSerice+"','proscheme')\" style=\"color: #4088E3;cursor: pointer\">more</span></span></span> </p>";
            $("#proFour").append(mapData);
            $("#proFour").append(titleData);
            $("#proFour").append(pay);
            $("#proFour").append(content);
            break;
        }
    }
}
// 更改浏览量跳转产品页
function proMation(data,type,demand,proSerice,uap) {
    var title = proList[data].proTitle;
    $.ajax({
        url : ctx+'/Product/browserUp',
        type : 'POST',
        data : "proTitle="+title,
        async:true,
        cache:false,
        dataType : 'json',
        success : function(data) {
            if(data!=null && data!=""){
                if(uap!=""&& uap!=null){
                    window.location.href = "/get/"+type+"."+uap;
                }else {
                    window.location.href = "/get/"+type;
                }
            }
        }
    })
}
function proOrder(row,time,num,titleId) {//产品编号，产品需求定位，产品方案
    $.ajax({
        url : ctx+'/Product/proOrder',
        type : 'POST',
        data : "row="+row+"&time="+time+"&num="+num+"&titleId="+titleId,
        async:true,
        cache:false,
        dataType : 'json',
        success :function(data){
            if(data.flag){
                window.location.href= ctx + "/orderensure";
            }
        }
    })
}
//-----------------------
 function showNewsData(data,oldDate) {
     var path="/xw/";
     var long= data.length;
     $("#newsTab").empty();
    for (var i=0;i<long;i++){
       var date=oldDate[i].substring(0,oldDate[i].length-6);
       var num= date.split("-");
        var url=path+date+"-"+data[i].id;

        date=(num[0]+num[1]+num[2]).substring(0,(num[0]+num[1]+num[2]).length-1);
        var row="  <div  class=\"left-Promise\">" +
            "<p><a href=\"javascript:window.open('"+path+date+"-"+data[i].id+"','_blank')\"><span class=\"promise-title\">"+data[i].newsTitle+"</span></a><span class=\"promise-time\">"+data[i].crateDate+"</span> <a href=\"javascript:window.open('"+path+date+"-"+data[i].id+"','_blank')\"><span style=\"color:#4089e3;cursor: pointer\">more</span></a></p>" +
            "</div><hr>";
         $("#newsTab").append(row);
     }
}








