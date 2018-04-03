
var code; //在全局定义验证码
    //产生验证码
    window.onload = function() {
        createCode();
        createCode2();
    };

    function createCode() {
        code = "";
        var codeLength = 4; //验证码的长度
        var checkCode = document.getElementById("code1");
        var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数
        for(var i = 0; i < codeLength; i++) { //循环操作
            var charIndex = Math.floor(Math.random() * 36); //取得随机数的索引
            code += random[charIndex]; //根据索引取得随机数加到code上
        }
        checkCode.value = code; //把code值赋给验证码
    }
    //校验验证码
    function validate() {
        var inputCode = document.getElementById("input1").value.toUpperCase(); //取得输入的验证码并转化为大写

            var findNodes = document.getElementById("span").children;
            if(findNodes.length==0) {
                if (inputCode != code) { //若输入的验证码与产生的验证码不一致时
                    var appdom = document.createElement("span");
                    appdom.innerHTML = "验证码输入错误!";
                    document.getElementById("span").appendChild(appdom);
                    createCode(); //刷新验证码
                    return false;
                }
            }

         else {
             var findNodes = document.getElementById("span").children;
             if (inputCode == code) {
                 document.getElementById("span").removeChild(findNodes[0]);
             }
         }
    }


    var code2; //在全局定义验证码
    //产生验证码
    

    function createCode2() {
        code2 = "";
        var codeLength = 4; //验证码的长度
        var checkCode = document.getElementById("code2");
        var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数
        for(var i = 0; i < codeLength; i++) { //循环操作
            var charIndex = Math.floor(Math.random() * 36); //取得随机数的索引
            code2 += random[charIndex]; //根据索引取得随机数加到code上
        }
        checkCode.value = code2; //把code值赋给验证码
    }
    //校验验证码
    function validate2() {
        var inputCode = document.getElementById("input2").value.toUpperCase(); //取得输入的验证码并转化为大写
         if(inputCode != code2) { //若输入的验证码与产生的验证码不一致时
            createCode2(); //刷新验证码
        }
    }

//表单验证
$(document).ready(function() {

	//表单验证
	//注册正则验证
	var formTest = {
		phone: function(phoneValue) {
			var reg = /^(\+86|0086)?\s*1[34578]\d{9}$/;
			return reg.test(phoneValue);
		},
		email: function(emailValue) {
			var reg = /^\w+@[a-zA-Z0-9]{2,}(.[a-zA-Z0-9]{2,3}){1,2}$/;
			return reg.test(emailValue);
		},
		//6-12位数字或字母
		password: function(passwordValue) {
			var reg = /^([a-zA-Z]|[0-9]){6,12}$/;
			return reg.test(passwordValue);
		}
	};
	//验证方法集合的对象
	var registerTest = {
		//电话验证
		testPhone: function(selector) {
			var $this = $(selector);
			if($this.val() === "") {
				console.log('手机号不能为空');
				$this.next().html("手机号不能为空").removeClass("succ");
				return false;
			} else if(!formTest.phone($this.val())) {
				console.log("手机号格式错误");
				$this.addClass("err").next().html("手机号格式不正确").removeClass("succ");
				return false;
			} else {
                $.ajax({
                    type : 'POST',
                    url : ctx+'/virnum',
                    dataType: 'json',
                    data:{"phonenum":$("#phonenum").val()},
                    success: function(msg) {
                        if(msg.data){
                        	$("#yzm").removeAttr("disabled");
                            $("#phonenum_comment").html("");
						}else{
                            $("#phonenum_comment").html("该手机号已注册");
                        	$('#yzm').attr("disabled","true");
						}
                    }
                });
				console.log("手机号格式正确");
				$this.removeClass("err").next().addClass("succ");
				return true;
			}
		},
		//邮件验证
		testEmail: function(selector) {
			var $this = $(selector);
			if($this.val() === "") {
				console.log('email不能为空');
				$this.next().html("邮箱不能为空").removeClass("succ");
				return false;
			} else if(!formTest.email($this.val())) {
				console.log("邮箱格式错误");
				$this.addClass("err").next().html("邮箱格式不正确").removeClass("succ");
				return false;
			} else {
                $.ajax({
                    type : 'POST',
                    url : ctx+'/viremail',
                    dataType: 'json',
                    data:{"email":$("#email").val()},
                    success: function(msg) {
                        if(msg.data){
                            $("#e-yzm").removeAttr("disabled");
                            $("yxhm").html("");
                        }else{
                            $("#yxhm").html("该邮箱已注册");
                            $('#e-yzm').attr("disabled","true");
                        }
                    }
                });
				console.log("邮箱格式正确");
				$this.removeClass("err").next().html("<i class='fa fa-address-book'></i>").addClass("succ");
				return true;
			}
		},
		//必填信息
		testRequired: function(selector, msg) {
			var $this = $(selector);
			var text = msg ? msg : '信息不能为空';
			if($this.val() === "") {
				console.log(text);
				$this.next().html(text).removeClass("succ");
				return false;
			} else {
				$this.removeClass("err").next().html("<i class='fa fa-address-book'></i>").addClass("succ");
				return true;
			}
		},
		//密码强度
		testPassword: function(selector, levelList) { //selector->密码输入框  levelList->密码强度列表
			var $this = $(selector);
			var password = $this.val();
			var $levelList = $(levelList);
			//判断密码长度是否在6-12位之间
			if(password.length >= 6 && password.length <= 12) {
				$this.css('border-color', '#bbb').next().html('');
				var rules = [{
						reg: /\d+/,
						weight: 1
					}, {
						reg: /[a-z]+/,
						weight: 1
					}, {
						reg: /[A-Z]+/,
						weight: 1
					}
				];
				//设置等级
				var strongLevel = {
					'1': '弱',
					'2': '中',
					'3': '强'
				};
				var weight = 0;
				for(var j = rules.length - 1; j >= 0; j--) {
					if(rules[j].reg.test(password)) {
						weight += rules[j].weight;
					}
				}

				if(weight === 1) {
					$levelList.find('li').css("background", "transparent");
					$levelList.find('li:first-child').css("background", 'red').parent().next().html('弱').css('color', 'red');

				} else if(weight === 2) {
					$levelList.find('li').css("background", "transparent");
					$levelList.find('li:first-child').css("background", '#92C41D').next().css("background", '#FF7C01').parent().next().html('中').css('color', '#FF7C01');
				} else if(weight === 3) {
					$levelList.find('li').css("background", "transparent");
					$levelList.find('li:first-child').css("background", 'green').next().css("background", 'green').next().css("background", 'green').parent().next().html('强').css('color', 'green');
				}

				return true;
			} else {
				console.log('密码由数字、大小写字母组成，长度要在6-12位之间');
				$this.css("border-color", 'red').next().html("密码由数字、大小写字母组成，长度要在6-12位之间").css('color', 'red');
				return false;
			}
		},
		//密码强度2
		testPassword2: function(selector, levelList) { //selector->密码输入框  levelList->密码强度列表
			var $this = $(selector);
			var password = $this.val();
			var $levelList = $(levelList);
			//判断密码长度是否在6-12位之间
			if(password.length >= 6 && password.length <= 12) {
				$this.css('border-color', '#bbb').next().html('');
				var rules = [{
						reg: /\d+/,
						weight: 1
					}, {
						reg: /[a-z]+/,
						weight: 1
					}, {
						reg: /[A-Z]+/,
						weight: 1
					}
				];
				//设置等级
				var strongLevel = {
					'1': '弱',
					'2': '中',
					'3': '强'
				};
				var weight = 0;
				for(var j = rules.length - 1; j >= 0; j--) {
					if(rules[j].reg.test(password)) {
						weight += rules[j].weight;
					}
				}

				if(weight === 1) {
					$levelList.find('li').css("background", "transparent");
					$levelList.find('li:first-child').css("background", 'red').parent().next().html('弱').css('color', 'red');

				} else if(weight === 2) {
					$levelList.find('li').css("background", "transparent");
					$levelList.find('li:first-child').css("background", '#92C41D').next().css("background", '#FF7C01').parent().next().html('中').css('color', '#FF7C01');
				} else if(weight === 3) {
					$levelList.find('li').css("background", "transparent");
					$levelList.find('li:first-child').css("background", 'green').next().css("background", 'green').next().css("background", 'green').parent().next().html('强').css('color', 'green');
				}

				return true;
			} else {
				console.log('密码由数字、大小写字母组成，长度要在6-12位之间');
				$this.css("border-color", 'red').next().html("密码由数字、大小写字母组成，长度要在6-12位之间").css('color', 'red');
				return false;
			}
		},
		//密码是否相同
		testPasswordAgain: function(selector, originalPassword) {
			$selector = $(selector);
			$originalPassword = $(originalPassword);
			if($selector.val() === $originalPassword.val()) {
				//密码一样
				$selector.next().html("").css("color", 'green');
				return true;
			} else {
				//两次输入不一致
				$selector.next().html("两次密码不一致").css("color", 'red');
				return false;
			}
		}

	};

	

	//绑定键盘弹起事件 验证电话和邮件
	$('#phonenum').on("keyup", registerTest.testPhone.bind(this, '#phonenum'));
    $('#phonenum').on("blur", registerTest.testPhone.bind(this, '#phonenum'));
	$('#email').on("keyup", registerTest.testEmail.bind(this, '#email'));
    $('#email').on("blur", registerTest.testEmail.bind(this, '#email'));
	$('#Section1 #password').on('keyup', registerTest.testPassword.bind(this, '#Section1 #password', '#passwordLevel'));
	$('#Section1 #password_again').on('keyup', registerTest.testPasswordAgain.bind(this, '#Section1 #password_again', '#Section1 #password'));

	$('#Section2 .password').on('keyup', registerTest.testPassword2.bind(this, '#Section2 .password', '#passwordLevel2'));
	$('#Section2 .password_again').on('keyup', registerTest.testPasswordAgain.bind(this, '#Section2 .password_again', '#Section2 .password'));


	$("#ver").click(function(e) {
		e.preventDefault();
		console.log(code);
		var inputCode = document.getElementById("input1").value.toUpperCase();
		var pass = $('#Section1 #password#register_password').val();
		var pass_ag = $('#Section1 #password_again').val();
		var phone = $('#phonenum').val();
		 if(pass == "" || pass_ag == "" || phone == "" || inputCode =="") {
             $("phonenum_comment").html("*号项不能为空!").css("color", 'red');
			} else{
             $.ajax({
                 type : 'POST',
                 url : ctx+'/reg',
                 dataType: 'json',
                 data:$("#mainform").serialize(),
                 success: function(msg) {
                 	if (msg.data){
                        alert("注册成功!");
                    }else {
                        alert("注册失败!请完善注册信息!")
					}
                 }
             })
		 }
	});
	$("#yzm").click(function(){
        var countdown = 60;
        var testphone = $("#phonenum").hasClass('err');
        var phone = $('#phonenum').val();
if(testphone){

}else if(phone == ""){

}else{

	settime(this);
    $.ajax({
        type : 'POST',
        url : ctx+'/code',
        dataType: 'json',
        data:{"phonenum":$("#phonenum").val()},
        success: function(data) {
            console.log(data);
        }
    })
}

        function settime(obj) {
            if(countdown == 0) {
                obj.removeAttribute("disabled");
                obj.value = "免费获取验证码";
                countdown = 60;
                return;
            } else {
                obj.setAttribute("disabled", true);
                obj.value = "重新发送(" + countdown + ")";
                countdown--;
            }
            setTimeout(function() {
                settime(obj)
            }, 1000)
        }
	});
    $("#e-yzm").click(function(){
        var countdown = 60;
        var testemail = $("#email").hasClass('err');
        var email = $('#email').val();
        if(testemail){

        }else if(email == ""){

        }else{
            settime(this);
            $.ajax({
                type : 'POST',
                url : ctx+'/mailcode',
                dataType: 'json',
                data:{"email":$("#email").val()},
                success: function(data) {
                    console.log(data);
                }
            })
        }

        function settime(obj) {
            if(countdown == 0) {
                obj.removeAttribute("disabled");
                obj.value = "免费获取验证码";
                countdown = 60;
                return;
            } else {
                obj.setAttribute("disabled", true);
                obj.value = "重新发送(" + countdown + ")";
                countdown--;
            }
            setTimeout(function() {
                settime(obj)
            }, 1000)
        }
    });

    $("#ver1").click(function () {
        var inputCode = document.getElementById("input2").value.toUpperCase();
        var password = $('#Section2 #password#register_password').val();
        var password_again = $('#Section2 #password_again').val();
        var email = $('#email').val();
        if(password == "" || password_again == "" || email == "" || inputCode =="") {
            $("#yxhm").html("*号项不能为空!").css("color", 'red');
        }else {
            $.ajax({
                type: 'POST',
                url: ctx + '/regs',
                dataType: 'json',
                data: $("#secondform").serialize(),
                success: function (msg) {
                    if (msg.data) {
                        alert("注册成功!");
                    } else {
                        alert("注册失败!请完善注册信息!")
                    }
                }
            })
        }
    })
});